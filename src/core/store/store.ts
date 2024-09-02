import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice, UISlice } from "@/core/store/slices";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    ui: UISlice.reducer,
  },
});
