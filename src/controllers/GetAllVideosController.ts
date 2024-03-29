import { Request, Response } from "express";
import { GetAllVideosServices } from "../services/GetallVideosService";

export class GetAllVideosController{
  async handle(request: Request, response: Response){
    const service = new GetAllVideosServices();
    const videos = await service.execute();
    return response.json(videos);
  }
}