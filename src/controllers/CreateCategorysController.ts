import { Request, Response } from "express";
import { CreateCategorysService } from "../services/CreateCategoryService";

export class CreateCategorysController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const service = new CreateCategorysService();

    const result = await service.execute({ name, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
