import Fastify from "fastify";
import aiRoutes from "./routes/ai.routes";

(async () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.register(aiRoutes)

  fastify.listen({port:9999,host:"0.0.0.0"},()=>{console.log("listening on port 9999")})
})();
