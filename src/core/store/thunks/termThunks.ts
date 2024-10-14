import { TermDto } from "@/data/dto";
import { TermRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const termRepository = new TermRepository();

const getTerms = createAsyncThunk("term/getTerms", async (_, thunkAPI) => {
  try {
    const response = await termRepository.getAll();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getTermById = createAsyncThunk(
  "term/getTermById",
  async (id: number, thunkAPI) => {
    try {
      const response = await termRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createTerm = createAsyncThunk(
  "term/createTerm",
  async (data: TermDto, thunkAPI) => {
    try {
      const response = await termRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updateTerm = createAsyncThunk(
  "term/updateTerm",
  async ({ id, data }: { id: number; data: TermDto }, thunkAPI) => {
    try {
      const response = await termRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteTerm = createAsyncThunk(
  "term/deleteTerm",
  async (id: number, thunkAPI) => {
    try {
      const response = await termRepository.delete(id);
      if (response) {
        return id;
      } else {
        return thunkAPI.rejectWithValue("No se pudo eliminar el término");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { getTerms, getTermById, createTerm, updateTerm, deleteTerm };
