import { getClassrooms } from "@/core/store/thunks";
import { Classroom } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface ClassroomState {
  classrooms: Classroom[];
  isLoading: boolean;
}

const initialState: ClassroomState = {
  classrooms: [],
  isLoading: false,
};

export const ClassroomSlice = createSlice({
  name: "classroom",
  initialState,
  reducers: {
    setClassrooms: (state, action) => {
      state.classrooms = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getClassrooms.fulfilled, (state, action) => {
      state.classrooms = action.payload;
    });
    builder.addCase(getClassrooms.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getClassrooms.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { setClassrooms } = ClassroomSlice.actions;
