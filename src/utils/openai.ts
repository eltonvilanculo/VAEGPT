import { Configuration, OpenAIApi } from "openai";
import { config } from "process";
const key = "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";
const openAIConfig = new Configuration({
  apiKey: key,
});

const openAI = new OpenAIApi(openAIConfig);

export default async function getResponseFromAI(prompt: string) {
  const response = await openAI.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 1000,
  });

  return response;
}
