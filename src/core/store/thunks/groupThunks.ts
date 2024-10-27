import { GroupDto } from "@/data/dto";
import { GroupRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const groupsRepository = new GroupRepository();

const getGroups = createAsyncThunk("group/getGroups", async (_, thunkAPI) => {
  try {
    const response = await groupsRepository.getAll();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getGroupById = createAsyncThunk(
  "group/getGroupById",
  async (id: number, thunkAPI) => {
    try {
      const response = await groupsRepository.getById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const createGroup = createAsyncThunk(
  "group/createGroup",
  async (data: GroupDto, thunkAPI) => {
    try {
      const response = await groupsRepository.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const updateGroup = createAsyncThunk(
  "group/updateGroup",
  async ({ id, data }: { id: number; data: GroupDto }, thunkAPI) => {
    try {
      const response = await groupsRepository.update(id, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteGroup = createAsyncThunk(
  "group/deleteGroup",
  async (id: number, thunkAPI) => {
    try {
      const response = await groupsRepository.delete(id);
      if (response) {
        return id;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { createGroup, deleteGroup, getGroupById, getGroups, updateGroup };
