import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { workspace, prompt } = await req.json();

    let mockResponse = "";

    if (workspace === "research") {
      mockResponse = [Research Agent Output - GPT-5.6 Engine]\n\nAnalysis Summary for: "${prompt}"\n\n1. Key Findings: Extracted evidence supports primary hypothesis.\n2. Research Gaps: Limited quantitative longitudinal data.\n3. Citations Generated: Standard APA format prepared.;
    } else if (workspace === "grant") {
      mockResponse = [Grant Agent Output - GPT-5.6 Engine]\n\nProposal Framework for: "${prompt}"\n\n• Project Goal: Strengthen local resilience\n• Expected Outcome: 40% increase in capacity\n• Estimated Budget: $150,000 USD\n• Logframe Matrix: Generated successfully.;
    } else {
      mockResponse = [Humanitarian Agent Output - GPT-5.6 Engine]\n\nNeeds Assessment Report:\n\n• Situation Overview: Rapid response framework active for "${prompt}".\n• M&E Indicators: 5 key performance metrics configured.\n• Risk Analysis: Severity level 2 (Mitigation planned).;
    }

    return NextResponse.json({ result: mockResponse });
  } catch (error) {
    return NextResponse.json({ error: "Agent processing failed" }, { status: 500 });
  }
}
