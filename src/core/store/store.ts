import {
  AuthSlice,
  ClassroomSlice,
  MajorSlice,
  SubjectSlice,
  UISlice,
} from "@/core/store/slices";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    ui: UISlice.reducer,
    classroom: ClassroomSlice.reducer,
    major: MajorSlice.reducer,
    subject: SubjectSlice.reducer,
  },
});
