import { TeacherDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import { Teacher } from "@/data/models";

export class TeacherRepository implements IRepository<Teacher, TeacherDto> {
  async getAll(): Promise<Teacher[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: number): Promise<Teacher> {
    throw new Error("Method not implemented.");
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
