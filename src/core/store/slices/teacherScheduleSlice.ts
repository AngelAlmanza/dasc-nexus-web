import {
  createTeacherSchedule,
  deleteTeacherSchedule,
  getTeacherSchedules,
  updateTeacherSchedule,
  getTeacherScheduleById,
} from "@/core/store/thunks";
import { ITeacherSchedule } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface TeacherScheduleState {
  teacherSchedules: ITeacherSchedule[];
  selectedTeacherSchedule?: ITeacherSchedule;
  isLoading: boolean;
  teacherScheduleMessage: string;
}

const initialState: TeacherScheduleState = {
  teacherSchedules: [],
  isLoading: false,
  teacherScheduleMessage: "",
};

export const TeacherScheduleSlice = createSlice({
  name: "teacherSchedule",
  initialState,
  reducers: {
    setTeacherSchedules: (state, action) => {
      state.teacherSchedules = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setTeacherScheduleMessage: (state, action) => {
      state.teacherScheduleMessage = action.payload;
    },
    setSelectedTeacherSchedule: (state, action) => {
      state.selectedTeacherSchedule = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getTeacherSchedules.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeacherSchedules.fulfilled, (state, action) => {
      state.teacherSchedules = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTeacherSchedules.rejected, (state) => {
      state.isLoading = false;
      state.teacherScheduleMessage =
        "Ha ocurrido un error al obtener los horarios de los profesores";
    });
    builder.addCase(createTeacherSchedule.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTeacherSchedule.fulfilled, (state, action) => {
      state.teacherSchedules.push(action.payload);
      state.isLoading = false;
      state.teacherScheduleMessage =
        "Se ha creado el horario del profesor correctamente";
    });
    builder.addCase(createTeacherSchedule.rejected, (state) => {
      state.isLoading = false;
      state.teacherScheduleMessage =
        "Ha ocurrido un error al crear el horario del profesor";
    });
    builder.addCase(updateTeacherSchedule.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTeacherSchedule.fulfilled, (state, action) => {
      state.teacherSchedules = state.teacherSchedules.map((teacherSchedule) =>
        teacherSchedule.id === action.payload.id
          ? action.payload
          : teacherSchedule,
      );
      state.isLoading = false;
      state.teacherScheduleMessage =
        "Se ha actualizado el horario del profesor correctamente";
    });
    builder.addCase(updateTeacherSchedule.rejected, (state) => {
      state.isLoading = false;
      state.teacherScheduleMessage =
        "Ha ocurrido un error al actualizar el horario del profesor";
    });
    builder.addCase(deleteTeacherSchedule.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTeacherSchedule.fulfilled, (state, action) => {
      state.teacherSchedules = state.teacherSchedules.filter(
        (teacherSchedule) => teacherSchedule.id !== action.payload,
      );
      state.isLoading = false;
      state.teacherScheduleMessage =
        "Se ha eliminado el horario del profesor correctamente";
    });
    builder.addCase(deleteTeacherSchedule.rejected, (state) => {
      state.isLoading = false;
      state.teacherScheduleMessage =
        "Ha ocurrido un error al eliminar el horario del profesor";
    });
    builder.addCase(getTeacherScheduleById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeacherScheduleById.fulfilled, (state, action) => {
      state.selectedTeacherSchedule = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTeacherScheduleById.rejected, (state) => {
      state.isLoading = false;
      state.teacherScheduleMessage =
        "Ha ocurrido un error al obtener el horario del profesor";
    });
  },
});

export const {
  setTeacherSchedules,
  setTeacherScheduleMessage,
  setSelectedTeacherSchedule,
} = TeacherScheduleSlice.actions;
