import { DashboardRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const dashboardRepository = new DashboardRepository();

const getDashboardInfo = createAsyncThunk(
  "dashboard/getDashboardInfo",
  async (_, thunkAPI) => {
    try {
      const response = await dashboardRepository.getDashboardInfo();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { getDashboardInfo };
