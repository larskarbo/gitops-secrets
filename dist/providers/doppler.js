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
exports.fetchSecrets = void 0;
const node_fetch_1 = require("node-fetch");
const meta_1 = require("../meta");
/**
 * Fetch secrets from Doppler the API.
 * @param {{dopplerToken: string}} [{dopplerToken: process.env.DOPPLER_TOKEN}] Requires a Doppler Service Token for API authentication. See https://docs.doppler.com/docs/enclave-service-tokens
 */
function fetchSecrets({ dopplerToken = process.env.DOPPLER_TOKEN } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!dopplerToken) {
            throw new Error("Doppler API Error: The 'DOPPLER_TOKEN' environment variable is required");
        }
        const encodedAuthData = Buffer.from(`${dopplerToken}:`).toString("base64");
        const authHeader = `Basic ${encodedAuthData}`;
        const userAgent = `gitops-secrets-nodejs/${meta_1.VERSION}`;
        const secrets = yield (0, node_fetch_1.default)("https://api.doppler.com/v3/configs/config/secrets/download?format=json", {
            headers: {
                Authorization: authHeader,
                "user-agent": userAgent,
            },
        })
            .then((r) => {
            if (r.status !== 200) {
                throw new Error("");
            }
            return r;
        })
            .then((r) => r.json())
            .catch((r) => __awaiter(this, void 0, void 0, function* () {
            const data = r.json().catch(() => undefined);
            throw new Error(`Doppler API Error: ${r.statusCode} ${r.statusMessage} ${JSON.stringify(data)}`);
        }));
        return secrets;
    });
}
exports.fetchSecrets = fetchSecrets;
