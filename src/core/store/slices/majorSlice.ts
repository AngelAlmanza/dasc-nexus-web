import { getMajors } from "@/core/store/thunks";
import { Career } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface MajorState {
  majors: Career[];
  isLoading: boolean;
}

const initialState: MajorState = {
  majors: [],
  isLoading: false,
};

export const MajorSlice = createSlice({
  name: "major",
  initialState,
  reducers: {
    setMajors: (state, action) => {
      state.majors = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getMajors.fulfilled, (state, action) => {
      state.majors = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMajors.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getMajors.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { setMajors } = MajorSlice.actions;
