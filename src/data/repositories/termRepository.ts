import { ApiAxiosInstance } from "@/core/lib/axios";
import { TermDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import {
  CreateTermResponse,
  GetTermResponse,
  GetTermsResponse,
  ITerm,
  UpdateTermResponse,
} from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiTerm = "/terms";

export class TermRepository implements IRepository<ITerm, TermDto> {
  async getAll(): Promise<ITerm[]> {
    const response = await api.get<GetTermsResponse>(apiTerm);
    const plans = response.data.data;
    return plans.map((plan) => ({
      id: plan.id,
      active: plan.active,
      init: plan.init,
      end: plan.end,
      createdAt: plan.created_at,
      updatedAt: plan.updated_at,
    }));
  }

  async getById(id: number): Promise<ITerm> {
    const response = await api.get<GetTermResponse>(`${apiTerm}/${id}`);
    const plan = response.data.data;
    return {
      id: plan.id,
      active: plan.active,
      init: plan.init,
      end: plan.end,
      createdAt: plan.created_at,
      updatedAt: plan.updated_at,
    };
  }

  async create(data: TermDto): Promise<ITerm> {
    const response = await api.post<CreateTermResponse>(apiTerm, data);
    const plan = response.data.data;
    return {
      id: plan.id,
      active: plan.active,
      init: plan.init,
      end: plan.end,
      createdAt: plan.created_at,
      updatedAt: plan.updated_at,
    };
  }

  async update(id: number, data: TermDto): Promise<ITerm> {
    const response = await api.put<UpdateTermResponse>(
      `${apiTerm}/${id}`,
      data,
    );
    const plan = response.data.data;
    return {
      id: plan.id,
      active: plan.active,
      init: plan.init,
      end: plan.end,
      createdAt: plan.created_at,
      updatedAt: plan.updated_at,
    };
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiTerm}/${id}`);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
