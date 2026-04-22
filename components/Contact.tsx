"use client";

import { useRef, useState, useCallback } from "react";
import toast from "react-hot-toast";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiMessageCircle,
} from "react-icons/fi";
import SectionHeader from "@/shared/SectionHeader";
import { Field } from "@/shared/Field";
import { ContactCard } from "@/shared/ContactCard";

const COOLDOWN_MS = 10_000; // 10 seconds between submissions

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
const WHATSAPP_NUMBER = "201118265495";
const HAS_FORMSPREE_CONFIG = Boolean(FORMSPREE_ENDPOINT);


export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const lastSentRef = useRef<number | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!HAS_FORMSPREE_CONFIG) {
      toast.error("Form service is not configured. Check .env.local values.");
      return;
    }

    // Client-side rate limiting — prevents accidental double-sends and spam
    const now = Date.now();
    if (lastSentRef.current && now - lastSentRef.current < COOLDOWN_MS) {
      toast.error("Please wait a few seconds before sending again.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(formRef.current);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Formspree request failed (${response.status})`);
      }
      // show a success message to the user
      toast.success("Message sent! I'll get back to you soon.");
      formRef.current.reset();
      lastSentRef.current = now;
    } catch (err) {
      // show an error message to the user
      console.error("[Formspree error]", err);
      toast.error("Couldn't send right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Let's talk"
          title="Get in Touch"
          subtitle="Have a project in mind or just want to say hi? Drop me a message."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-6">

          {/* ── Left column: contact info cards ── */}

          <div className="grid gap-4 content-start">
            <ContactCard
              icon={<FiLinkedin />}
              label="LinkedIn"
              value="hend-mohammed-bahar"
              href="https://www.linkedin.com/in/hend-mohammed-bahar"
            />
            <ContactCard
              icon={<FiGithub />}
              label="GitHub"
              value="github.com/HendMohammed90"
              href="https://github.com/HendMohammed90"
            />
            <ContactCard
              icon={<FiMessageCircle />}
              label="WhatsApp"
              value={`+20 ${WHATSAPP_NUMBER}`}
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
            />
            <ContactCard
              icon={<FiMail />}
              label="Email"
              value="hend.odesk.tasks@gmail.com"
              href="mailto:hend.odesk.tasks@gmail.com"
            />

            <div className="glass rounded-2xl p-5">
              <p className="text-sm text-muted">
                Currently open to{" "}
                <span className="text-ink font-semibold">freelance</span> and{" "}
                <span className="text-ink font-semibold">part-time</span>{" "}
                opportunities in front-end, full-stack and React development.
              </p>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8 space-y-4"
            noValidate
          >
            <Field label="Your Name" name="from_name" type="text" required />
            <Field label="Email Address" name="from_email" type="email" required />

            <div>
              <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full rounded-xl bg-bg2/60 border border-white/10 px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 py-3 font-semibold text-bg hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                "Sending…"
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


