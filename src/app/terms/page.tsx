"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="relative mx-auto w-full max-w-4xl px-4 py-20 sm:px-6">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
        <p className="mb-12 text-foreground/70">Last updated: October 12, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-foreground/80">
              By accessing and using QaslyLabs' security testing services, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not agree to abide by
              the above, please do not use this service.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">2. Use License</h2>
            <p className="mb-4 text-foreground/80">
              Permission is granted to temporarily use QaslyLabs' security testing services for
              personal or commercial purposes. This is the grant of a license, not a transfer of
              title, and under this license you may not:
            </p>
            <ul className="list-inside list-disc space-y-2 text-foreground/80">
              <li>Use the service for any unlawful purpose</li>
              <li>Attempt to reverse engineer or compromise our security systems</li>
              <li>Use the service to scan domains you do not own or have permission to test</li>
              <li>Resell or redistribute our services without authorization</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">3. Service Description</h2>
            <p className="text-foreground/80">
              QaslyLabs provides automated security testing and vulnerability scanning services. We
              make reasonable efforts to provide accurate and timely security reports, but we do
              not guarantee that all vulnerabilities will be detected. Our service is intended to
              complement, not replace, comprehensive security practices.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">4. Disclaimer</h2>
            <p className="text-foreground/80">
              The materials on QaslyLabs' website and services are provided on an 'as is' basis.
              QaslyLabs makes no warranties, expressed or implied, and hereby disclaims and negates all
              other warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Limitations</h2>
            <p className="text-foreground/80">
              In no event shall QaslyLabs or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use QaslyLabs' services.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">6. Payment Terms</h2>
            <p className="text-foreground/80">
              All fees are payable in advance. Subscriptions automatically renew unless cancelled
              before the renewal date. Refunds are provided on a case-by-case basis within 30 days
              of purchase.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">7. Contact</h2>
            <p className="text-foreground/80">
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:legal@qasly.com"
                className="text-foreground underline underline-offset-4"
              >
                legal@qasly.com
              </a>
              .
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}

