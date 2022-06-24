/**
 * Fetch secrets from Doppler the API.
 * @param {{dopplerToken: string}} [{dopplerToken: process.env.DOPPLER_TOKEN}] Requires a Doppler Service Token for API authentication. See https://docs.doppler.com/docs/enclave-service-tokens
 */
export declare function fetchSecrets({ dopplerToken }?: {
    dopplerToken?: string;
} | undefined): Promise<{
    [key: string]: string;
}>;
