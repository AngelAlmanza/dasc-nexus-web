import { IResponse } from "@/data/interfaces";
import {
  IBaseModel,
  IClassroom,
  IScheduleBlock,
  ISubject,
  ITeacher,
  ITerm,
} from "@/data/models";

export interface ITeacherSchedule extends IBaseModel {
  teacher: ITeacher;
  subject: ISubject;
  room: IClassroom;
  schedule_block: IScheduleBlock;
  term: ITerm;
  teacherName: string;
}

export interface TeacherScheduleResponseData {
  id: number;
  teacher: ITeacher;
  subject: ISubject;
  room: IClassroom;
  schedule_block: IScheduleBlock;
  term: ITerm;
  created_at: Date;
  updated_at: Date;
}

export interface GetTeacherSchedulesResponse
  extends IResponse<TeacherScheduleResponseData[]> {
  data: TeacherScheduleResponseData[];
  message: string;
  status: number;
}

export interface GetTeacherScheduleResponse
  extends IResponse<TeacherScheduleResponseData> {
  data: TeacherScheduleResponseData;
  message: string;
  status: number;
}

export interface CreateTeacherScheduleResponse
  extends IResponse<TeacherScheduleResponseData> {
  data: TeacherScheduleResponseData;
  message: string;
  status: number;
}

export interface UpdateTeacherScheduleResponse
  extends IResponse<TeacherScheduleResponseData> {
  data: TeacherScheduleResponseData;
  message: string;
  status: number;
}
