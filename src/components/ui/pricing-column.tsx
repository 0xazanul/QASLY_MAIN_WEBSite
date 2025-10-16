"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export interface PricingColumnProps {
  name: string;
  icon?: React.ReactNode;
  description: string;
  price: number;
  priceNote: string;
  cta: {
    variant: "default" | "glow" | "glow-brand";
    label: string;
    href: string;
  };
  features: string[];
  variant?: "default" | "glow" | "glow-brand";
  className?: string;
}

export function PricingColumn({
  name,
  icon,
  description,
  price,
  priceNote,
  cta,
  features,
  variant = "default",
  className,
}: PricingColumnProps): React.JSX.Element {
  const isGlow = variant === "glow" || variant === "glow-brand";
  const isBrand = variant === "glow-brand";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={cn(
        "relative flex flex-col rounded-3xl border p-8 backdrop-blur-xl transition-all",
        isGlow
          ? "border-white/20 bg-white/10 shadow-2xl dark:border-white/20 dark:bg-white/10"
          : "border-white/10 bg-white/5 dark:border-white/10 dark:bg-white/5",
        isBrand && "ring-2 ring-white/30",
        className
      )}
    >
      {isBrand && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-4 flex items-center gap-2">
        {icon && <div className="text-foreground/90">{icon}</div>}
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>

      <p className="mb-6 text-sm text-foreground/70">{description}</p>

      <div className="mb-2 flex items-baseline gap-1">
        <span className="text-5xl font-bold">${price}</span>
        <span className="text-foreground/60">/mo</span>
      </div>
      <p className="mb-8 text-xs text-foreground/60">{priceNote}</p>

      <Link
        href={cta.href}
        className={cn(
          "mb-8 inline-flex h-12 w-full items-center justify-center rounded-xl px-6 text-base font-medium transition-all",
          cta.variant === "glow" || cta.variant === "glow-brand"
            ? "bg-foreground text-background hover:bg-foreground/90"
            : "border border-white/20 bg-white/10 text-foreground hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
        )}
      >
        {cta.label}
      </Link>

      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

