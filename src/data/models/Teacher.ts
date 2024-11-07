import { IResponse } from "@/data/interfaces";
import { IBaseModel } from "@/data/models";

export interface ITeacher extends IBaseModel {
  name: string;
  lastname: string;
  birthday: Date;
  address: string;
  phone: string;
  email: string;
}

export interface TeacherResponseData {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  lastname: string;
  birthday: Date;
  email: string;
  phone: string;
  address: string;
  deleted_at: null;
}

export interface GetTeachersResponse extends IResponse<TeacherResponseData[]> {
  data: TeacherResponseData[];
  message: string;
  status: number;
}

export interface GetTeacherResponse extends IResponse<TeacherResponseData> {
  data: TeacherResponseData;
  message: string;
  status: number;
}

export interface CreateTeacherResponse extends IResponse<TeacherResponseData> {
  data: TeacherResponseData;
  message: string;
  status: number;
}

export interface UpdateTeacherResponse extends IResponse<TeacherResponseData> {
  data: TeacherResponseData;
  message: string;
  status: number;
}
