"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const secrets_files_1 = require("./secrets-files");
const secrets_1 = require("./secrets");
const doppler_1 = require("./providers/doppler");
const exportObject = Object.assign(Object.assign(Object.assign({}, secrets_1.default), secrets_files_1.default), { providers: {
        doppler: {
            fetch: doppler_1.fetchSecrets,
        },
    } });
exports.default = exportObject;
