import { CareerDto } from "@/data/dto";
import { CareerRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const majorsRepository = new CareerRepository();

const getMajors = createAsyncThunk("major/getMajors", async (_, thunkAPI) => {
  try {
    const response = await majorsRepository.getAll();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getMajorById = createAsyncThunk(
  "major/getMajorById",
  async (id: number, thunkAPI) => {
    try {
      const response = await majorsRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createMajor = createAsyncThunk(
  "major/createMajor",
  async (data: CareerDto, thunkAPI) => {
    try {
      const response = await majorsRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updateMajor = createAsyncThunk(
  "major/updateMajor",
  async ({ id, data }: { id: number; data: CareerDto }, thunkAPI) => {
    try {
      const response = await majorsRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteMajor = createAsyncThunk(
  "major/deleteMajor",
  async (id: number, thunkAPI) => {
    try {
      const response = await majorsRepository.delete(id);
      if (response) {
        return id;
      } else {
        return thunkAPI.rejectWithValue("No se pudo eliminar la carrera");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { createMajor, deleteMajor, getMajorById, getMajors, updateMajor };
