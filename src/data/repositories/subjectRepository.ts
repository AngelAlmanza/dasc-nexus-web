import { SubjectDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import { Subject } from "@/data/models";

export class SubjectRepository implements IRepository<Subject, SubjectDto> {
  async getAll(): Promise<Subject[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: number): Promise<Subject> {
    throw new Error("Method not implemented.");
  }

  async create(data: SubjectDto): Promise<Subject> {
    throw new Error("Method not implemented.");
  }

  async update(data: SubjectDto): Promise<Subject> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
