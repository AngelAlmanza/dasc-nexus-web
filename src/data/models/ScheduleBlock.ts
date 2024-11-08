import { DayEn } from "@/core/enums";
import { IResponse } from "@/data/interfaces";
import { IBaseModel } from "@/data/models";

export interface IScheduleBlock extends IBaseModel {
  day: DayEn;
  start_time: string;
  end_time: string;
}

export interface ScheduleBlocksResponseData {
  id: number;
  day: DayEn;
  start_time: string;
  end_time: string;
  created_at: Date;
  updated_at: Date;
}

export interface GetScheduleBlocksResponse
  extends IResponse<ScheduleBlocksResponseData[]> {
  data: ScheduleBlocksResponseData[];
  message: string;
  status: number;
}

export interface GetScheduleBlockResponse
  extends IResponse<ScheduleBlocksResponseData> {
  data: ScheduleBlocksResponseData;
  message: string;
  status: number;
}

export interface CreateScheduleBlockResponse
  extends IResponse<ScheduleBlocksResponseData> {
  data: ScheduleBlocksResponseData;
  message: string;
  status: number;
}

export interface UpdateScheduleBlockResponse
  extends IResponse<ScheduleBlocksResponseData> {
  data: ScheduleBlocksResponseData;
  message: string;
  status: number;
}
