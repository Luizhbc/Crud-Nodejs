import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  name: string;
  description: string;
}
export class CreateCategoryService{async execute({name, 
    description}: CategoryRequest): Promise<Error |Category> {
    const repo = getRepository(Category);
    
    if(await repo.findOne({ name }))
    {
      return new Error('Categoria já existe');     
    }

    const category = repo.create({
      name,
      description
    });

    await repo.save(category);
    return category;
  }
  }
