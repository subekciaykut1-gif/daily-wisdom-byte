import { AppLayout } from "@/components/AppLayout";
import { categories, books } from "@/data/mockData";
import { BookCard } from "@/components/BookCard";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Explore() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = books.filter((b) => {
    const matchSearch =
      !search ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !activeCategory || b.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <AppLayout>
      <div className="px-5 pt-6">
        <h1 className="text-xl font-bold font-display">Explore</h1>

        {/* Search */}
        <div className="relative mt-4">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search books, authors, topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
          />
        </div>

        {/* Categories */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveCategory(null)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-all ${
              !activeCategory
                ? "gradient-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "gradient-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-4 flex flex-col gap-3 pb-4">
          {filtered.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} />
          ))}
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground py-12"
            >
              No books found. Try a different search.
            </motion.p>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
