import { AppLayout } from "@/components/AppLayout";
import { userProgress, levels } from "@/data/mockData";
import { Settings, Bell, Moon, HelpCircle, LogOut, ChevronRight, User } from "lucide-react";

const currentLevel = levels.find((l) => l.level === userProgress.level)!;

const menuItems = [
  { icon: Bell, label: "Notifications", subtitle: "Daily reminders at 8:00 AM" },
  { icon: Moon, label: "Appearance", subtitle: "Light mode" },
  { icon: Settings, label: "Playback Speed", subtitle: "1x default" },
  { icon: HelpCircle, label: "Help & Support", subtitle: "FAQ, contact us" },
  { icon: LogOut, label: "Sign Out", subtitle: "", destructive: true },
];

export default function Profile() {
  return (
    <AppLayout>
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-xl font-bold font-display">Profile</h1>

        {/* Profile Card */}
        <div className="mt-4 rounded-2xl bg-card p-5 border border-border/50 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full gradient-primary">
            <User className="h-10 w-10 text-primary-foreground" />
          </div>
          <h2 className="mt-3 text-lg font-bold font-display">Learner</h2>
          <p className="text-sm text-muted-foreground">
            {currentLevel.emoji} {currentLevel.name} • Level {currentLevel.level}
          </p>
          <div className="mt-3 flex justify-center gap-6">
            <div className="text-center">
              <p className="text-lg font-bold">{userProgress.streak}</p>
              <p className="text-xs text-muted-foreground">Streak</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">{userProgress.booksRead}</p>
              <p className="text-xs text-muted-foreground">Books</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">{userProgress.xp}</p>
              <p className="text-xs text-muted-foreground">XP</p>
            </div>
          </div>
        </div>

        {/* Subscription Banner */}
        <div className="mt-4 rounded-xl gradient-primary p-4 text-primary-foreground cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider opacity-80">Upgrade to</p>
              <h3 className="text-base font-bold font-display">GrowMe VIP ✨</h3>
              <p className="text-xs opacity-80 mt-0.5">Unlimited books, audio & plans</p>
            </div>
            <ChevronRight className="h-5 w-5 opacity-80" />
          </div>
        </div>

        {/* Menu */}
        <div className="mt-4 rounded-xl bg-card border border-border/50 overflow-hidden">
          {menuItems.map((item, i) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 px-4 py-3.5 text-left hover:bg-muted/50 transition-colors ${
                i < menuItems.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <item.icon
                className={`h-5 w-5 ${
                  item.destructive ? "text-destructive" : "text-muted-foreground"
                }`}
              />
              <div className="flex-1">
                <p className={`text-sm font-medium ${item.destructive ? "text-destructive" : ""}`}>
                  {item.label}
                </p>
                {item.subtitle && (
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                )}
              </div>
              {!item.destructive && (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
