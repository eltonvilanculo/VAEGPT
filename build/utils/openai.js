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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const openai_1 = require("openai");
const openAIConfig = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openAI = new openai_1.OpenAIApi(openAIConfig);
function getResponseFromAI(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield openAI.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 1000,
        });
        return response;
    });
}
exports.default = getResponseFromAI;
