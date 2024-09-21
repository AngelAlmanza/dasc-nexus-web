import { ClassroomDto } from "@/data/dto";
import { ClassroomFactory } from "@/data/factories";
import { IRepository } from "@/data/interfaces";
import { Classroom } from "@/data/models";

const classroomFactory = new ClassroomFactory();
export class ClassroomRepository
  implements IRepository<Classroom, ClassroomDto>
{
  async getAll(): Promise<Classroom[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Array.from({ length: 100 }, () => classroomFactory.fake()));
      }, 1000);
    });
  }

  async getById(id: number): Promise<Classroom> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(classroomFactory.fake());
      }, 1000);
    });
  }

  async create(data: ClassroomDto): Promise<Classroom> {
    throw new Error("Method not implemented");
  }

  async update(id: number, data: ClassroomDto): Promise<Classroom> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
