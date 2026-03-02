import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { userProgress } from "@/data/mockData";

export function StreakBadge() {
  const { streak } = userProgress;

  return (
    <motion.div
      className="flex items-center gap-1.5 rounded-full bg-warning/10 px-3 py-1.5"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Flame className="h-4 w-4 text-warning animate-streak-flame" />
      <span className="text-sm font-semibold text-warning">{streak}</span>
    </motion.div>
  );
}
