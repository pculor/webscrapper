"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    development: {
        url: process.env.DEV_DATABASE_URL,
        dialect: process.env.DIALECT || 'postgres',
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        host: process.env.PGHOST,
        port: process.env.PGPORT,
    },
    test: {
        username: process.env.DB_TEST_PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE_TEST,
        host: process.env.PGHOST,
        port: process.env.PGPORT,
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        url: process.env.DATABASE_URL,
        dialect: process.env.DIALECT || 'postgres',
    },
};
//# sourceMappingURL=config.js.map