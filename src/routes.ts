import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetallCategoriesController } from "./controllers/GetAllCategoryController";
import { GetallCategoriesService } from "./services/GetAllCategoryService";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetallCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle)

export{routes}