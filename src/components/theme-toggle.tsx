"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }): React.JSX.Element {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  function toggle(): void {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/20 backdrop-blur-md transition-colors dark:border-white/15 dark:bg-white/10",
        "hover:bg-white/30 dark:hover:bg-white/20",
        className
      )}
    >
      <SunIcon className="h-4 w-4 dark:hidden" />
      <MoonIcon className="hidden h-4 w-4 dark:block" />
    </button>
  );
}


