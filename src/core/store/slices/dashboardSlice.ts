import { getDashboardInfo } from "@/core/store/thunks";
import { createSlice } from "@reduxjs/toolkit";

interface DashboardState {
  teacherCount: number;
  careerCount: number;
  subjectCount: number;
  groupCount: number;
  studentCount: number;
  termCount: number;
  classroomCount: number;
  isLoading: boolean;
  dashboardMessage: string;
}

const initialState: DashboardState = {
  teacherCount: 0,
  careerCount: 0,
  subjectCount: 0,
  groupCount: 0,
  studentCount: 0,
  termCount: 0,
  classroomCount: 0,
  isLoading: false,
  dashboardMessage: "",
};

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setTeacherCount: (state, action) => {
      state.teacherCount = action.payload;
    },
    setCareerCount: (state, action) => {
      state.careerCount = action.payload;
    },
    setSubjectCount: (state, action) => {
      state.subjectCount = action.payload;
    },
    setGroupCount: (state, action) => {
      state.groupCount = action.payload;
    },
    setStudentCount: (state, action) => {
      state.studentCount = action.payload;
    },
    setTermCount: (state, action) => {
      state.termCount = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setDashboardMessage: (state, action) => {
      state.dashboardMessage = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getDashboardInfo.fulfilled, (state, action) => {
      state.teacherCount = action.payload.teacherCount;
      state.careerCount = action.payload.careerCount;
      state.subjectCount = action.payload.subjectCount;
      state.groupCount = action.payload.groupCount;
      state.studentCount = action.payload.studentCount;
      state.termCount = action.payload.termCount;
      state.classroomCount = action.payload.roomsCount;
      state.isLoading = false;
    });
    builder.addCase(getDashboardInfo.rejected, (state) => {
      state.teacherCount = 0;
      state.careerCount = 0;
      state.subjectCount = 0;
      state.groupCount = 0;
      state.studentCount = 0;
      state.termCount = 0;
      state.isLoading = false;
      state.dashboardMessage =
        "Ha ocurrido un error al obtener la información del dashboard";
    });
    builder.addCase(getDashboardInfo.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const {
  setTeacherCount,
  setCareerCount,
  setSubjectCount,
  setGroupCount,
  setStudentCount,
  setTermCount,
  setDashboardMessage,
} = DashboardSlice.actions;
