"use client";

import * as React from "react";
import { motion } from "framer-motion";

const COMPANIES = [
  "Virtuals.io", "Farcaster", "UMA Protocol", "Canva", "RechargeApp", 
  "IBM", "US Department of Defence", "Indian Government", "Cloudsmith", 
  "Six Group", "Verily Life Sciences", "Wallbit", "Datasaur"
];

export function CompaniesSection(): React.JSX.Element {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8 text-center"
      >
        <p className="text-sm text-foreground/60">Our engine has secured</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
      >
        {COMPANIES.map((company, idx) => (
          <motion.div
            key={company}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="cursor-default text-sm font-medium text-foreground/50 transition-colors hover:text-foreground/80"
          >
            {company}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
