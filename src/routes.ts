import { Router } from "express";
import { CreateCategorysController } from "./controllers/CreateCategorysController";

const routes = Router();

routes.post("/categories", new CreateCategorysController().handle);

export { routes };
