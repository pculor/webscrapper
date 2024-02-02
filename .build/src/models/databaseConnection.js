"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const dotenv_1 = __importDefault(require("dotenv"));
const databaseTables_1 = __importDefault(require("./databaseTables"));
const config_1 = __importDefault(require("../config/config"));
const env = process.env.NODE_ENV || 'development';
const dbConfig = config_1.default[env];
dotenv_1.default.config();
const dbUrl = new URL(dbConfig.url);
const config = {
    user: dbUrl.username,
    password: dbUrl.password,
    host: dbUrl.hostname,
    port: dbUrl.port,
    database: dbUrl.pathname.split('/')[1],
};
const { Pool } = pg_1.default;
const pool = new Pool(config);
const seed = () => {
    const qry = databaseTables_1.default;
    pool.query(qry, (err) => {
        if (err) {
            console.log(err.toString());
        }
        else {
            console.log('Migration Successful');
        }
    });
};
const migrate = () => {
    pool.connect()
        .then((client) => {
        console.log('database connection established');
        if (client) {
            seed();
            client.release();
        }
    }).catch((err) => { console.log(`database connection established ${err}`); });
};
migrate();
const databaseConnection = {
    query: (text, params) => pool.query(text, params),
};
exports.default = { migrate, databaseConnection };
//# sourceMappingURL=databaseConnection.js.map