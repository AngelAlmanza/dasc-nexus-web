import { ApiAxiosInstance } from "@/core/lib/axios";
import { SubjectDto } from "@/data/dto";
import { IRepository, IResponse } from "@/data/interfaces";
import { Subject } from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiSubject = "/subjects";

export class SubjectRepository implements IRepository<Subject, SubjectDto> {
  async getAll(): Promise<Subject[]> {
    const response = await api.get<IResponse<Subject[]>>(apiSubject);
    console.log(response.data.data);
    return response.data.data;
  }

  async getById(id: number): Promise<Subject> {
    const response = await api.get<IResponse<Subject>>(`${apiSubject}/${id}`);
    return response.data.data;
  }

  async create(data: SubjectDto): Promise<Subject> {
    const response = await api.post<IResponse<Subject>>(apiSubject, data);
    return response.data.data;
  }

  async update(id: number, data: SubjectDto): Promise<Subject> {
    const response = await api.put<IResponse<Subject>>(
      `${apiSubject}/${id}`,
      data,
    );
    return response.data.data;
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiSubject}/${id}`);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
