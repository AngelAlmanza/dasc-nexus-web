import {
  AuthSlice,
  BuildingSlice,
  ClassroomSlice,
  DashboardSlice,
  GroupSlice,
  MajorSlice,
  PlanSlice,
  ScheduleBlockSlice,
  SubjectSlice,
  TeacherScheduleSlice,
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
    scheduleBlocks: ScheduleBlockSlice.reducer,
    teacherSchedule: TeacherScheduleSlice.reducer,
    subject: SubjectSlice.reducer,
    studen: StudentSlice.reducer,
    teacher: TeacherSlice.reducer,
    term: TermSlice.reducer,
    ui: UISlice.reducer,
  },
});
