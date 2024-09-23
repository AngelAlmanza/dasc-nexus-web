import { TeacherDto } from "@/data/dto";
import { TeacherFactory } from "@/data/factories";
import { IRepository } from "@/data/interfaces";
import { Teacher } from "@/data/models";

const teacherFactory = new TeacherFactory();
export class TeacherRepository implements IRepository<Teacher, TeacherDto> {
  async getAll(): Promise<Teacher[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Array.from({ length: 100 }, () => teacherFactory.fake()));
      }, 1000);
    });
  }

  async getById(id: number): Promise<Teacher> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(teacherFactory.fake());
      }, 1000);
    });
  }

  async create(data: TeacherDto): Promise<Teacher> {
    throw new Error("Method not implemented.");
  }

  async update(data: TeacherDto): Promise<Teacher> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
