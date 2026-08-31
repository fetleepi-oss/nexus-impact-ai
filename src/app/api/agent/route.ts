import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = body.question;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Research question is required." },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5.6",
      input: `You are a research assistant.

Analyze the following research question:

${question}

Return:
1. Research Summary
2. Key Findings
3. Evidence
4. Research Gaps
5. Recommendations`,
    });

    return NextResponse.json({
      success: true,
      result: response.output_text,
    });
  } catch (error) {
    console.error("Agent API error:", error);

    return NextResponse.json(
      { error: "Failed to analyze the research question." },
      { status: 500 }
    );
  }
}
