import { ApiAxiosInstance } from "@/core/lib/axios";
import { GroupDto } from "@/data/dto";
import { IRepository, IResponse } from "@/data/interfaces";
import { Group } from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiGroup = "/groups";

export class GroupRepository implements IRepository<Group, GroupDto> {
  async getAll(): Promise<Group[]> {
    const response = await api.get<IResponse<Group[]>>(apiGroup);
    return response.data.data;
  }

  async getById(id: number): Promise<Group> {
    const response = await api.get<IResponse<Group>>(`${apiGroup}/${id}`);
    return response.data.data;
  }

  async create(data: GroupDto): Promise<Group> {
    const response = await api.post<IResponse<Group>>(apiGroup, data);
    return response.data.data;
  }

  async update(id: number, data: GroupDto): Promise<Group> {
    const response = await api.put<IResponse<Group>>(`${apiGroup}/${id}`, data);
    return response.data.data;
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiGroup}/${id}`);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
