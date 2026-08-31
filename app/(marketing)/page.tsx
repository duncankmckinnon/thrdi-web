import type { Metadata } from "next";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { CodeExample } from "@/components/landing/code-example";
import { CtaFooter } from "@/components/landing/cta-footer";

export const metadata: Metadata = {
  title: "thirdeye — Trace every agent session, locally",
  description:
    "Local-first observability for Claude Code, Codex, and Cursor. Keep traces on your filesystem, or mirror structured turn traces to Pydantic Logfire.",
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <section className="bg-brand-bg-secondary/50">
        <HowItWorks />
      </section>
      <section className="py-16">
        <CodeExample />
      </section>
      <section className="py-24 bg-brand-bg-secondary/50">
        <Features />
      </section>
      <section className="py-20">
        <CtaFooter />
      </section>
    </>
  );
}
