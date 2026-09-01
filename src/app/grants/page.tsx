"use client";

import { FormEvent, useState } from "react";

export default function GrantsPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateGrant(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent: "grant",
          question: prompt.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Grant Agent failed.");
      }

      setResult(data?.result || "No result was returned.");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium text-primary">
            Nexus Impact AI
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Grant Workspace
          </h1>

          <p className="mt-3 text-muted-foreground">
            Turn research findings and project ideas into funding-oriented
            proposals and project plans.
          </p>
        </div>

        <form onSubmit={generateGrant} className="space-y-4">
          <label
            htmlFor="grant-prompt"
            className="block text-sm font-medium"
          >
            Describe your project or funding opportunity
          </label>

          <textarea
            id="grant-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Develop a grant proposal for a nonprofit project that aims to reduce malaria among vulnerable communities in Ethiopia. Include objectives, activities, outcomes, indicators, and a preliminary budget structure."
            className="min-h-[220px] w-full rounded-xl border bg-background p-4 text-sm outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Grant Proposal"}
          </button>
        </form>

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm">
            {error}
          </div>
        )}

        {result && (
          <section className="mt-10 rounded-xl border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Grant Agent Result
            </h2>

            <div className="whitespace-pre-wrap text-sm leading-7">
              {result}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
