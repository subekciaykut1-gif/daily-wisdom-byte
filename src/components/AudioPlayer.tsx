import { motion } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface MiniPlayerProps {
  bookTitle: string;
  author: string;
  cover: string;
}

export function MiniPlayer({ bookTitle, author, cover }: MiniPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([35]);

  return (
    <motion.div
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      className="fixed bottom-16 left-0 right-0 z-40 mx-auto max-w-lg px-3"
    >
      <div className="glass-card rounded-2xl p-3 shadow-lg">
        <div className="flex items-center gap-3">
          <img
            src={cover}
            alt={bookTitle}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">{bookTitle}</p>
            <p className="text-xs text-muted-foreground truncate">{author}</p>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="h-10 w-10 rounded-full gradient-primary"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 text-primary-foreground" />
              ) : (
                <Play className="h-4 w-4 text-primary-foreground ml-0.5" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Slider
          value={progress}
          onValueChange={setProgress}
          max={100}
          step={1}
          className="mt-2"
        />
      </div>
    </motion.div>
  );
}

interface AudioPlayerFullProps {
  bookTitle: string;
  author: string;
  cover: string;
}

export function AudioPlayerFull({ bookTitle, author, cover }: AudioPlayerFullProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([35]);
  const [speed, setSpeed] = useState(1);

  const speeds = [0.75, 1, 1.25, 1.5, 2];
  const cycleSpeed = () => {
    const idx = speeds.indexOf(speed);
    setSpeed(speeds[(idx + 1) % speeds.length]);
  };

  return (
    <div className="flex flex-col items-center px-6 py-8">
      <motion.img
        src={cover}
        alt={bookTitle}
        className="h-64 w-64 rounded-2xl object-cover shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h2 className="mt-6 text-xl font-bold font-display text-center">{bookTitle}</h2>
      <p className="mt-1 text-muted-foreground">{author}</p>

      <div className="mt-8 w-full">
        <Slider
          value={progress}
          onValueChange={setProgress}
          max={100}
          step={1}
        />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>4:12</span>
          <span>12:00</span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-6">
        <Button variant="ghost" size="icon" className="h-12 w-12">
          <SkipBack className="h-6 w-6" />
        </Button>
        <Button
          size="icon"
          className="h-16 w-16 rounded-full gradient-primary shadow-lg"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="h-7 w-7 text-primary-foreground" />
          ) : (
            <Play className="h-7 w-7 text-primary-foreground ml-1" />
          )}
        </Button>
        <Button variant="ghost" size="icon" className="h-12 w-12">
          <SkipForward className="h-6 w-6" />
        </Button>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full text-xs font-semibold"
          onClick={cycleSpeed}
        >
          {speed}x
        </Button>
        <Button variant="outline" size="sm" className="rounded-full text-xs">
          <Clock className="mr-1 h-3 w-3" />
          Sleep Timer
        </Button>
      </div>
    </div>
  );
}
