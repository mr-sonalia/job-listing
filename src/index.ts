require("dotenv").config({ path: ".env" });

import express from "express";
import { initializeDB } from "./database";

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeDB({
	host: process.env.DB_HOST as string,
	port: parseInt(process.env.DB_PORT as string),
	username: process.env.DB_USERNAME as string,
	password: process.env.DB_PASSWORD as string,
	dbName: process.env.DB_NAME as string,
});

//  Ping API
app.get("/ping", (req, res) => {
	return res.status(200).send("pong");
});

const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

process.on("SIGTERM", () => {
	console.log("SIGTERM received. Shutting down gracefully");
	server.close(() => console.log("Process terminated"));
});

process.on("SIGINT", () => {
	console.log("SIGINT received. Shutting down gracefully");
	server.close(() => console.log("Process terminated"));
});
