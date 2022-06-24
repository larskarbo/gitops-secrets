/**
 * Encrypt secrets from Object to JSON format
 * @param {string} secrets
 * @returns {string}
 */
declare function encrypt(secrets: any): string;
/**
 * Decrypt secrets in JSON format to Object
 */
declare function decrypt(secrets: string): {
    [key: string]: string;
};
/**
 * Merge the payload object with process.env
 * @param {Record<string, any>} payload
 */
declare function populateEnv(payload: any): any;
/**
 * Decrypt secrets and supply a `populateEnv` method for convenience
 * @param {string} cipherText
 * @returns {Record<string, any>}
 */
declare function loadSecretsFromCipher(cipherText: any): {
    populateEnv: () => any;
};
declare const exportObject: {
    encrypt: typeof encrypt;
    decrypt: typeof decrypt;
    populateEnv: typeof populateEnv;
    loadSecretsFromCipher: typeof loadSecretsFromCipher;
};
export default exportObject;
