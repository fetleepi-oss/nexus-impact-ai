import { NextResponse } from "next/server";
import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

const openai = apiKey
  ? new OpenAI({
      apiKey,
    })
  : null;

export async function POST(request: Request) {
  try {
    if (!openai) {
      return NextResponse.json(
        {
          error: "OPENAI_API_KEY is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();

    const question =
      typeof body?.question === "string"
        ? body.question.trim()
        : "";

    if (!question) {
      return NextResponse.json(
        {
          error: "Research question is required.",
        },
        {
          status: 400,
        }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5.6",
      input: [
        {
          role: "system",
          content:
            "You are the Nexus Impact AI Research Agent. Analyze research questions carefully and produce structured, evidence-oriented research assistance. Clearly distinguish established evidence, uncertainty, research gaps, and recommendations. Do not invent citations or evidence.",
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    return NextResponse.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error("Research agent error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Research agent failed.",
      },
      {
        status: 500,
      }
    );
  }
}
