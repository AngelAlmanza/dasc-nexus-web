import { ApiAxiosInstance } from "@/core/lib/axios";
import { SubjectDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import {
  CreateSubjectResponse,
  GetSubjectResponse,
  GetSubjectsResponse,
  ISubject,
  UpdateSubjectResponse,
} from "@/data/models";
import moment from "moment";

const api = ApiAxiosInstance.getInstance();
const apiSubject = "/subjects";

export class SubjectRepository implements IRepository<ISubject, SubjectDto> {
  async getAll(): Promise<ISubject[]> {
    const response = await api.get<GetSubjectsResponse>(apiSubject);
    const subjects = response.data.data;
    return subjects.map((subject) => ({
      id: subject.id,
      name: subject.name,
      key: subject.key,
      credits: subject.credits,
      theory_hours: subject.theory_hours,
      practice_hours: subject.practice_hours,
      total_hours: subject.total_hours,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    }));
  }

  async getById(id: number): Promise<ISubject> {
    const response = await api.get<GetSubjectResponse>(`${apiSubject}/${id}`);
    const subject = response.data.data;
    return {
      id: subject.id,
      name: subject.name,
      key: subject.key,
      credits: subject.credits,
      theory_hours: subject.theory_hours,
      practice_hours: subject.practice_hours,
      total_hours: subject.total_hours,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    };
  }

  async create(data: SubjectDto): Promise<ISubject> {
    const response = await api.post<CreateSubjectResponse>(apiSubject, data);
    const subject = response.data.data;
    return {
      id: subject.id,
      name: subject.name,
      key: subject.key,
      credits: subject.credits,
      theory_hours: subject.theory_hours,
      practice_hours: subject.practice_hours,
      total_hours: subject.total_hours,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    };
  }

  async update(id: number, data: SubjectDto): Promise<ISubject> {
    const response = await api.put<UpdateSubjectResponse>(
      `${apiSubject}/${id}`,
      data,
    );
    const subject = response.data.data;
    return {
      id: subject.id,
      name: subject.name,
      key: subject.key,
      credits: subject.credits,
      theory_hours: subject.theory_hours,
      practice_hours: subject.practice_hours,
      total_hours: subject.total_hours,
      createdAt: moment().format("YYYY-MM-DD"),
      updatedAt: moment().format("YYYY-MM-DD"),
    };
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
