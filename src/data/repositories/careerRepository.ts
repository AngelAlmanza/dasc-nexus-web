import { CareerDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import { Career } from "@/data/models";
import { MajorFactory } from "../factories";

const careerFactory = new MajorFactory();
export class CareerRepository implements IRepository<Career, CareerDto> {
  async getAll(): Promise<Career[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Array.from({ length: 100 }, () => careerFactory.fake()));
      }, 1000);
    });
  }

  async getById(id: number): Promise<Career> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(careerFactory.fake());
      }, 1000);
    });
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
