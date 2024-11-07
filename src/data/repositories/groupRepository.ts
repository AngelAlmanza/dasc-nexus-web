import { ApiAxiosInstance } from "@/core/lib/axios";
import { GroupDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import {
  CreateGroupResponse,
  GetGroupResponse,
  GetGroupsResponse,
  IGroup,
  UpdateGroupResponse,
} from "@/data/models";
import moment from "moment";

const api = ApiAxiosInstance.getInstance();
const apiGroup = "/groups";

export class GroupRepository implements IRepository<IGroup, GroupDto> {
  async getAll(): Promise<IGroup[]> {
    const response = await api.get<GetGroupsResponse>(apiGroup);
    const groups = response.data.data;
    return groups.map((group) => ({
      id: group.id,
      semester: group.semester,
      shift: group.shift,
      students: group.students,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    }));
  }

  async getById(id: number): Promise<IGroup> {
    const response = await api.get<GetGroupResponse>(`${apiGroup}/${id}`);
    const group = response.data.data;
    return {
      id: group.id,
      semester: group.semester,
      shift: group.shift,
      students: group.students,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    };
  }

  async create(data: GroupDto): Promise<IGroup> {
    const response = await api.post<CreateGroupResponse>(apiGroup, data);
    const group = response.data.data;
    return {
      id: group.id,
      semester: group.semester,
      shift: group.shift,
      students: group.students,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    };
  }

  async update(id: number, data: GroupDto): Promise<IGroup> {
    const response = await api.put<UpdateGroupResponse>(
      `${apiGroup}/${id}`,
      data,
    );
    const group = response.data.data;
    return {
      id: group.id,
      semester: group.semester,
      shift: group.shift,
      students: group.students,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    };
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
