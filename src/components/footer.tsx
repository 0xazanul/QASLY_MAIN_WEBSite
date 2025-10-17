"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const FOOTER_LINKS = {
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com/qaslylabs", icon: <Twitter className="h-5 w-5" /> },
    { label: "LinkedIn", href: "https://linkedin.com/company/qaslylabs", icon: <Linkedin className="h-5 w-5" /> },
    { label: "Email", href: "mailto:security@qaslylabs.xyz", icon: <Mail className="h-5 w-5" /> },
  ],
};

export function Footer(): React.JSX.Element {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/10 backdrop-blur-xl sm:mt-24 md:mt-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pb-12 sm:pt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {/* Legal */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/90 sm:mb-4 sm:text-sm">
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-foreground/70 transition-colors hover:text-foreground sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/90 sm:mb-4 sm:text-sm">
              Connect
            </h3>
            <div className="flex gap-2 sm:gap-3">
              {FOOTER_LINKS.social.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground/70 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10 hover:text-foreground sm:h-10 sm:w-10"
                  aria-label={link.label}
                >
                  <div className="scale-75 sm:scale-100">
                    {link.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-foreground/60 sm:mt-12 sm:flex-row sm:gap-4 sm:pt-8 sm:text-sm">
          <p>© {new Date().getFullYear()} QaslyLabs. All rights reserved.</p>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 select-none overflow-hidden">
        <div className="relative py-8">
          <p className="whitespace-nowrap text-center text-[8rem] font-bold leading-none tracking-tighter text-foreground/[0.03] sm:text-[12rem] lg:text-[16rem]">
            QASLYLABS
          </p>
        </div>
      </div>
    </footer>
  );
}

