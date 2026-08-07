import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { workspace, prompt } = await req.json()

    let mockResponse = ''

    if (workspace === 'research') {
      mockResponse = `
Research Agent Output - GPT-5.6 Engine

Analysis Summary for: "${prompt}"

1. Key Findings: Extracted evidence supports the primary hypothesis.
2. Research Gaps: Limited quantitative longitudinal data available.
3. Citations Generated: Standard APA-style references prepared.
      `
    } else if (workspace === 'grant') {
      mockResponse = `
Grant Agent Output - GPT-5.6 Engine

Proposal Framework for: "${prompt}"

• Project Goal: Strengthen local resilience.
• Expected Outcome: 40% increase in community capacity.
• Estimated Budget: $150,000 USD.
• Logframe Matrix: Generated successfully.
      `
    } else {
      mockResponse = `
Humanitarian Agent Output - GPT-5.6 Engine

Response Plan for: "${prompt}"

• Situation Analysis: Priority humanitarian needs identified.
• Target Population: Vulnerable rural households.
• Timeline: 12-week phased implementation.
• Monitoring Plan: Weekly field reporting and risk tracking.
      `
    }

    return NextResponse.json({ result: mockResponse.trim() })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}
