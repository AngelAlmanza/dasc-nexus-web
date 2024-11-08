import { ScheduleBlockDto } from "@/data/dto";
import { ScheduleBlockRepository } from "@/data/repositories/scheduleBlockRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";

const scheduleBlockRepository = new ScheduleBlockRepository();

const getScheduleBlocks = createAsyncThunk(
  "scheduleBlock/getScheduleBlocks",
  async (_, thunkAPI) => {
    try {
      const response = await scheduleBlockRepository.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const getScheduleBlockById = createAsyncThunk(
  "scheduleBlock/getScheduleBlockById",
  async (id: number, thunkAPI) => {
    try {
      const response = await scheduleBlockRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createScheduleBlock = createAsyncThunk(
  "scheduleBlock/createScheduleBlock",
  async (data: ScheduleBlockDto, thunkAPI) => {
    try {
      const response = await scheduleBlockRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updateScheduleBlock = createAsyncThunk(
  "scheduleBlock/updateScheduleBlock",
  async ({ id, data }: { id: number; data: ScheduleBlockDto }, thunkAPI) => {
    try {
      const response = await scheduleBlockRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteScheduleBlock = createAsyncThunk(
  "scheduleBlock/deleteScheduleBlock",
  async (id: number, thunkAPI) => {
    try {
      const response = await scheduleBlockRepository.delete(id);
      if (response) {
        return id;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export {
  createScheduleBlock,
  deleteScheduleBlock,
  getScheduleBlockById,
  getScheduleBlocks,
  updateScheduleBlock,
};
