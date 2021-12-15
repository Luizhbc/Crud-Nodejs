import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoControlller";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { DeleteVideoController } from "./controllers/DeleteVideoController";
import { GetallCategoriesController } from "./controllers/GetAllCategoryController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { UpdateVideoController } from "./controllers/UpdateVideoController";
import { CreateVideoService } from "./services/CreateVideoService";
import { GetallCategoriesService } from "./services/GetAllCategoryService";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetallCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)

routes.post("/video", new CreateVideoController().handle);
routes.get("/video", new GetAllVideosController().handle);
routes.delete("/video/:id", new DeleteVideoController().handle);
routes.put("/video/:id", new UpdateVideoController().handle)
export{routes}