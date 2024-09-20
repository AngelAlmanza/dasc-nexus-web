import { CareerDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import { Career } from "@/data/models";

export class CareerRepository implements IRepository<Career, CareerDto> {
  async getAll(): Promise<Career[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: number): Promise<Career> {
    throw new Error("Method not implemented.");
  }

  async create(data: CareerDto): Promise<Career> {
    throw new Error("Method not implemented.");
  }

  async update(data: CareerDto): Promise<Career> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
