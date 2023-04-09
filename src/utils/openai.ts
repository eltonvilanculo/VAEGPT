require("dotenv").config();
import { Configuration, OpenAIApi } from "openai";
import { config } from "process";
const openAIConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
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
