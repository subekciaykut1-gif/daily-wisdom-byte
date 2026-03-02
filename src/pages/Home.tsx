import { motion } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { StreakBadge } from "@/components/StreakBadge";
import { BookCard } from "@/components/BookCard";
import { books, learningPlans, dailyQuote, userProgress } from "@/data/mockData";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-6 pb-2">
        <div>
          <p className="text-sm text-muted-foreground">Good morning 👋</p>
          <h1 className="text-xl font-bold font-display">Ready to grow?</h1>
        </div>
        <StreakBadge />
      </div>

      {/* XP Bar */}
      <div className="mx-5 mt-2 flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full gradient-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(userProgress.xp % 300) / 3}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        <span className="text-xs font-semibold text-primary">
          {userProgress.xp} XP
        </span>
      </div>

      {/* Daily Quote */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-5 mt-4 rounded-xl bg-muted/50 p-4 border border-border/50"
      >
        <div className="flex items-start gap-2">
          <Sparkles className="h-4 w-4 text-warning mt-0.5 shrink-0" />
          <div>
            <p className="text-sm italic leading-relaxed">"{dailyQuote.text}"</p>
            <p className="mt-1 text-xs text-muted-foreground font-medium">
              — {dailyQuote.author}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Today's Pick */}
      <div className="px-5 mt-6">
        <BookCard book={books[0]} variant="featured" />
      </div>

      {/* 28-Day Plans */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-5 mb-3">
          <h2 className="text-lg font-bold font-display">28-Day Plans</h2>
          <button className="flex items-center gap-1 text-xs text-primary font-medium">
            See all <ArrowRight className="h-3 w-3" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-5 pb-2 scrollbar-hide">
          {learningPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="w-56 shrink-0 rounded-xl bg-card p-4 border border-border/50 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{plan.emoji}</span>
                <h3 className="font-semibold text-sm leading-tight">{plan.title}</h3>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>{plan.progress}/{plan.duration} days</span>
                  <span>{Math.round((plan.progress / plan.duration) * 100)}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full gradient-primary transition-all"
                    style={{ width: `${(plan.progress / plan.duration) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Continue Reading */}
      <div className="mt-6 px-5">
        <h2 className="text-lg font-bold font-display mb-3">Continue Reading</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {books.slice(1, 5).map((book, i) => (
            <BookCard key={book.id} book={book} variant="compact" index={i} />
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="mt-6 px-5 pb-4">
        <h2 className="text-lg font-bold font-display mb-3">Trending Now 🔥</h2>
        <div className="flex flex-col gap-3">
          {books.slice(2).map((book, i) => (
            <BookCard key={book.id} book={book} index={i} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
