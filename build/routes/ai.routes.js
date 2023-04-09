"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const openai_1 = __importDefault(require("../utils/openai"));
function aiRoutes(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/", (req, reply) => __awaiter(this, void 0, void 0, function* () {
            return { message: "Server is up" };
        }));
        fastify.post("/send", (req, reply) => __awaiter(this, void 0, void 0, function* () {
            const requestSchema = zod_1.z.object({
                text: zod_1.z.string(),
            });
            const { text } = requestSchema.parse(req.body);
            if (text.length <= 0) {
                return { success: false, message: "text is required" };
            }
            const data = yield (0, openai_1.default)(text)
                .then((response) => {
                return { success: true, message: response.data.choices[0].text };
            })
                .catch((err) => {
                return { success: false, message: err };
            });
            return data;
        }));
    });
}
exports.default = aiRoutes;
