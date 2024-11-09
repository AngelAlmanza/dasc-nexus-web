import { IResponse } from "@/data/interfaces";
import { IBaseModel } from "@/data/models";

export interface ITerm extends IBaseModel {
  init: Date;
  end: Date;
  active: number;
}

export interface TermResponseData {
  id: number;
  created_at: Date;
  updated_at: Date;
  init: Date;
  end: Date;
  active: number;
  deleted_at: null;
}

export interface GetTermsResponse extends IResponse<TermResponseData[]> {
  data: TermResponseData[];
  message: string;
  status: number;
}

export interface GetTermResponse extends IResponse<TermResponseData> {
  data: TermResponseData;
  message: string;
  status: number;
}

export interface CreateTermResponse extends IResponse<TermResponseData> {
  data: TermResponseData;
  message: string;
  status: number;
}

export interface UpdateTermResponse extends IResponse<TermResponseData> {
  data: TermResponseData;
  message: string;
  status: number;
}
