import { IResponse } from "@/data/interfaces";
import { IBaseModel } from "@/data/models";

export interface ICareer extends IBaseModel {
  name: string;
}

export interface CareerResponseData {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  deleted_at: null;
}

export interface GetCareersResponse extends IResponse<CareerResponseData[]> {
  data: CareerResponseData[];
  status: number;
  message: string;
}

export interface GetCareerResponse extends IResponse<CareerResponseData> {
  data: CareerResponseData;
  status: number;
  message: string;
}

export interface CreateCareerResponse extends IResponse<CareerResponseData> {
  data: CareerResponseData;
  status: number;
  message: string;
}

export interface UpdateCareerResponse extends IResponse<CareerResponseData> {
  data: CareerResponseData;
  status: number;
  message: string;
}
