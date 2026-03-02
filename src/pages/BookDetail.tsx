import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { books } from "@/data/mockData";
import { ArrowLeft, Headphones, BookOpen, Clock, Star, Bookmark, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AudioPlayerFull } from "@/components/AudioPlayer";

export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === id);
  const [tab, setTab] = useState<"read" | "listen">("read");
  const [saved, setSaved] = useState(false);

  if (!book) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Book not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 h-72 gradient-primary opacity-90" />
        <img
          src={book.cover}
          alt={book.title}
          className="absolute inset-0 h-72 w-full object-cover opacity-20 blur-2xl"
        />
        <div className="relative z-10 px-5 pt-5">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/10 text-primary-foreground hover:bg-background/20"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/10 text-primary-foreground hover:bg-background/20"
                onClick={() => setSaved(!saved)}
              >
                <Bookmark className={`h-5 w-5 ${saved ? "fill-current" : ""}`} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/10 text-primary-foreground hover:bg-background/20"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center text-primary-foreground text-center pb-6">
            <motion.img
              src={book.cover}
              alt={book.title}
              className="h-48 w-32 rounded-xl object-cover shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            />
            <h1 className="mt-4 text-2xl font-bold font-display">{book.title}</h1>
            <p className="mt-1 opacity-80">{book.author}</p>
            <div className="mt-2 flex items-center gap-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{book.rating}</span>
            </div>
            <div className="mt-3 flex gap-3 text-xs opacity-80">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {book.readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Headphones className="h-3 w-3" />
                {book.listenTime} min listen
              </span>
            </div>
            <div className="mt-3 flex gap-2">
              {book.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-background/20 px-3 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Switch */}
      <div className="mx-5 mt-4 flex rounded-xl bg-muted p-1">
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all ${
            tab === "read" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
          }`}
          onClick={() => setTab("read")}
        >
          <BookOpen className="h-4 w-4" />
          Read
        </button>
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all ${
            tab === "listen" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
          }`}
          onClick={() => setTab("listen")}
        >
          <Headphones className="h-4 w-4" />
          Listen
        </button>
      </div>

      {tab === "read" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-5 mt-6"
        >
          {/* One-liner */}
          <p className="text-lg font-semibold font-display text-primary italic">
            "{book.oneLiner}"
          </p>

          {/* Key Ideas */}
          <h3 className="mt-6 text-base font-bold font-display">Key Ideas</h3>
          <div className="mt-3 flex flex-col gap-2">
            {book.keyIdeas.map((idea, i) => (
              <div key={i} className="flex gap-3 rounded-lg bg-muted/50 p-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed">{idea}</p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <h3 className="mt-6 text-base font-bold font-display">Summary</h3>
          <div className="mt-3 flex flex-col gap-4">
            {book.summary.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      ) : (
        <AudioPlayerFull
          bookTitle={book.title}
          author={book.author}
          cover={book.cover}
        />
      )}
    </div>
  );
}
