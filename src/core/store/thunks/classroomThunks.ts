import { ClassroomDto } from "@/data/dto";
import { ClassroomRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const classroomRepository = new ClassroomRepository();

const getClassrooms = createAsyncThunk(
  "classroom/getClassrooms",
  async (_, thunkAPI) => {
    try {
      const response = await classroomRepository.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const getClassroomById = createAsyncThunk(
  "classroom/getClassroomById",
  async (id: number, thunkAPI) => {
    try {
      const response = await classroomRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createClassroom = createAsyncThunk(
  "classroom/createClassroom",
  async (data: ClassroomDto, thunkAPI) => {
    try {
      const response = await classroomRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updateClassroom = createAsyncThunk(
  "classroom/updateClassroom",
  async ({ id, data }: { id: number; data: ClassroomDto }, thunkAPI) => {
    try {
      const response = await classroomRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteClassroom = createAsyncThunk(
  "classroom/deleteClassroom",
  async (id: number, thunkAPI) => {
    try {
      const response = await classroomRepository.delete(id);
      if (response) {
        return id;
      } else {
        return thunkAPI.rejectWithValue("No se pudo eliminar el salón");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export {
  createClassroom,
  deleteClassroom,
  getClassroomById,
  getClassrooms,
  updateClassroom,
};
