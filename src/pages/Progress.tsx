import { AppLayout } from "@/components/AppLayout";
import { userProgress, levels, badges } from "@/data/mockData";
import { motion } from "framer-motion";
import { Flame, BookOpen, Headphones, Highlighter, Trophy } from "lucide-react";

export default function Progress() {
  const currentLevel = levels.find((l) => l.level === userProgress.level)!;
  const nextLevel = levels.find((l) => l.level === userProgress.level + 1);
  const xpInLevel = nextLevel
    ? userProgress.xp - currentLevel.xpRequired
    : userProgress.xp;
  const xpForNext = nextLevel
    ? nextLevel.xpRequired - currentLevel.xpRequired
    : 1;

  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <AppLayout>
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-xl font-bold font-display">Your Progress</h1>

        {/* Level Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-2xl gradient-primary p-5 text-primary-foreground"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider opacity-80">Level {currentLevel.level}</p>
              <h2 className="text-lg font-bold font-display mt-0.5">
                {currentLevel.emoji} {currentLevel.name}
              </h2>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">{userProgress.xp}</p>
              <p className="text-xs opacity-80">Total XP</p>
            </div>
          </div>
          {nextLevel && (
            <div className="mt-4">
              <div className="flex justify-between text-xs opacity-80 mb-1">
                <span>{xpInLevel} / {xpForNext} XP</span>
                <span>Next: {nextLevel.emoji} {nextLevel.name}</span>
              </div>
              <div className="h-2 rounded-full bg-primary-foreground/20 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary-foreground"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(xpInLevel / xpForNext) * 100}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Streak & Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-card p-4 border border-border/50 text-center">
            <Flame className="mx-auto h-8 w-8 text-warning animate-streak-flame" />
            <p className="mt-2 text-2xl font-bold">{userProgress.streak}</p>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </div>
          <div className="rounded-xl bg-card p-4 border border-border/50 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-2 text-2xl font-bold">{userProgress.booksRead}</p>
            <p className="text-xs text-muted-foreground">Books Read</p>
          </div>
          <div className="rounded-xl bg-card p-4 border border-border/50 text-center">
            <Headphones className="mx-auto h-8 w-8 text-secondary" />
            <p className="mt-2 text-2xl font-bold">{userProgress.minutesListened}</p>
            <p className="text-xs text-muted-foreground">Minutes Listened</p>
          </div>
          <div className="rounded-xl bg-card p-4 border border-border/50 text-center">
            <Highlighter className="mx-auto h-8 w-8 text-accent" />
            <p className="mt-2 text-2xl font-bold">{userProgress.highlightsSaved}</p>
            <p className="text-xs text-muted-foreground">Highlights Saved</p>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="mt-6">
          <h2 className="text-base font-bold font-display mb-3">This Week</h2>
          <div className="flex justify-between">
            {dayLabels.map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div
                  className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                    userProgress.weeklyActivity[i]
                      ? "gradient-primary"
                      : "bg-muted"
                  }`}
                >
                  {userProgress.weeklyActivity[i] ? (
                    <span className="text-primary-foreground text-xs">✓</span>
                  ) : null}
                </div>
                <span className="text-xs text-muted-foreground">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="h-5 w-5 text-warning" />
            <h2 className="text-base font-bold font-display">Badges</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`rounded-xl p-3 text-center border border-border/50 transition-all ${
                  badge.earned
                    ? "bg-card shadow-sm"
                    : "bg-muted/30 opacity-50"
                }`}
              >
                <span className="text-3xl">{badge.emoji}</span>
                <p className="mt-1 text-xs font-medium leading-tight">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
