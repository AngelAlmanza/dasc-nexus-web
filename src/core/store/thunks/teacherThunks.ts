import { TeacherDto } from "@/data/dto";
import { TeacherRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const teacherRepository = new TeacherRepository();

const getTeachers = createAsyncThunk(
  "teacher/getTeachers",
  async (_, thunkAPI) => {
    try {
      const response = await teacherRepository.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const getTeacherById = createAsyncThunk(
  "teacher/getTeacherById",
  async (id: number, thunkAPI) => {
    try {
      const response = await teacherRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createTeacher = createAsyncThunk(
  "teacher/createTeacher",
  async (data: TeacherDto, thunkAPI) => {
    try {
      const response = await teacherRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updateTeacher = createAsyncThunk(
  "teacher/updateTeacher",
  async ({ id, data }: { id: number; data: TeacherDto }, thunkAPI) => {
    try {
      const response = await teacherRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteTeacher = createAsyncThunk(
  "teacher/deleteTeacher",
  async (id: number, thunkAPI) => {
    try {
      const response = await teacherRepository.delete(id);
      if (response) {
        return id;
      } else {
        return thunkAPI.rejectWithValue("No se pudo eliminar el profesor");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export {
  getTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
