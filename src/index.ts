import secretsFiles from "./secrets-files";
import secrets from "./secrets";
import { fetchSecrets } from "./providers/doppler";

const exportObject = {
  ...secrets,
  ...secretsFiles,
  providers: {
    doppler: {
      fetch: fetchSecrets,
    },
  },
};

export default exportObject;
