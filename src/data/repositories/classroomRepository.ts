import { ApiAxiosInstance } from "@/core/lib/axios";
import { ClassroomDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import {
  CreateClassroomResponse,
  GetClassroomResponse,
  GetClassroomsResponse,
  IClassroom,
  UpdateClassroomResponse,
} from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiClassroom = "/rooms";

export class ClassroomRepository
  implements IRepository<IClassroom, ClassroomDto>
{
  async getAll(): Promise<IClassroom[]> {
    const response = await api.get<GetClassroomsResponse>(apiClassroom);
    const classrooms = response.data.data;
    return classrooms.map((classroom) => ({
      id: classroom.id,
      name: classroom.name,
      building: classroom.building,
      floor: classroom.floor,
      long_desc: classroom.long_desc,
      capacity: classroom.capacity,
      type: classroom.type,
      createdAt: classroom.created_at,
      updatedAt: classroom.updated_at,
    }));
  }

  async getById(id: number): Promise<IClassroom> {
    const response = await api.get<GetClassroomResponse>(
      `${apiClassroom}/${id}`,
    );
    const classroom = response.data.data;
    return {
      id: classroom.id,
      name: classroom.name,
      building: classroom.building,
      floor: classroom.floor,
      long_desc: classroom.long_desc,
      capacity: classroom.capacity,
      type: classroom.type,
      createdAt: classroom.created_at,
      updatedAt: classroom.updated_at,
    };
  }

  async create(data: ClassroomDto): Promise<IClassroom> {
    const response = await api.post<CreateClassroomResponse>(
      apiClassroom,
      data,
    );
    const classroom = response.data.data;
    return {
      id: classroom.id,
      name: classroom.name,
      building: classroom.building,
      floor: classroom.floor,
      long_desc: classroom.long_desc,
      capacity: classroom.capacity,
      type: classroom.type,
      createdAt: classroom.created_at,
      updatedAt: classroom.updated_at,
    };
  }

  async update(id: number, data: ClassroomDto): Promise<IClassroom> {
    const response = await api.put<UpdateClassroomResponse>(
      `${apiClassroom}/${id}`,
      data,
    );
    const classroom = response.data.data;
    return {
      id: classroom.id,
      name: classroom.name,
      building: classroom.building,
      floor: classroom.floor,
      long_desc: classroom.long_desc,
      capacity: classroom.capacity,
      type: classroom.type,
      createdAt: classroom.created_at,
      updatedAt: classroom.updated_at,
    };
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
