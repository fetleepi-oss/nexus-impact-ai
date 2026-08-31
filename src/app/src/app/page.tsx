export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Nexus Impact AI
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Multi-agent AI workspace for research, grant writing, and
          humanitarian planning.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              🔬 Research Agent
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Generate structured research summaries and evidence analysis.
            </p>

            <a
              href="/research"
              className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-sm text-white"
            >
              Open Research
            </a>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              ✍️ Grant Agent
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Convert research findings into funding proposals and project
              plans.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              🌍 Humanitarian Agent
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Create needs assessments, response plans, and monitoring
              frameworks.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
