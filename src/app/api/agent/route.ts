import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { workspace, prompt } = await req.json();

    let mockResponse = "";

    if (workspace === "research") {
      mockResponse = `
[Research Agent Output - GPT-5.6 Engine]

Analysis Summary for: ${prompt}

1. Key Findings: Extracted evidence supports the primary hypothesis.
2. Research Gaps: Limited quantitative longitudinal data.
3. Citations Generated: Standard APA-style references prepared.
      `;
    } else if (workspace === "grant") {
      mockResponse = `
[Grant Agent Output - GPT-5.6 Engine]

Proposal Framework for: ${prompt}

• Project Goal: Strengthen local resilience
• Expected Outcome: 40% increase in capacity
• Estimated Budget: $150,000 USD
• Logframe Matrix: Generated successfully
      `;
    } else {
      mockResponse = `
[Humanitarian Agent Output - GPT-5.6 Engine]

Response Plan for: ${prompt}

• Situation Analysis: Priority humanitarian needs identified
• Target Population: Rural and underserved communities
• Timeline: 6-month implementation framework
• Monitoring Plan: Monthly indicator tracking included
      `;
    }

    return NextResponse.json({ result: mockResponse.trim() });
  } catch (error) {
    return NextResponse.json(
      { error: "Agent execution failed" },
      { status: 500 }
    );
  }
}import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { workspace, prompt } = await req.json();

    let mockResponse = "";

    if (workspace === "research") {
      mockResponse = `
[Research Agent Output - GPT-5.6 Engine]

Analysis Summary for: ${prompt}

1. Key Findings: Extracted evidence supports the primary hypothesis.
2. Research Gaps: Limited quantitative longitudinal data.
3. Citations Generated: Standard APA-style references prepared.
      `;
    } else if (workspace === "grant") {
      mockResponse = `
[Grant Agent Output - GPT-5.6 Engine]

Proposal Framework for: ${prompt}

• Project Goal: Strengthen local resilience
• Expected Outcome: 40% increase in capacity
• Estimated Budget: $150,000 USD
• Logframe Matrix: Generated successfully
      `;
    } else {
      mockResponse = `
[Humanitarian Agent Output - GPT-5.6 Engine]

Response Plan for: ${prompt}

• Situation Analysis: Priority humanitarian needs identified
• Target Population: Rural and underserved communities
• Timeline: 6-month implementation framework
• Monitoring Plan: Monthly indicator tracking included
      `;
    }

    return NextResponse.json({ result: mockResponse.trim() });
  } catch (error) {
    return NextResponse.json(
      { error: "Agent execution failed" },
      { status: 500 }
    );
  }
}
