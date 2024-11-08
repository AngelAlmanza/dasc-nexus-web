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
    subject: SubjectSlice.reducer,
    teacherSchedule: TeacherScheduleSlice.reducer,
    teacher: TeacherSlice.reducer,
    term: TermSlice.reducer,
    ui: UISlice.reducer,
  },
});
