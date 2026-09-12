"use client";

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";
import { links, profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[13px] text-text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="form-input"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[13px] text-text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="form-input"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[13px] text-text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="form-input resize-y"
          placeholder="What are you working on?"
        />
      </div>

      <div className="mt-1 flex flex-col gap-4">
        <button
          type="submit"
          className="btn-primary self-start disabled:opacity-60"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <Send size={14} aria-hidden="true" />
        </button>

        <p role="status" aria-live="polite" className="text-[13px] empty:hidden">
          {status === "sent" && (
            <span className="flex items-center gap-2 text-signal">
              <Check size={14} aria-hidden="true" className="shrink-0" />
              Message sent — I&apos;ll reply soon.
            </span>
          )}
          {status === "error" && (
            <span className="flex items-start gap-2 text-text-muted">
              <AlertCircle
                size={14}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-amber-400"
              />
              <span>
                Couldn&apos;t send right now — email{" "}
                <a href={links.email} className="link-underline text-text">
                  {profile.email}
                </a>{" "}
                directly.
              </span>
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
