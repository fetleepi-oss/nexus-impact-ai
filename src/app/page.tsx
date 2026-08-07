export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        Nexus Impact AI 🌍🤖
      </h1>

      <p className="text-lg mb-8">
        The AI Operating System for Impact Organizations
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold">🔬 Research Workspace</h2>
          <p>Analyze research topics and generate evidence summaries.</p>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="font-semibold">✍️ Grant Workspace</h2>
          <p>Create grant proposals, budgets, and monitoring frameworks.</p>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="font-semibold">🌍 Humanitarian Workspace</h2>
          <p>Build response plans, needs assessments, and implementation timelines.</p>
        </div>
      </div>
    </main>
  );
}
