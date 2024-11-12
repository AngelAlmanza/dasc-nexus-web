import { StudentDto } from "@/data/dto";
import { StudentRepository } from "@/data/repositories/studentRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";

const studentRepository = new StudentRepository();

const getStudents = createAsyncThunk(
  "student/getStudent",
  async (_, thunkAPI) => {
    try {
      const response = await studentRepository.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const getStudentById = createAsyncThunk(
  "student/getStudentById",
  async (id: number, thunkAPI) => {
    try {
      const response = await studentRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createStudent = createAsyncThunk(
  "student/createStudent",
  async (data: StudentDto, thunkAPI) => {
    try {
      const response = await studentRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updateStudent = createAsyncThunk(
  "student/updateStudent",
  async ({ id, data }: { id: number; data: StudentDto }, thunkAPI) => {
    try {
      const response = await studentRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteStudent = createAsyncThunk(
  "student/deleteStudent",
  async (id: number, thunkAPI) => {
    try {
      const response = await studentRepository.delete(id);
      if (response) {
        return id;
      } else {
        return thunkAPI.rejectWithValue("No se pudo eliminar el alumno");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export {
  createStudent,
  deleteStudent,
  getStudentById,
  getStudents,
  updateStudent,
};
