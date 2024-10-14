import { ApiAxiosInstance } from "@/core/lib/axios";
import { ScheduleDto } from "@/data/dto";
import { IRepository, IResponse } from "@/data/interfaces";
import { Schedule } from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiSchedule = "/schedules";

export class ScheduleRepository implements IRepository<Schedule, ScheduleDto> {
  async getAll(): Promise<Schedule[]> {
    const response = await api.get<IResponse<Schedule[]>>(apiSchedule);
    return response.data.data;
  }

  async getById(id: number): Promise<Schedule> {
    const response = await api.get<IResponse<Schedule>>(`${apiSchedule}/${id}`);
    return response.data.data;
  }

  async create(data: ScheduleDto): Promise<Schedule> {
    const response = await api.post<IResponse<Schedule>>(apiSchedule, data);
    return response.data.data;
  }

  async update(id: number, data: ScheduleDto): Promise<Schedule> {
    const response = await api.put<IResponse<Schedule>>(
      `${apiSchedule}/${id}`,
      data,
    );
    return response.data.data;
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiSchedule}/${id}`);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
