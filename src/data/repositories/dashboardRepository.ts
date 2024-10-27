import { ApiAxiosInstance } from "@/core/lib/axios";
import { IResponse } from "@/data/interfaces";

const api = ApiAxiosInstance.getInstance();
const apiDashboard = "/dashboard";

interface DashboardInfoReponse {
  teacherCount: number;
  careerCount: number;
  subjectCount: number;
  groupCount: number;
  studentCount: number;
  termCount: number;
  roomsCount: number;
}

export class DashboardRepository {
  async getDashboardInfo() {
    const response =
      await api.get<IResponse<DashboardInfoReponse>>(apiDashboard);
    return response.data.data;
  }
}
