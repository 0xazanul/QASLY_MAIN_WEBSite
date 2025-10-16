"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    question: "What is QaslyLabs?",
    answer:
      "QaslyLabs is your automated security co-pilot — it continuously scans your domains, APIs, and infra for vulnerabilities, no setup required. It's security that just works in the background while you ship.\n\nIf you can deploy in 2 minutes, you should secure in 2 minutes.",
  },
  {
    question: "Who is QaslyLabs for?",
    answer:
      "Founders, devs, and small teams who move fast. You don't need a security engineer or a $20K tool — just plug in your app and let QaslyLabs watch your back 24/7.\n\nBuilt for builders, not enterprises.",
  },
  {
    question: "How does it work?",
    answer:
      "You connect your domain or API → QaslyLabs starts scanning automatically → you get clear, actionable alerts. No config files, no false alarms, no fluff — just the stuff that actually matters.\n\nContinuous protection, zero setup.",
  },
  {
    question: "Why should I trust QaslyLabs?",
    answer:
      "Because we're builders too. We've reported real-world vulnerabilities, built our own scanners, and lived through the pain of securing early products. QaslyLabs is everything we wish we had when we were starting out — simple, transparent, and made for real teams.\n\nSecurity made human.",
  },
];

export function FAQSection(): React.JSX.Element {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="text-foreground/60">Everything you need to know about QaslyLabs.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}

