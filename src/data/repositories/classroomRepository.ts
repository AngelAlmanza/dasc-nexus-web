import { ClassroomDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import { Classroom } from "@/data/models";

export class ClassroomRepository
  implements IRepository<Classroom, ClassroomDto>
{
  async getAll(): Promise<Classroom[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: number): Promise<Classroom> {
    throw new Error("Method not implemented.");
  }

  async create(data: ClassroomDto): Promise<Classroom> {
    throw new Error("Method not implemented.");
  }

  async update(data: ClassroomDto): Promise<Classroom> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
