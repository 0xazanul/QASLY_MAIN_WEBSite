"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database, AlertTriangle, CheckCircle } from "lucide-react";

const SECURITY_PRACTICES = [
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Encryption",
    description:
      "All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Isolation",
    description:
      "Each customer's data is logically isolated and access is strictly controlled through role-based permissions.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Monitoring",
    description:
      "24/7 security monitoring and logging of all system activities with automated threat detection.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Regular Audits",
    description:
      "Regular third-party security audits and penetration testing to identify and remediate vulnerabilities.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Compliance",
    description:
      "We follow industry best practices and comply with relevant security standards and regulations.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Incident Response",
    description:
      "Comprehensive incident response plan with immediate notification procedures for security events.",
  },
];

export default function SecurityPage() {
  return (
    <main className="relative mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
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
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Security</h1>
          <p className="text-lg text-foreground/70">
            Security is at the core of everything we do. We protect your data with enterprise-grade
            security measures.
          </p>
        </div>

        {/* Security Practices Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SECURITY_PRACTICES.map((practice, idx) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-foreground/90">
                {practice.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{practice.title}</h3>
              <p className="text-sm text-foreground/70">{practice.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Infrastructure Security</h2>
            <p className="mb-4 text-foreground/80">
              Our infrastructure is hosted on secure, enterprise-grade cloud providers with
              industry-leading security certifications. All systems are:
            </p>
            <ul className="list-inside list-disc space-y-2 text-foreground/80">
              <li>Protected by advanced firewalls and intrusion detection systems</li>
              <li>Regularly patched and updated with the latest security fixes</li>
              <li>Monitored 24/7 for suspicious activity and potential threats</li>
              <li>Backed up daily with encrypted, geographically distributed backups</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Access Control</h2>
            <p className="mb-4 text-foreground/80">
              We implement strict access controls to ensure only authorized personnel can access
              sensitive data:
            </p>
            <ul className="list-inside list-disc space-y-2 text-foreground/80">
              <li>Multi-factor authentication (MFA) required for all team members</li>
              <li>Role-based access control (RBAC) with principle of least privilege</li>
              <li>Regular access reviews and immediate revocation upon termination</li>
              <li>Comprehensive audit logging of all access to sensitive systems</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Vulnerability Management</h2>
            <p className="text-foreground/80">
              We practice what we preach. Our own infrastructure undergoes regular security testing
              and vulnerability assessments. We maintain a coordinated disclosure program and
              welcome security researchers to report vulnerabilities responsibly.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Report a Security Issue</h2>
            <p className="mb-4 text-foreground/80">
              If you've discovered a security vulnerability in our services, please report it to us
              immediately. We appreciate your efforts to responsibly disclose your findings.
            </p>
            <p className="text-foreground/80">
              Email us at{" "}
              <a
                href="mailto:security@qasly.com"
                className="text-foreground underline underline-offset-4"
              >
                security@qasly.com
              </a>
              . We will acknowledge your email within 24 hours and provide a detailed response
              within 72 hours.
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}

