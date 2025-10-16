"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/#pricing", label: "Login" },
  { href: "/#contact", label: "Get Started" },
];

export function Header(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "mx-auto mt-4 max-w-6xl",
          "rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl",
          "dark:border-white/15 dark:bg-white/5"
        )}
      >
        <div className="grid grid-cols-3 items-center gap-3">
          <div className="justify-self-start">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/qasly.png" alt="Qasly" width={32} height={32} className="h-8 w-8" />
              <span className="font-semibold tracking-tight">QaslyLabs</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <Link
              href="/signin"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-md border border-white/15 px-3 text-sm text-foreground/90 hover:bg-white/20 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="inline-flex h-9 items-center justify-center rounded-md bg-foreground px-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        <nav className="mt-2 flex justify-center gap-6 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


