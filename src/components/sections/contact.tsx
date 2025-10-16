"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient } from "@/lib/api";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message too short"),
});

type FormValues = z.infer<typeof schema>;

export function ContactSection(): React.JSX.Element {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    try {
      setStatus("loading");
      await apiClient.post("/contact", values);
      setStatus("success");
      setTimeout(() => {
        reset();
        setStatus("idle");
      }, 3000);
    } catch (e) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="mx-auto w-full max-w-2xl px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-400"
          >
            <CheckCircle2 className="h-10 w-10" />
          </motion.div>
          <h3 className="mb-2 text-2xl font-semibold">Message sent!</h3>
          <p className="text-foreground/70">We'll get back to you within 24 hours.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-2xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-center"
      >
        <h2 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let's talk</h2>
        <p className="text-foreground/60">Tell us about your project and we'll be in touch.</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <input
              {...register("name")}
              className="h-11 w-full rounded-lg border border-white/10 bg-transparent px-4 text-sm text-foreground placeholder:text-foreground/40 outline-none transition-all duration-200 focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:bg-white/5"
              placeholder="Your name"
              autoComplete="name"
            />
            {errors.name && (
              <p className="text-xs text-red-400/90">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-1.5">
            <input
              {...register("email")}
              type="email"
              className="h-11 w-full rounded-lg border border-white/10 bg-transparent px-4 text-sm text-foreground placeholder:text-foreground/40 outline-none transition-all duration-200 focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:bg-white/5"
              placeholder="you@company.com"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-xs text-red-400/90">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-1.5">
          <textarea
            {...register("message")}
            rows={4}
            className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition-all duration-200 focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:bg-white/5 resize-none"
            placeholder="Tell us about your security needs..."
          />
          {errors.message && (
            <p className="text-xs text-red-400/90">{errors.message.message}</p>
          )}
        </div>
        <div className="flex flex-col items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={status === "loading"}
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-8 text-sm font-medium text-black transition-all hover:bg-white/90 disabled:opacity-50"
          >
            {status === "loading" ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black"></div>
                Sending...
              </>
            ) : (
              <>
                Send message
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </>
            )}
          </motion.button>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-400/90"
            >
              Failed to send. Please try again.
            </motion.p>
          )}
        </div>
      </motion.form>
    </section>
  );
}


