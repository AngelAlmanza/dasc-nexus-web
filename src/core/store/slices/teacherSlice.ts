import { getTeachers } from "@/core/store/thunks";
import { Teacher } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface TeacherState {
  teachers: Teacher[];
  isLoading: boolean;
}

const initialState: TeacherState = {
  teachers: [],
  isLoading: false,
};

export const TeacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setTeachers: (state, action) => {
      state.teachers = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTeachers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeachers.fulfilled, (state, action) => {
      state.teachers = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTeachers.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setTeachers } = TeacherSlice.actions;
