import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface AppLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
}

export function AppLayout({ children, hideNav }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg pb-20">
        {children}
      </div>
      {!hideNav && <BottomNav />}
    </div>
  );
}
