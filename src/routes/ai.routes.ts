import { FastifyInstance } from "fastify";
import { z } from "zod";
import getResponseFromAI from "../utils/openai";

export default async function aiRoutes(fastify: FastifyInstance) {
  fastify.get("/", async (req, reply) => {
    return { message: "Server is up" };
  });

  fastify.post("/send", async (req, reply) => {
    const requestSchema = z.object({
      text: z.string(),
    });

    const { text } = requestSchema.parse(req.body);

    if (text.length <= 0) {
      return { success: false, message: "text is required" };
    }

    const data = await getResponseFromAI(text)
      .then((response) => {
        return { success: true, message: response.data.choices[0].text };
      })
      .catch((err) => {
        return { success: false, message: err };
      });

    return data;
  });
}
