import { IResponse } from "@/data/interfaces";
import { IBaseModel } from "@/data/models";

export interface ISubject extends IBaseModel {
  name: string;
  key: string;
  credits: number;
  theory_hours: number;
  practice_hours: number;
  total_hours: number;
}

export interface SubjectResponseData {
  id: number;
  name: string;
  key: string;
  online: number;
  credits: number;
  theory_hours: number;
  practice_hours: number;
  total_hours: number;
}

export interface GetSubjectsResponse extends IResponse<SubjectResponseData[]> {
  data: SubjectResponseData[];
  status: number;
  message: string;
}

export interface GetSubjectResponse extends IResponse<SubjectResponseData> {
  data: SubjectResponseData;
  status: number;
  message: string;
}

export interface CreateSubjectResponse extends IResponse<SubjectResponseData> {
  data: SubjectResponseData;
  status: number;
  message: string;
}

export interface UpdateSubjectResponse extends IResponse<SubjectResponseData> {
  data: SubjectResponseData;
  status: number;
  message: string;
}
