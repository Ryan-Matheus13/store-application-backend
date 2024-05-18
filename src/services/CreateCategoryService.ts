import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../data-source";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategorysService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);

    if (await repo.findOne({ where: { name } })) {
      return new Error("Category already exists");
    }
    const category = repo.create({
      name,
      description,
    });

    await repo.save(category);

    return category;
  }
}
