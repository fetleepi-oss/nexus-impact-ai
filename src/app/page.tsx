export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Nexus Impact AI
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Turn evidence into
            <span className="block text-slate-600">
              impactful action.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            An AI operating system for impact organizations, connecting
            research, grant development, and humanitarian planning in one
            workspace.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/research"
              className="rounded-xl bg-slate-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
            >
              Research Workspace
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
            href="/research"
          />

          <WorkspaceCard
            title="Grants"
            description="Transform evidence into structured proposals and grant content."
            href="/grants"
          />

          <WorkspaceCard
            title="Humanitarian"
            description="Create needs assessments, situation reports, and response plans."
            href="/humanitarian"
          />
        </div>
      </section>
    </main>
  );
}

function WorkspaceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>

      <p className="mt-3 leading-7 text-slate-600">{description}</p>

      <span className="mt-6 inline-block text-sm font-semibold text-slate-900">
        Open workspace →
      </span>
    </a>
  );
}
