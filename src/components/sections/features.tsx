"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Timer, Coins, Workflow, FileSearch, Gauge } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Comprehensive Security Testing",
    description: "Automated scans for OWASP Top 10, misconfigurations, exposed secrets, and common vulnerabilities.",
  },
  {
    icon: <Timer className="h-6 w-6" />,
    title: "Results in Hours",
    description: "Start testing immediately and receive detailed reports within hours, not days or weeks.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Transparent Pricing",
    description: "Simple, predictable pricing designed for startups and growing teams. No hidden costs.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Seamless Integration",
    description: "Connect with your existing CI/CD pipeline and project management tools effortlessly.",
  },
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: "Actionable Reports",
    description: "Clear, prioritized findings with step-by-step remediation guidance for your team.",
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Safe & Respectful",
    description: "Non-invasive testing designed to never impact your production infrastructure or users.",
  },
];

export function FeaturesSection(): React.JSX.Element {
  return (
    <section id="features" className="mx-auto w-full max-w-7xl px-4 py-32 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Enterprise-grade security,
          <br />
          startup-friendly pricing
        </h2>
        <p className="mx-auto max-w-2xl text-base text-foreground/70 sm:text-lg">
          Everything you need to ship secure products faster, without breaking the bank or slowing down your team.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-foreground/90 backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-white/20">
              {f.icon}
            </div>
            <h3 className="mb-3 text-xl font-semibold">{f.title}</h3>
            <p className="leading-relaxed text-foreground/70">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


