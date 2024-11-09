import {
  AuthSlice,
  BuildingSlice,
  ClassroomSlice,
  DashboardSlice,
  GroupSlice,
  MajorSlice,
  PlanSlice,
  ScheduleSlice,
  SubjectSlice,
  TeacherSlice,
  TermSlice,
  UISlice,
} from "@/core/store/slices";
import { StudentSlice } from "./slices/studentSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    building: BuildingSlice.reducer,
    classroom: ClassroomSlice.reducer,
    dashboard: DashboardSlice.reducer,
    group: GroupSlice.reducer,
    major: MajorSlice.reducer,
    plan: PlanSlice.reducer,
    schedule: ScheduleSlice.reducer,
    subject: SubjectSlice.reducer,
    student: StudentSlice.reducer,
    teacher: TeacherSlice.reducer,
    term: TermSlice.reducer,
    ui: UISlice.reducer,
  },
});
