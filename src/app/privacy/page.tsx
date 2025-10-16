"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mb-12 text-foreground/70">Last updated: October 12, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">1. Information We Collect</h2>
            <p className="mb-4 text-foreground/80">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-inside list-disc space-y-2 text-foreground/80">
              <li>Account information (name, email, company name)</li>
              <li>Domain names submitted for security testing</li>
              <li>Payment and billing information</li>
              <li>Communication preferences and correspondence</li>
              <li>Usage data and security scan results</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">2. How We Use Your Information</h2>
            <p className="mb-4 text-foreground/80">We use the information we collect to:</p>
            <ul className="list-inside list-disc space-y-2 text-foreground/80">
              <li>Provide, maintain, and improve our security testing services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and security alerts</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">3. Information Sharing</h2>
            <p className="text-foreground/80">
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information only in the following circumstances:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-foreground/80">
              <li>With your consent or at your direction</li>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations or respond to legal requests</li>
              <li>To protect the rights, property, or safety of Qasly and our users</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">4. Data Security</h2>
            <p className="text-foreground/80">
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. This includes encryption of data in transit and at rest, regular
              security assessments, and access controls.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Data Retention</h2>
            <p className="text-foreground/80">
              We retain your information for as long as your account is active or as needed to
              provide you services. We will retain and use your information as necessary to comply
              with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">6. Your Rights</h2>
            <p className="mb-4 text-foreground/80">You have the right to:</p>
            <ul className="list-inside list-disc space-y-2 text-foreground/80">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct or update your personal information</li>
              <li>Delete your personal information</li>
              <li>Object to or restrict certain processing of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">7. Cookies</h2>
            <p className="text-foreground/80">
              We use cookies and similar tracking technologies to track activity on our service and
              hold certain information. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">8. Contact Us</h2>
            <p className="text-foreground/80">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a
                href="mailto:privacy@qasly.com"
                className="text-foreground underline underline-offset-4"
              >
                privacy@qasly.com
              </a>
              .
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}

