"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

type GridBackgroundProps = {
  className?: string;
};

// Renders a subtle grid with vignette, suitable for glassmorphism UIs
export function GridBackground({ className }: GridBackgroundProps): React.JSX.Element {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]",
          "[background-size:40px_40px]",
          "[mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
        )}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 dark:to-black/60" />
    </div>
  );
}


