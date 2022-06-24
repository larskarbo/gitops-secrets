import fetch from "node-fetch";
import { VERSION } from "../meta";

/**
 * Fetch secrets from Doppler the API.
 * @param {{dopplerToken: string}} [{dopplerToken: process.env.DOPPLER_TOKEN}] Requires a Doppler Service Token for API authentication. See https://docs.doppler.com/docs/enclave-service-tokens
 */
export async function fetchSecrets({ dopplerToken = process.env.DOPPLER_TOKEN }: { dopplerToken?: string } | undefined = {}) {
  if (!dopplerToken) {
    throw new Error("Doppler API Error: The 'DOPPLER_TOKEN' environment variable is required");
  }

  const encodedAuthData = Buffer.from(`${dopplerToken}:`).toString("base64");
  const authHeader = `Basic ${encodedAuthData}`;
  const userAgent = `gitops-secrets-nodejs/${VERSION}`;
  const secrets = await fetch("https://api.doppler.com/v3/configs/config/secrets/download?format=json", {
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
    .catch(async (r) => {
      const data = r.json().catch(() => undefined);

      throw new Error(`Doppler API Error: ${r.statusCode} ${r.statusMessage} ${JSON.stringify(data)}`);
    });

  return secrets as {
    [key: string]: string;
  };
}
