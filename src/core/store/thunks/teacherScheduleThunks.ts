import { TeacherScheduleDto } from "@/data/dto";
import { TeacherScheduleRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const teacherScheduleRepository = new TeacherScheduleRepository();

const getTeacherSchedules = createAsyncThunk(
  "teacherSchedule/getTeacherSchedules",
  async (_, thunkAPI) => {
    try {
      const response = await teacherScheduleRepository.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const getTeacherScheduleById = createAsyncThunk(
  "teacherSchedule/getTeacherScheduleById",
  async (id: number, thunkAPI) => {
    try {
      const response = await teacherScheduleRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createTeacherSchedule = createAsyncThunk(
  "teacherSchedule/createTeacherSchedule",
  async (data: TeacherScheduleDto, thunkAPI) => {
    try {
      const response = await teacherScheduleRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updateTeacherSchedule = createAsyncThunk(
  "teacherSchedule/updateTeacherSchedule",
  async ({ id, data }: { id: number; data: TeacherScheduleDto }, thunkAPI) => {
    try {
      const response = await teacherScheduleRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteTeacherSchedule = createAsyncThunk(
  "teacherSchedule/deleteTeacherSchedule",
  async (id: number, thunkAPI) => {
    try {
      const response = await teacherScheduleRepository.delete(id);
      if (response) {
        return id;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export {
  createTeacherSchedule,
  deleteTeacherSchedule,
  getTeacherScheduleById,
  getTeacherSchedules,
  updateTeacherSchedule,
};
