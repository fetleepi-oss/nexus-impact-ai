"use client";

import { useState } from "react";

export default function ResearchPage() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function analyzeResearch() {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setError("Please enter a research question.");
      return;
    }

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
          question: trimmedQuestion,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Research analysis failed."
        );
      }

      setResult(data?.result || "No result was returned.");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while analyzing the research question."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Research Workspace
        </h1>

        <p className="mt-3 text-gray-600">
          Ask a research question and let the Research Agent analyze it.
        </p>

        <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            Enter research question
          </h2>

          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Example: What are the main factors associated with malaria transmission in Ethiopia?"
            rows={6}
            className="mt-4 w-full rounded-lg border p-3 outline-none focus:ring-2"
          />

          <button
            type="button"
            onClick={analyzeResearch}
            disabled={loading}
            className="mt-4 rounded-lg bg-black px-5 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Research"}
          </button>

          {error && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}
        </div>

        {result && (
          <section className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">
              Research Results
            </h2>

            <pre className="mt-4 whitespace-pre-wrap font-sans leading-7 text-gray-700">
              {result}
            </pre>
          </section>
        )}
      </div>
    </main>
  );
}
