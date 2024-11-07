import { ApiAxiosInstance } from "@/core/lib/axios";
import { PlanDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import {
  CreatePlanResponse,
  GetPlanResponse,
  GetPlansResponse,
  IPlan,
  UpdatePlanResponse,
} from "@/data/models";
import moment from "moment";

const api = ApiAxiosInstance.getInstance();
const apiPlan = "/plans";

export class PlanRepository implements IRepository<IPlan, PlanDto> {
  async getAll(): Promise<IPlan[]> {
    const response = await api.get<GetPlansResponse>(apiPlan);
    const plans = response.data.data;
    return plans.map((plan) => ({
      id: plan.id,
      name: plan.name,
      start: plan.init,
      end: plan.end,
      career: plan.career,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    }));
  }

  async getById(id: number): Promise<IPlan> {
    const response = await api.get<GetPlanResponse>(`${apiPlan}/${id}`);
    const plan = response.data.data;
    return {
      id: plan.id,
      name: plan.name,
      start: plan.init,
      end: plan.end,
      career: plan.career,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    };
  }

  async create(data: PlanDto): Promise<IPlan> {
    const response = await api.post<CreatePlanResponse>(apiPlan, data);
    const plan = response.data.data;
    return {
      id: plan.id,
      name: plan.name,
      start: plan.init,
      end: plan.end,
      career: plan.career,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    };
  }

  async update(id: number, data: PlanDto): Promise<IPlan> {
    const response = await api.put<UpdatePlanResponse>(
      `${apiPlan}/${id}`,
      data,
    );
    const plan = response.data.data;
    return {
      id: plan.id,
      name: plan.name,
      start: plan.init,
      end: plan.end,
      career: plan.career,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    };
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
