import { getSubjects } from "@/core/store/thunks";
import { Subject } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface SubjectState {
  subjects: Subject[];
  isLoading: boolean;
}

const initialState: SubjectState = {
  subjects: [],
  isLoading: false,
};

export const SubjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    setSubjects: (state, action) => {
      state.subjects = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSubjects.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSubjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.subjects = action.payload;
    });
    builder.addCase(getSubjects.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setSubjects } = SubjectSlice.actions;
