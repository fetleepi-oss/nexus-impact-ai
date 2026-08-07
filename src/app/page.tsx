export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Nexus Impact AI 🌍🤖
        </h1>

        <p className="text-lg text-slate-300 mb-8">
          The AI Operating System for Impact Organizations
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-2">🔬 Research Workspace</h2>
            <p className="text-slate-400">
              Generate research summaries, evidence analysis, and recommendations.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-2">✍️ Grant Workspace</h2>
            <p className="text-slate-400">
              Draft proposals, objectives, budgets, and monitoring frameworks.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-2">🌍 Humanitarian Workspace</h2>
            <p className="text-slate-400">
              Create needs assessments, response plans, and implementation timelines.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
