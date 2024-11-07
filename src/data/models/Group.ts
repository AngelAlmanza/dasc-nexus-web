import { Shifts } from "@/core/enums";
import { IResponse } from "@/data/interfaces";
import { IBaseModel } from "@/data/models";

export interface IGroup extends IBaseModel {
  id: number;
  semester: number;
  shift: Shifts;
  students: number[];
}

export interface GroupResponse {
  id: number;
  semester: number;
  shift: Shifts;
  students: number[];
}

export interface GetGroupsResponse extends IResponse<GroupResponse[]> {
  data: GroupResponse[];
  message: string;
  status: number;
}

export interface GetGroupResponse extends IResponse<GroupResponse> {
  data: GroupResponse;
  message: string;
  status: number;
}

export interface CreateGroupResponse extends IResponse<GroupResponse> {
  data: GroupResponse;
  message: string;
  status: number;
}

export interface UpdateGroupResponse extends IResponse<GroupResponse> {
  data: GroupResponse;
  message: string;
  status: number;
}
