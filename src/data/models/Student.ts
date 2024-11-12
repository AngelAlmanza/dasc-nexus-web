import { IResponse } from "@/data/interfaces";
import { IBaseModel } from "@/data/models";

export interface IStudent extends IBaseModel {
  name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface StudentResponseData {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  deleted_at: null;
}

export interface GetStudentsResponse extends IResponse<StudentResponseData[]> {
  data: StudentResponseData[];
  message: string;
  status: number;
}

export interface GetStudentResponse extends IResponse<StudentResponseData> {
  data: StudentResponseData;
  message: string;
  status: number;
}

export interface CreateStudentResponse extends IResponse<StudentResponseData> {
  data: StudentResponseData;
  message: string;
  status: number;
}

export interface UpdateStudentResponse extends IResponse<StudentResponseData> {
  data: StudentResponseData;
  message: string;
  status: number;
}
