"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FlowAnimation(): React.JSX.Element {
  const [domain, setDomain] = React.useState("");

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          How it works
        </h2>
        <p className="mt-4 text-base text-foreground/70 sm:text-lg">
          Enter your domain, we handle the rest.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-xl shadow-2xl dark:border-white/10 dark:bg-white/5"
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="yourdomain.com"
            className="h-12 w-full flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-foreground placeholder:text-foreground/50 backdrop-blur-md outline-none transition-all focus:border-white/40 focus:bg-white/15 dark:bg-white/5 dark:focus:bg-white/10"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-foreground/90"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
        <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { label: "Scan", delay: 0.2 },
            { label: "Prioritize", delay: 0.35 },
            { label: "Report", delay: 0.5 },
          ].map((step) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: step.delay, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-lg transition-all hover:border-white/20 hover:bg-white/15 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="mb-2 text-xs font-medium text-foreground/50">
                {domain || "yourdomain.com"}
              </div>
              <div className="text-xl font-semibold">{step.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


