import { ScheduleDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import { Schedule } from "@/data/models";

export class ScheduleRepository implements IRepository<Schedule, ScheduleDto> {
  async getAll(): Promise<Schedule[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: number): Promise<Schedule> {
    throw new Error("Method not implemented.");
  }

  async create(data: ScheduleDto): Promise<Schedule> {
    throw new Error("Method not implemented.");
  }

  async update(data: ScheduleDto): Promise<Schedule> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
