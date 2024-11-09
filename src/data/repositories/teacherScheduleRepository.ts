import { ApiAxiosInstance } from "@/core/lib/axios";
import { TeacherScheduleDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import {
  CreateTeacherScheduleResponse,
  GetTeacherScheduleResponse,
  GetTeacherSchedulesResponse,
  ITeacherSchedule,
  UpdateTeacherScheduleResponse,
} from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiTeacherSchedule = "/teacher-schedules";

export class TeacherScheduleRepository
  implements IRepository<ITeacherSchedule, TeacherScheduleDto>
{
  async getAll(): Promise<ITeacherSchedule[]> {
    const response =
      await api.get<GetTeacherSchedulesResponse>(apiTeacherSchedule);
    const teacherSchedules = response.data.data;
    return teacherSchedules.map((teacherSchedule) => ({
      id: teacherSchedule.id,
      teacher: teacherSchedule.teacher,
      subject: teacherSchedule.subject,
      room: teacherSchedule.room,
      schedule_block: teacherSchedule.schedule_block,
      term: teacherSchedule.term,
      createdAt: teacherSchedule.created_at,
      updatedAt: teacherSchedule.updated_at,
      teacherName: `${teacherSchedule.teacher.name} ${teacherSchedule.teacher.lastname}`,
    }));
  }

  async getById(id: number): Promise<ITeacherSchedule> {
    const response = await api.get<GetTeacherScheduleResponse>(
      `${apiTeacherSchedule}/${id}`,
    );
    const teacherSchedule = response.data.data;
    return {
      id: teacherSchedule.id,
      teacher: teacherSchedule.teacher,
      subject: teacherSchedule.subject,
      room: teacherSchedule.room,
      schedule_block: teacherSchedule.schedule_block,
      term: teacherSchedule.term,
      createdAt: teacherSchedule.created_at,
      updatedAt: teacherSchedule.updated_at,
      teacherName: `${teacherSchedule.teacher.name} ${teacherSchedule.teacher.lastname}`,
    };
  }

  async create(data: TeacherScheduleDto): Promise<ITeacherSchedule> {
    const response = await api.post<CreateTeacherScheduleResponse>(
      apiTeacherSchedule,
      data,
    );
    const teacherSchedule = response.data.data;
    return {
      id: teacherSchedule.id,
      teacher: teacherSchedule.teacher,
      subject: teacherSchedule.subject,
      room: teacherSchedule.room,
      schedule_block: teacherSchedule.schedule_block,
      term: teacherSchedule.term,
      createdAt: teacherSchedule.created_at,
      updatedAt: teacherSchedule.updated_at,
      teacherName: `${teacherSchedule.teacher.name} ${teacherSchedule.teacher.lastname}`,
    };
  }

  async update(
    id: number,
    data: TeacherScheduleDto,
  ): Promise<ITeacherSchedule> {
    const response = await api.put<UpdateTeacherScheduleResponse>(
      `${apiTeacherSchedule}/${id}`,
      data,
    );
    const teacherSchedule = response.data.data;
    return {
      id: teacherSchedule.id,
      teacher: teacherSchedule.teacher,
      subject: teacherSchedule.subject,
      room: teacherSchedule.room,
      schedule_block: teacherSchedule.schedule_block,
      term: teacherSchedule.term,
      createdAt: teacherSchedule.created_at,
      updatedAt: teacherSchedule.updated_at,
      teacherName: `${teacherSchedule.teacher.name} ${teacherSchedule.teacher.lastname}`,
    };
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiTeacherSchedule}/${id}`);
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
