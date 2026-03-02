import { motion } from "framer-motion";
import { Book } from "@/data/mockData";
import { Clock, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BookCardProps {
  book: Book;
  index?: number;
  variant?: "default" | "compact" | "featured";
}

export function BookCard({ book, index = 0, variant = "default" }: BookCardProps) {
  const navigate = useNavigate();

  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl gradient-primary p-5 cursor-pointer"
        onClick={() => navigate(`/book/${book.id}`)}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex gap-4">
          <img
            src={book.cover}
            alt={book.title}
            className="h-32 w-24 rounded-xl object-cover shadow-lg"
          />
          <div className="flex flex-1 flex-col justify-between text-primary-foreground">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider opacity-80">
                Today's Pick
              </p>
              <h3 className="mt-1 text-lg font-bold font-display leading-tight">
                {book.title}
              </h3>
              <p className="mt-0.5 text-sm opacity-80">{book.author}</p>
            </div>
            <p className="text-sm opacity-90 line-clamp-2">{book.oneLiner}</p>
            <div className="flex items-center gap-3 text-xs opacity-80">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {book.readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Headphones className="h-3 w-3" />
                {book.listenTime} min
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.08 }}
        className="w-32 shrink-0 cursor-pointer"
        onClick={() => navigate(`/book/${book.id}`)}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={book.cover}
          alt={book.title}
          className="h-44 w-full rounded-xl object-cover shadow-md"
        />
        <h4 className="mt-2 text-sm font-semibold leading-tight line-clamp-2">
          {book.title}
        </h4>
        <p className="mt-0.5 text-xs text-muted-foreground">{book.author}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="flex gap-3 rounded-xl bg-card p-3 shadow-sm border border-border/50 cursor-pointer"
      onClick={() => navigate(`/book/${book.id}`)}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={book.cover}
        alt={book.title}
        className="h-24 w-16 rounded-lg object-cover"
      />
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h4 className="font-semibold leading-tight">{book.title}</h4>
          <p className="text-sm text-muted-foreground">{book.author}</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {book.readTime} min
          </span>
          <span className="flex items-center gap-1">
            <Headphones className="h-3 w-3" />
            {book.listenTime} min
          </span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary font-medium">
            {book.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
