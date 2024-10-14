import { ScheduleDto } from "@/data/dto";
import { ScheduleRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const scheduleRepository = new ScheduleRepository();

const getSchedules = createAsyncThunk(
  "schedule/getSchedules",
  async (_, thunkAPI) => {
    try {
      const response = await scheduleRepository.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const getScheduleById = createAsyncThunk(
  "schedule/getScheduleById",
  async (id: number, thunkAPI) => {
    try {
      const response = await scheduleRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createSchedule = createAsyncThunk(
  "schedule/createSchedule",
  async (data: ScheduleDto, thunkAPI) => {
    try {
      const response = await scheduleRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updateSchedule = createAsyncThunk(
  "schedule/updateSchedule",
  async ({ id, data }: { id: number; data: ScheduleDto }, thunkAPI) => {
    try {
      const response = await scheduleRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteSchedule = createAsyncThunk(
  "schedule/deleteSchedule",
  async (id: number, thunkAPI) => {
    try {
      const response = await scheduleRepository.delete(id);
      if (response) {
        return id;
      } else {
        return thunkAPI.rejectWithValue("No se pudo eliminar el horario");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export {
  getSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
};
