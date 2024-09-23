import { SubjectDto } from "@/data/dto";
import { SubjectFactory } from "@/data/factories";
import { IRepository } from "@/data/interfaces";
import { Subject } from "@/data/models";

const subjectFactory = new SubjectFactory();
export class SubjectRepository implements IRepository<Subject, SubjectDto> {
  async getAll(): Promise<Subject[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Array.from({ length: 100 }, () => subjectFactory.fake()));
      }, 1000);
    });
  }

  async getById(id: number): Promise<Subject> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(subjectFactory.fake());
      }, 1000);
    });
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
