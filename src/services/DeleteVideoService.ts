import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class DeleteVideoService{
  async execute(id: string){
    const repo = getRepository(Video)

    if(!(await repo.findOne(id))){
      return new Error ("Video não existe");
    }

    await repo.delete(id);
  }
}