import { Request, Response } from "express";
import { GetallCategoriesService } from "../services/GetAllCategoryService";

export class GetallCategoriesController {
  async handle(request: Request, response: Response){
    const service = new GetallCategoriesService();
    const categories = await service.execute();
    return response.json(categories);
  }
}