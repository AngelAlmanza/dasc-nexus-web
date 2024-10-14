import { PlanDto } from "@/data/dto";
import { PlanRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const planRepository = new PlanRepository();

const getPlans = createAsyncThunk("plan/getPlans", async (_, thunkAPI) => {
  try {
    const response = await planRepository.getAll();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getPlanById = createAsyncThunk(
  "plan/getPlanById",
  async (id: number, thunkAPI) => {
    try {
      const response = await planRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createPlan = createAsyncThunk(
  "plan/createPlan",
  async (data: PlanDto, thunkAPI) => {
    try {
      const response = await planRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updatePlan = createAsyncThunk(
  "plan/updatePlan",
  async ({ id, data }: { id: number; data: PlanDto }, thunkAPI) => {
    try {
      const response = await planRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deletePlan = createAsyncThunk(
  "plan/deletePlan",
  async (id: number, thunkAPI) => {
    try {
      const response = await planRepository.delete(id);
      if (response) {
        return id;
      } else {
        return thunkAPI.rejectWithValue("Error al eliminar el plan");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { createPlan, deletePlan, getPlanById, getPlans, updatePlan };
