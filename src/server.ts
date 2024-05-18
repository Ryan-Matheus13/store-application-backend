import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from "express";
import { routes } from "./routes";

const app = express();

AppDataSource.initialize();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("server is running"));
