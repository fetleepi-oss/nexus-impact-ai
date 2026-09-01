
"use client";

import { useState } from "react";

export default function HumanitarianPage() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function analyzeHumanitarianRequest() {
    if (!question.trim()) return;

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
          question: `You are the Nexus Impact AI Humanitarian Agent.

Analyze the following humanitarian request and provide a structured, practical response.

Include where appropriate:
1. Situation analysis
2. Key needs
3. Priority populations
4. Proposed response activities
5. Implementation plan
6. Risks and mitigation
7. Monitoring and evaluation indicators
8. Important assumptions and uncertainties

Do not invent facts, statistics, citations, or sources.

Humanitarian request:
${question}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Humanitarian Agent failed.");
      }

      setResult(data.result || "No result returned.");
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
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold text-orange-400">
            NEXUS IMPACT AI
          </p>

          <h1 className="text-4xl font-bold">
            🌍 Humanitarian Workspace
          </h1>

          <p className="mt-3 text-slate-300">
            Create needs assessments, response plans, implementation
            strategies, and monitoring frameworks.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="mb-3 block text-lg font-semibold">
            Enter humanitarian request
          </label>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Example: Develop a humanitarian response plan for communities affected by flooding, including priority needs, activities, risks, and monitoring indicators."
            className="min-h-40 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-orange-400"
          />

          <button
            onClick={analyzeHumanitarianRequest}
            disabled={loading || !question.trim()}
            className="mt-4 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Humanitarian Request"}
          </button>

          {error && (
            <div className="mt-5 rounded-xl border border-red-800 bg-red-950 p-4 text-red-200">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950 p-6">
              <h2 className="mb-4 text-xl font-bold">
                Humanitarian Analysis
              </h2>

              <div className="whitespace-pre-wrap leading-7 text-slate-200">
                {result}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

