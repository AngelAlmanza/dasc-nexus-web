import { ApiAxiosInstance } from "@/core/lib/axios";
import { TeacherDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import {
  CreateTeacherResponse,
  GetTeacherResponse,
  GetTeachersResponse,
  ITeacher,
  UpdateTeacherResponse,
} from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiTeacher = "/teachers";

export class TeacherRepository implements IRepository<ITeacher, TeacherDto> {
  async getAll(): Promise<ITeacher[]> {
    const response = await api.get<GetTeachersResponse>(apiTeacher);
    const teachers = response.data.data;
    return teachers.map((teacher) => ({
      id: teacher.id,
      name: teacher.name,
      lastname: teacher.lastname,
      email: teacher.email,
      phone: teacher.phone,
      address: teacher.address,
      birthday: teacher.birthday,
      createdAt: teacher.created_at,
      updatedAt: teacher.updated_at,
    }));
  }

  async getById(id: number): Promise<ITeacher> {
    const response = await api.get<GetTeacherResponse>(`${apiTeacher}/${id}`);
    const teacher = response.data.data;
    return {
      id: teacher.id,
      name: teacher.name,
      lastname: teacher.lastname,
      email: teacher.email,
      phone: teacher.phone,
      address: teacher.address,
      birthday: teacher.birthday,
      createdAt: teacher.created_at,
      updatedAt: teacher.updated_at,
    };
  }

  async create(data: TeacherDto): Promise<ITeacher> {
    const response = await api.post<CreateTeacherResponse>(apiTeacher, data);
    const teacher = response.data.data;
    return {
      id: teacher.id,
      name: teacher.name,
      lastname: teacher.lastname,
      email: teacher.email,
      phone: teacher.phone,
      address: teacher.address,
      birthday: teacher.birthday,
      createdAt: teacher.created_at,
      updatedAt: teacher.updated_at,
    };
  }

  async update(id: number, data: TeacherDto): Promise<ITeacher> {
    const response = await api.put<UpdateTeacherResponse>(
      `${apiTeacher}/${id}`,
      data,
    );
    const teacher = response.data.data;
    return {
      id: teacher.id,
      name: teacher.name,
      lastname: teacher.lastname,
      email: teacher.email,
      phone: teacher.phone,
      address: teacher.address,
      birthday: teacher.birthday,
      createdAt: teacher.created_at,
      updatedAt: teacher.updated_at,
    };
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
