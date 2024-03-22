import mongoose from "mongoose";

async function initializeDB(datasource: {
	host: string;
	port: number;
	username: string;
	password: string;
	dbName: string;
}) {
	const connectionOptions = {
		dbName: datasource.dbName as string,
	};

	try {
		await mongoose.connect(
			`mongodb://${datasource.username}:${datasource.password}@${datasource.host}:${datasource.port}`,
			{ ...connectionOptions },
		);
		console.log(`[Mongoose] Successfully connected to the database`);
	} catch (error) {
		console.error(error);
	}
}

export { initializeDB };
