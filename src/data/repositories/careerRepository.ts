import { ApiAxiosInstance } from "@/core/lib/axios";
import { CareerDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import {
  CreateCareerResponse,
  GetCareerResponse,
  GetCareersResponse,
  ICareer,
  UpdateCareerResponse,
} from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiCareer = "/careers";

export class CareerRepository implements IRepository<ICareer, CareerDto> {
  async getAll(): Promise<ICareer[]> {
    const response = await api.get<GetCareersResponse>(apiCareer);
    const careers = response.data.data;
    return careers.map((career) => ({
      id: career.id,
      createdAt: career.created_at,
      updatedAt: career.updated_at,
      name: career.name,
    }));
  }

  async getById(id: number): Promise<ICareer> {
    const response = await api.get<GetCareerResponse>(`${apiCareer}/${id}`);
    const career = response.data.data;
    return {
      id: career.id,
      createdAt: career.created_at,
      updatedAt: career.updated_at,
      name: career.name,
    };
  }

  async create(data: CareerDto): Promise<ICareer> {
    const response = await api.post<CreateCareerResponse>(apiCareer, data);
    const career = response.data.data;
    return {
      id: career.id,
      createdAt: career.created_at,
      updatedAt: career.updated_at,
      name: career.name,
    };
  }

  async update(id: number, data: CareerDto): Promise<ICareer> {
    const response = await api.put<UpdateCareerResponse>(
      `${apiCareer}/${id}`,
      data,
    );
    const career = response.data.data;
    return {
      id: career.id,
      createdAt: career.created_at,
      updatedAt: career.updated_at,
      name: career.name,
    };
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiCareer}/${id}`);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
