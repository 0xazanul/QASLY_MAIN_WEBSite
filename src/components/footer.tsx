"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const FOOTER_LINKS = {
  product: [
    { label: "Documentation", href: "/docs" },
  ],
  company: [
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com", icon: <Twitter className="h-5 w-5" /> },
    { label: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" /> },
    { label: "Email", href: "mailto:supporto@qasly.com", icon: <Mail className="h-5 w-5" /> },
  ],
};

export function Footer(): React.JSX.Element {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 backdrop-blur-xl">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/90">
              Product
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/90">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/90">
              Legal
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/90">
              Connect
            </h3>
            <div className="flex gap-3">
              {FOOTER_LINKS.social.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground/70 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10 hover:text-foreground"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Qasly. All rights reserved.</p>
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

