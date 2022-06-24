import { fetchSecrets } from "./providers/doppler";
declare const exportObject: {
    providers: {
        doppler: {
            fetch: typeof fetchSecrets;
        };
    };
    build: (payload: any, options?: {
        path: any;
        cipherTextOnly: boolean;
        typescript: boolean;
    }) => Promise<void>;
    encryptToFile: (payload: any, options?: {
        path: any;
    }) => void;
    decryptFromFile: (filePath: any) => {
        populateEnv: () => any;
    };
    loadSecrets: () => any;
    DEFAULT_JS_PATH: string;
    DEFAULT_FILE_PATH: string;
    encrypt: (secrets: any) => string;
    decrypt: (secrets: string) => {
        [key: string]: string;
    };
    populateEnv: (payload: any) => any;
    loadSecretsFromCipher: (cipherText: any) => {
        populateEnv: () => any;
    };
};
export default exportObject;
