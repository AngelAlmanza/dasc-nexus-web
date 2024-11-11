import { ApiAxiosInstance } from "@/core/lib/axios";
import { StudentDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import {
  CreateStudentResponse,
  GetStudentResponse,
  GetStudentsResponse,
  IStudent,
  UpdateStudentResponse,
} from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiStudent = "/students";

export class StudentRepository implements IRepository<IStudent, StudentDto> {
  async getAll(): Promise<IStudent[]> {
    const response = await api.get<GetStudentsResponse>(apiStudent);
    const students = response.data.data;
    return students.map((student) => ({
      id: student.id,
      name: student.name,
      lastname: student.lastname,
      email: student.email,
      phone: student.phone,
      createdAt: student.created_at,
      updatedAt: student.updated_at,
    }));
  }

  async getById(id: number): Promise<IStudent> {
    const response = await api.get<GetStudentResponse>(`${apiStudent}/${id}`);
    const student = response.data.data;
    return {
        id: student.id,
        name: student.name,
        lastname: student.lastname,
        email: student.email,
        phone: student.phone,
        createdAt: student.created_at,
        updatedAt: student.updated_at,
    };
  }

  async create(data: StudentDto): Promise<IStudent> {
    const response = await api.post<CreateStudentResponse>(apiStudent, data);
    const student = response.data.data;
    return {
        id: student.id,
        name: student.name,
        lastname: student.lastname,
        email: student.email,
        phone: student.phone,
        createdAt: student.created_at,
        updatedAt: student.updated_at,
    };
  }

  async update(id: number, data: StudentDto): Promise<IStudent> {
    const response = await api.put<UpdateStudentResponse>(
      `${apiStudent}/${id}`,
      data,
    );
    const student = response.data.data;
    return {
        id: student.id,
        name: student.name,
        lastname: student.lastname,
        email: student.email,
        phone: student.phone,
        createdAt: student.created_at,
        updatedAt: student.updated_at,
    };
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiStudent}/${id}`);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
