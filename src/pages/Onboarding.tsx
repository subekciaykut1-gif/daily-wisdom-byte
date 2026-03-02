import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/mockData";
import { Target, BookOpen, Clock, Headphones, User, ChevronRight } from "lucide-react";
import onboardingHero from "@/assets/onboarding-hero.jpg";

const steps = [
  {
    title: "What's your goal?",
    subtitle: "We'll personalise your experience",
    icon: Target,
    options: [
      { id: "learn", label: "Learn new skills", emoji: "🚀" },
      { id: "grow", label: "Personal growth", emoji: "🌱" },
      { id: "career", label: "Advance my career", emoji: "💼" },
      { id: "mindset", label: "Build better habits", emoji: "⚡" },
    ],
  },
  {
    title: "Topics you love",
    subtitle: "Pick at least 3 topics",
    icon: BookOpen,
    options: categories.slice(0, 6).map((c) => ({
      id: c.id,
      label: c.label,
      emoji: c.emoji,
    })),
    multiSelect: true,
  },
  {
    title: "Daily reading time",
    subtitle: "How much time can you dedicate?",
    icon: Clock,
    options: [
      { id: "5", label: "5 minutes", emoji: "⏱️" },
      { id: "10", label: "10 minutes", emoji: "⏰" },
      { id: "15", label: "15 minutes", emoji: "🕐" },
      { id: "30", label: "30+ minutes", emoji: "📖" },
    ],
  },
  {
    title: "How do you learn best?",
    subtitle: "Choose your preferred format",
    icon: Headphones,
    options: [
      { id: "audio", label: "Audio (listen)", emoji: "🎧" },
      { id: "text", label: "Text (read)", emoji: "📝" },
      { id: "both", label: "Both!", emoji: "✨" },
    ],
  },
  {
    title: "What's your name?",
    subtitle: "Let's make it personal",
    icon: User,
    isNameStep: true,
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string[]>>({});
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const current = steps[step];
  const isMulti = "multiSelect" in current && current.multiSelect;
  const isNameStep = "isNameStep" in current && current.isNameStep;

  const toggleOption = (id: string) => {
    setSelections((prev) => {
      const current = prev[step] || [];
      if (isMulti) {
        return {
          ...prev,
          [step]: current.includes(id)
            ? current.filter((x) => x !== id)
            : [...current, id],
        };
      }
      return { ...prev, [step]: [id] };
    });
  };

  const canProceed = isNameStep
    ? name.trim().length > 0
    : (selections[step]?.length || 0) > 0;

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress Bar */}
      <div className="flex gap-1.5 p-4">
        {steps.map((_, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full overflow-hidden bg-muted"
          >
            <motion.div
              className="h-full gradient-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: i <= step ? "100%" : "0%" }}
              transition={{ duration: 0.4 }}
            />
          </div>
        ))}
      </div>

      {/* Skip */}
      <div className="flex justify-end px-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground text-xs"
          onClick={() => navigate("/")}
        >
          Skip
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col px-6 py-4"
        >
          {step === 0 && (
            <div className="relative mx-auto mb-6 h-40 w-full max-w-xs overflow-hidden rounded-2xl">
              <img
                src={onboardingHero}
                alt="GrowMe"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 gradient-primary opacity-30" />
            </div>
          )}

          <div className="mb-6">
            <h1 className="text-2xl font-bold font-display">{current.title}</h1>
            <p className="mt-1 text-muted-foreground">{current.subtitle}</p>
          </div>

          {isNameStep ? (
            <div className="flex-1">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your first name"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-lg font-medium focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                autoFocus
              />
            </div>
          ) : (
            <div className={`flex-1 grid gap-3 ${isMulti ? "grid-cols-2" : "grid-cols-1"}`}>
              {"options" in current &&
                current.options?.map((opt) => {
                  const selected = selections[step]?.includes(opt.id);
                  return (
                    <motion.button
                      key={opt.id}
                      onClick={() => toggleOption(opt.id)}
                      className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                        selected
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-border bg-card hover:border-primary/30"
                      }`}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="text-2xl">{opt.emoji}</span>
                      <span className="font-medium text-sm">{opt.label}</span>
                    </motion.button>
                  );
                })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="p-6">
        <Button
          className="w-full h-12 rounded-xl gradient-primary text-primary-foreground font-semibold text-base shadow-lg disabled:opacity-40"
          disabled={!canProceed}
          onClick={next}
        >
          {step === steps.length - 1 ? "Start Learning" : "Continue"}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
