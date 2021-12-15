import { Request, Response} from 'express'
import { UpdateCategoryService } from '../services/UpdateVideoService';

export class UpdateVideoController {
  async handle(request: Request, response: Response){
    const { id } = request.params;
    const { name, description, duration, category_id} = request.body

    const video = new UpdateCategoryService();

    const result = await video.execute({id,name,description, duration, category_id});

    if(result instanceof Error){
      return response.status(400).json(result.message)
    }
    return response.json();
  }
}