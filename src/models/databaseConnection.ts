import pg from 'pg';
import dotenv from 'dotenv';
import databaseTable from './databaseTables';
import envConfigs from '../config/config';

const env = process.env.NODE_ENV || 'development';
const dbConfig = envConfigs[env];

dotenv.config();

const dbUrl = new URL(dbConfig.url);

const config = {
	user: dbUrl.username,
	password: dbUrl.password,
	host: dbUrl.hostname,
	port: dbUrl.port,
	database: dbUrl.pathname.split('/')[1],
};

const { Pool } = pg;

const pool = new Pool(config);

const seed = () => {
	const qry = databaseTable;
	pool.query(qry, (err) => {
		if (err) {
			console.log(err.toString());
		} else {
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
export default { migrate, databaseConnection };
