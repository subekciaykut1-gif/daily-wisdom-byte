import { AppLayout } from "@/components/AppLayout";
import { books } from "@/data/mockData";
import { BookCard } from "@/components/BookCard";
import { useState } from "react";
import { Bookmark, Highlighter, History } from "lucide-react";

const tabs = [
  { id: "saved", label: "Saved", icon: Bookmark },
  { id: "highlights", label: "Highlights", icon: Highlighter },
  { id: "history", label: "History", icon: History },
];

const mockHighlights = [
  { id: "1", text: "Habits are the compound interest of self-improvement.", book: "Atomic Habits", author: "James Clear" },
  { id: "2", text: "Deep work is the ability to focus without distraction on a cognitively demanding task.", book: "Deep Work", author: "Cal Newport" },
  { id: "3", text: "Loss aversion: losses feel roughly twice as painful as equivalent gains feel good.", book: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
];

export default function Library() {
  const [activeTab, setActiveTab] = useState("saved");

  return (
    <AppLayout>
      <div className="px-5 pt-6">
        <h1 className="text-xl font-bold font-display">My Library</h1>

        {/* Tabs */}
        <div className="mt-4 flex rounded-xl bg-muted p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-card shadow-sm text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 pb-4">
          {activeTab === "saved" && (
            <div className="flex flex-col gap-3">
              {books.slice(0, 4).map((book, i) => (
                <BookCard key={book.id} book={book} index={i} />
              ))}
            </div>
          )}

          {activeTab === "highlights" && (
            <div className="flex flex-col gap-3">
              {mockHighlights.map((h) => (
                <div key={h.id} className="rounded-xl bg-card p-4 border border-border/50">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm italic leading-relaxed">"{h.text}"</p>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {h.book} — {h.author}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "history" && (
            <div className="flex flex-col gap-3">
              {books.slice(0, 3).map((book, i) => (
                <BookCard key={book.id} book={book} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
