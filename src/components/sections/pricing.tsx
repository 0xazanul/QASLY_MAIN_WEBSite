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
    <section id="pricing" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-col items-center gap-3 text-center sm:mb-12 sm:gap-4"
      >
        <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl sm:leading-tight">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[90%] text-sm font-medium text-foreground/70 sm:max-w-[600px] sm:text-base md:text-lg lg:text-xl">
          Get security testing that scales with you. No surprises, no hidden fees.
        </p>
      </motion.div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {PLANS.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="w-full"
          >
            <PricingColumn
              name={plan.name}
              icon={plan.icon}
              description={plan.description}
              price={plan.price}
              priceNote={plan.priceNote}
              cta={plan.cta}
              features={plan.features}
              variant={plan.variant}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}


