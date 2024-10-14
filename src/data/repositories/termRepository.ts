import { ApiAxiosInstance } from "@/core/lib/axios";
import { TermDto } from "@/data/dto";
import { IRepository, IResponse } from "@/data/interfaces";
import { Term } from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiTerm = "/terms";

export class TermRepository implements IRepository<Term, TermDto> {
  async getAll(): Promise<Term[]> {
    const response = await api.get<IResponse<Term[]>>(apiTerm);
    return response.data.data;
  }

  async getById(id: number): Promise<Term> {
    const response = await api.get<IResponse<Term>>(`${apiTerm}/${id}`);
    return response.data.data;
  }

  async create(data: TermDto): Promise<Term> {
    const response = await api.post<IResponse<Term>>(apiTerm, data);
    return response.data.data;
  }

  async update(id: number, data: TermDto): Promise<Term> {
    const response = await api.put<IResponse<Term>>(`${apiTerm}/${id}`, data);
    return response.data.data;
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
