import { IResponse } from "@/data/interfaces";
import { IBaseModel, ICareer } from "@/data/models";

export interface IPlan extends IBaseModel {
  name: string;
  start: string | Date;
  end: string | Date;
  career: ICareer;
}

export interface PlanResponseData {
  id: number;
  career: ICareer;
  name: string;
  init: Date | string;
  end: Date | string;
}

export interface GetPlansResponse extends IResponse<PlanResponseData[]> {
  data: PlanResponseData[];
  message: string;
  status: number;
}

export interface GetPlanResponse extends IResponse<PlanResponseData> {
  data: PlanResponseData;
  message: string;
  status: number;
}

export interface CreatePlanResponse extends IResponse<PlanResponseData> {
  data: PlanResponseData;
  message: string;
  status: number;
}

export interface UpdatePlanResponse extends IResponse<PlanResponseData> {
  data: PlanResponseData;
  message: string;
  status: number;
}
