/**
 * Encapsulate encrypted secrets in a JS module for easy runtime access.
 * Use {options.path} to output module locally for when package level storage or non-literal imports are disallowed.
 * Use {options.cipherTextOnly} to limit the JS file to only exporting `CIPHER_TEXT`
 * @param {<Record<string, any>} payload
 * @param {{path: string, cipherTextOnly: boolean}} [options={path: null, cipherTextOnly: false}]
 */
declare function build(payload: any, options?: {
    path: any;
    cipherTextOnly: boolean;
    typescript: boolean;
}): Promise<void>;
/**
 * Encrypt JSON-serializable payload to a static file
 * @param {Record<string,any>} payload
 * @param {{path: string}} [options={ path: null }]
 */
declare function encryptToFile(payload: any, options?: {
    path: any;
}): void;
/**
 * Decrypt JSON payload to object with option to merge with process.env
 * @param {string} filePath
 * @returns
 */
declare function decryptFromFile(filePath: any): {
    populateEnv: () => any;
};
declare function loadSecrets(): any;
declare const exportObject: {
    build: typeof build;
    encryptToFile: typeof encryptToFile;
    decryptFromFile: typeof decryptFromFile;
    loadSecrets: typeof loadSecrets;
    DEFAULT_JS_PATH: string;
    DEFAULT_FILE_PATH: string;
};
export default exportObject;
