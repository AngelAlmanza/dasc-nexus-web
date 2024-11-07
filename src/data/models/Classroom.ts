import { RoomTypes } from "@/core/enums";
import { IResponse } from "@/data/interfaces";
import { IBaseModel } from "@/data/models";

export interface IClassroom extends IBaseModel {
  name: string;
  long_desc: string;
  capacity: number;
  floor: number;
  building: number;
  type: RoomTypes;
}

export interface ClassroomResponseData {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  long_desc: string;
  capacity: number;
  floor: number;
  building: number;
  type: RoomTypes;
  deleted_at: null;
}

export interface GetClassroomsResponse
  extends IResponse<ClassroomResponseData[]> {
  data: ClassroomResponseData[];
  message: string;
  status: number;
}

export interface GetClassroomResponse extends IResponse<ClassroomResponseData> {
  data: ClassroomResponseData;
  message: string;
  status: number;
}

export interface CreateClassroomResponse
  extends IResponse<ClassroomResponseData> {
  data: ClassroomResponseData;
  message: string;
  status: number;
}

export interface UpdateClassroomResponse
  extends IResponse<ClassroomResponseData> {
  data: ClassroomResponseData;
  message: string;
  status: number;
}
