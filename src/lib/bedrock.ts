// Path in your repo: src/lib/bedrock.ts
import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,
});

export async function callBedrock({
  system,
  prompt,
}: {
  system: string;
  prompt: string;
}): Promise<string> {
  const command = new ConverseCommand({
    modelId: process.env.BEDROCK_MODEL_ID,
    system: [{ text: system }],
    messages: [
      {
        role: "user",
        content: [{ text: prompt }],
      },
    ],
    inferenceConfig: {
      maxTokens: 2000,
      temperature: 0.4,
    },
  });

  try {
    const response = await client.send(command);
    const text = response.output?.message?.content?.[0]?.text;
    if (!text) {
      throw new Error("Empty response from Bedrock");
    }
    return text;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Bedrock call failed: ${err.message}`);
    }
    throw err;
  }
}
