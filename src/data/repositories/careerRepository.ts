import { CareerDto } from "@/data/dto";
import { IRepository, IResponse } from "@/data/interfaces";
import { Career } from "@/data/models";
import { ApiAxiosInstance } from "@/core/lib/axios";

const api = ApiAxiosInstance.getInstance();
const apiCareer = "/careers";

export class CareerRepository implements IRepository<Career, CareerDto> {
  async getAll(): Promise<Career[]> {
    const response = await api.get<IResponse<Career[]>>(apiCareer);
    return response.data.data;
  }

  async getById(id: number): Promise<Career> {
    const response = await api.get<IResponse<Career>>(`${apiCareer}/${id}`);
    return response.data.data;
  }

  async create(data: CareerDto): Promise<Career> {
    const response = await api.post<IResponse<Career>>(apiCareer, data);
    return response.data.data;
  }

  async update(id: number, data: CareerDto): Promise<Career> {
    const response = await api.put<IResponse<Career>>(
      `${apiCareer}/${id}`,
      data,
    );
    return response.data.data;
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
