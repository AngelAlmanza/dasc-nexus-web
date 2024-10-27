import {
  AuthSlice,
  BuildingSlice,
  ClassroomSlice,
  GroupSlice,
  MajorSlice,
  PlanSlice,
  ScheduleSlice,
  SubjectSlice,
  TeacherSlice,
  TermSlice,
  UISlice,
} from "@/core/store/slices";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    building: BuildingSlice.reducer,
    classroom: ClassroomSlice.reducer,
    group: GroupSlice.reducer,
    major: MajorSlice.reducer,
    plan: PlanSlice.reducer,
    schedule: ScheduleSlice.reducer,
    subject: SubjectSlice.reducer,
    teacher: TeacherSlice.reducer,
    term: TermSlice.reducer,
    ui: UISlice.reducer,
  },
});
