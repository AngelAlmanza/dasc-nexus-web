import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "@/core/store/slices";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },
});
