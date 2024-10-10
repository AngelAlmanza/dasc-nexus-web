import { ApiAxiosInstance } from "@/core/lib/axios";
import { TeacherDto } from "@/data/dto";
import { IRepository, IResponse } from "@/data/interfaces";
import { Teacher } from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiTeacher = "/teachers";

export class TeacherRepository implements IRepository<Teacher, TeacherDto> {
  async getAll(): Promise<Teacher[]> {
    const response = await api.get<IResponse<Teacher[]>>(apiTeacher);
    return response.data.data;
  }

  async getById(id: number): Promise<Teacher> {
    const response = await api.get<IResponse<Teacher>>(`${apiTeacher}/${id}`);
    return response.data.data;
  }

  async create(data: TeacherDto): Promise<Teacher> {
    const response = await api.post<IResponse<Teacher>>(apiTeacher, data);
    return response.data.data;
  }

  async update(id: number, data: TeacherDto): Promise<Teacher> {
    const response = await api.put<IResponse<Teacher>>(
      `${apiTeacher}/${id}`,
      data,
    );
    return response.data.data;
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiTeacher}/${id}`);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
