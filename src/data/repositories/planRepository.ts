import { ApiAxiosInstance } from "@/core/lib/axios";
import { PlanDto } from "@/data/dto";
import { IRepository, IResponse } from "@/data/interfaces";
import { Plan } from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiPlan = "/plans";

export class PlanRepository implements IRepository<Plan, PlanDto> {
  async getAll(): Promise<Plan[]> {
    const response = await api.get<IResponse<Plan[]>>(apiPlan);
    return response.data.data;
  }

  async getById(id: number): Promise<Plan> {
    const response = await api.get<IResponse<Plan>>(`${apiPlan}/${id}`);
    return response.data.data;
  }

  async create(data: PlanDto): Promise<Plan> {
    const response = await api.post<IResponse<Plan>>(apiPlan, data);
    return response.data.data;
  }

  async update(id: number, data: PlanDto): Promise<Plan> {
    const response = await api.put<IResponse<Plan>>(`${apiPlan}/${id}`, data);
    return response.data.data;
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiPlan}/${id}`);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
