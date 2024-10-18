import { ApiAxiosInstance } from "@/core/lib/axios";
import { ClassroomDto } from "@/data/dto";
import { IRepository, IResponse } from "@/data/interfaces";
import { Classroom } from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiClassroom = "/rooms";

export class ClassroomRepository
  implements IRepository<Classroom, ClassroomDto>
{
  async getAll(): Promise<Classroom[]> {
    const response = await api.get<IResponse<Classroom[]>>(apiClassroom);
    return response.data.data;
  }

  async getById(id: number): Promise<Classroom> {
    const response = await api.get<IResponse<Classroom>>(
      `${apiClassroom}/${id}`,
    );
    return response.data.data;
  }

  async create(data: ClassroomDto): Promise<Classroom> {
    const response = await api.post<IResponse<Classroom>>(apiClassroom, data);
    return response.data.data;
  }

  async update(id: number, data: ClassroomDto): Promise<Classroom> {
    const response = await api.put<IResponse<Classroom>>(
      `${apiClassroom}/${id}`,
      data,
    );
    return response.data.data;
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiClassroom}/${id}`);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
