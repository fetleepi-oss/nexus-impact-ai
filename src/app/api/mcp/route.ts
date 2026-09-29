// Path in your repo: src/app/api/mcp/route.ts
import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { callBedrock } from "@/lib/bedrock";

const handler = createMcpHandler((server) => {
  server.registerTool(
    "create_grant_concept",
    {
      title: "Create Grant Concept",
      description:
        "Transform a project idea into a structured grant-development draft: problem statement, objectives, activities, target beneficiaries, and a budget summary.",
      inputSchema: z.object({
        projectIdea: z
          .string()
          .describe("A short description of the project idea"),
      }),
    },
    async ({ projectIdea }) => {
      const text = await callBedrock({
        system:
          "You are a grant-writing assistant for NGOs and humanitarian organizations. Given a project idea, produce a structured grant concept as JSON with fields: problemStatement, objectives (array), activities (array), targetBeneficiaries, budgetSummary. Return only valid JSON, no prose.",
        prompt: projectIdea,
      });
      return { content: [{ type: "text", text }] };
    }
  );

  server.registerTool(
    "summarize_research",
    {
      title: "Summarize Research",
      description:
        "Organize complex research information into a concise structured summary: key findings, evidence summary, and gaps.",
      inputSchema: z.object({
        researchText: z
          .string()
          .describe("Research text, abstract, or notes to summarize"),
      }),
    },
    async ({ researchText }) => {
      const text = await callBedrock({
        system:
          "You are a research analyst. Given research text, produce structured JSON with fields: keyFindings (array), evidenceSummary, gaps (array). Return only valid JSON, no prose.",
        prompt: researchText,
      });
      return { content: [{ type: "text", text }] };
    }
  );

  server.registerTool(
    "create_humanitarian_plan",
    {
      title: "Create Humanitarian Plan",
      description:
        "Turn a humanitarian problem into an organized action plan: objectives, activities, timeline, and risks.",
      inputSchema: z.object({
        problemDescription: z
          .string()
          .describe("Description of the humanitarian problem or field situation"),
      }),
    },
    async ({ problemDescription }) => {
      const text = await callBedrock({
        system:
          "You are a humanitarian program planner. Given a problem description, produce structured JSON with fields: objectives (array), activities (array), timeline (array of phases), risks (array). Return only valid JSON, no prose.",
        prompt: problemDescription,
      });
      return { content: [{ type: "text", text }] };
    }
  );

  server.registerTool(
    "generate_indicators",
    {
      title: "Generate Indicators",
      description:
        "Develop measurable monitoring and evaluation indicators for an impact project, each with a baseline and target.",
      inputSchema: z.object({
        projectDescription: z
          .string()
          .describe("Description of the project to generate indicators for"),
      }),
    },
    async ({ projectDescription }) => {
      const text = await callBedrock({
        system:
          "You are an M&E specialist. Given a project description, produce structured JSON: { indicators: [{ name, definition, baseline, target, meansOfVerification }] }. Return only valid JSON, no prose.",
        prompt: projectDescription,
      });
      return { content: [{ type: "text", text }] };
    }
  );
});

export { handler as GET, handler as POST, handler as DELETE };
