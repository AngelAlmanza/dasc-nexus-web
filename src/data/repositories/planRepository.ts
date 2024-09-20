import { PlanDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import { Plan } from "@/data/models";

export class PlanRepository implements IRepository<Plan, PlanDto> {
  async getAll(): Promise<Plan[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: number): Promise<Plan> {
    throw new Error("Method not implemented.");
  }

  async create(data: PlanDto): Promise<Plan> {
    throw new Error("Method not implemented.");
  }

  async update(data: PlanDto): Promise<Plan> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
