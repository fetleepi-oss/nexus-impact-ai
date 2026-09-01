import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Nexus Impact AI</h1>

      <p>
        Multi-agent AI workspace for research, grant writing, and humanitarian
        planning.
      </p>

      <section>
        <h2>🔬 Research Agent</h2>
        <p>Generate structured research summaries and evidence analysis.</p>
        <Link href="/research">Open Research</Link>
      </section>

      <section>
        <h2>✍️ Grant Agent</h2>
        <p>Convert research findings into funding proposals and project plans.</p>
        <Link href="/grants">Open Grants</Link>
      </section>

      <section>
        <h2>🌍 Humanitarian Agent</h2>
        <p>
          Create needs assessments, response plans, implementation strategies,
          and monitoring frameworks.
        </p>
        <Link href="/humanitarian">Open Humanitarian</Link>
      </section>
    </main>
  );
}
