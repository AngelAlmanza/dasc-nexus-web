import { TermDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import { Term } from "@/data/models";

export class TermRepository implements IRepository<Term, TermDto> {
  async getAll(): Promise<Term[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: number): Promise<Term> {
    throw new Error("Method not implemented.");
  }

  async create(data: TermDto): Promise<Term> {
    throw new Error("Method not implemented.");
  }

  async update(data: TermDto): Promise<Term> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
