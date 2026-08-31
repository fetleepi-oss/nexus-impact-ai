export default function ResearchPage() {
  return (
   <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Research Workspace</h1>
      
      <div style={{ margin: '1rem 0' }}>
        <h3>Upload document</h3>
        <input type="file" accept=".pdf" />
      </di
      <p>OR</p>

      <div style={{ margin: '1rem 0' }}>
        <h3>Enter research question</h3>
        <input type="text" placeholder="Enter your research question..." style={{ width: '100%', padding: '0.5rem' }} />
      </div>

      <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Analyze</button>

      <hr style={{ margin: '2rem 0' }} />

      <section>
        <h3>Research Summary</h3>
        <h3>Key Findings</h3>
        <h3>Evidence</h3>
        <h3>Research Gaps</h3>
        <h3>Recommendations</h3>
      </section>

      <div style={{ marginTop: '2rem' }}>
        <button style={{ padding: '0.7rem 1.2rem', backgroundColor: '#0070f3', color: 'white', border: 'none', cursor: 'pointer' }}>
          Send to Grant Workspace
        </button>
      </div>
    </main>
}
