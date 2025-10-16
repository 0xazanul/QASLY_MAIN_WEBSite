"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { User, Users } from "lucide-react";
import { PricingColumn, PricingColumnProps } from "@/components/ui/pricing-column";
import { cn } from "@/lib/cn";

const PLANS: PricingColumnProps[] = [
  {
    name: "Starter",
    icon: <User className="size-4" />,
    description: "For early-stage startups testing their first products",
    price: 49,
    priceNote: "1 domain scan per week. Cancel anytime.",
    cta: {
      variant: "default",
      label: "Get Starter",
      href: "/checkout?plan=starter",
    },
    features: [
      "1 domain per week",
      "Weekly automated scans",
      "Email vulnerability reports",
      "OWASP Top 10 coverage",
    ],
    variant: "default",
  },
  {
    name: "Growth",
    icon: <Users className="size-4" />,
    description: "For growing teams shipping multiple products",
    price: 149,
    priceNote: "Up to 10 domain scans per week. Cancel anytime.",
    cta: {
      variant: "glow-brand",
      label: "Get Growth",
      href: "/checkout?plan=growth",
    },
    features: [
      "10 domains per week",
      "Weekly automated scans",
      "Priority email & Slack support",
      "Advanced threat detection",
      "Custom integrations",
    ],
    variant: "glow-brand",
  },
];

export function PricingSection(): React.JSX.Element {
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-center gap-4 text-center"
      >
        <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl sm:leading-tight">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[600px] text-base font-medium text-foreground/70 sm:text-xl">
          Get security testing that scales with you. No surprises, no hidden fees.
        </p>
      </motion.div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
        {PLANS.map((plan) => (
          <PricingColumn
            key={plan.name}
            name={plan.name}
            icon={plan.icon}
            description={plan.description}
            price={plan.price}
            priceNote={plan.priceNote}
            cta={plan.cta}
            features={plan.features}
            variant={plan.variant}
          />
        ))}
      </div>
    </section>
  );
}


