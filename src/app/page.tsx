export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
            Nexus Impact AI
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Turn evidence into
            <span className="block text-slate-600">impactful action.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Nexus Impact AI brings research, grant development, and
            humanitarian planning into one intelligent workspace for
            impact organizations.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/research"
              className="rounded-xl bg-slate-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
            >
              Open Research Workspace
            </a>

            <a
              href="/grants"
              className="rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Grant Workspace
            </a>

            <a
              href="/humanitarian"
              className="rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Humanitarian Workspace
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <WorkspaceCard
            title="Research"
            description="Analyze evidence, summarize documents, and extract actionable findings."
          />

          <WorkspaceCard
            title="Grants"
            description="Turn evidence into structured proposals, logframes, and grant content."
          />

          <WorkspaceCard
            title="Humanitarian"
            description="Create needs assessments, situation reports, and response plans."
          />
        </div>
      </section>
    </main>
  );
}

function WorkspaceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>

      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </div>
  );
}
