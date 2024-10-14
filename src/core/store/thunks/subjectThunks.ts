import { SubjectDto } from "@/data/dto";
import { SubjectRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const subjectRepository = new SubjectRepository();

const getSubjects = createAsyncThunk(
  "subject/getSubjects",
  async (_, thunkAPI) => {
    try {
      const response = await subjectRepository.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const getSubjectById = createAsyncThunk(
  "subject/getSubjectById",
  async (id: number, thunkAPI) => {
    try {
      const response = await subjectRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createSubject = createAsyncThunk(
  "subject/createSubject",
  async (data: SubjectDto, thunkAPI) => {
    try {
      const response = await subjectRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updateSubject = createAsyncThunk(
  "subject/updateSubject",
  async ({ id, data }: { id: number; data: SubjectDto }, thunkAPI) => {
    try {
      const response = await subjectRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteSubject = createAsyncThunk(
  "subject/deleteSubject",
  async (id: number, thunkAPI) => {
    try {
      const response = await subjectRepository.delete(id);
      if (response) {
        return id;
      } else {
        return thunkAPI.rejectWithValue("No se pudo eliminar la materia");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export {
  createSubject,
  deleteSubject,
  getSubjectById,
  getSubjects,
  updateSubject,
};
