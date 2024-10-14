import {
  createSchedule,
  deleteSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
} from "@/core/store/thunks";
import { Schedule } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface ScheduleState {
  schedules: Schedule[];
  selectedSchedule?: Schedule;
  isLoading: boolean;
  scheduleMessage: string;
}

const initialState: ScheduleState = {
  schedules: [],
  isLoading: false,
  scheduleMessage: "",
};

export const ScheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSchedules: (state, action) => {
      state.schedules = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setScheduleMessage: (state, action) => {
      state.scheduleMessage = action.payload;
    },
    setSelectedSchedule: (state, action) => {
      state.selectedSchedule = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSchedules.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSchedules.fulfilled, (state, action) => {
      state.schedules = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getSchedules.rejected, (state) => {
      state.isLoading = false;
      state.scheduleMessage = "Ha ocurrido un error al obtener los horarios";
    });
    builder.addCase(getScheduleById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getScheduleById.fulfilled, (state, action) => {
      state.selectedSchedule = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getScheduleById.rejected, (state) => {
      state.isLoading = false;
      state.scheduleMessage = "Ha ocurrido un error al obtener el horario";
    });
    builder.addCase(createSchedule.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSchedule.fulfilled, (state, action) => {
      state.schedules.push(action.payload);
      state.isLoading = false;
      state.scheduleMessage = "Se ha creado el horario correctamente";
    });
    builder.addCase(createSchedule.rejected, (state) => {
      state.isLoading = false;
      state.scheduleMessage = "Ha ocurrido un error al crear el horario";
    });
    builder.addCase(updateSchedule.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateSchedule.fulfilled, (state, action) => {
      const index = state.schedules.findIndex(
        (schedule) => schedule.id === action.payload.id,
      );
      state.schedules[index] = action.payload;
      state.isLoading = false;
      state.scheduleMessage = "Se ha actualizado el horario correctamente";
    });
    builder.addCase(updateSchedule.rejected, (state) => {
      state.isLoading = false;
      state.scheduleMessage = "Ha ocurrido un error al actualizar el horario";
    });
    builder.addCase(deleteSchedule.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteSchedule.fulfilled, (state, action) => {
      state.schedules = state.schedules.filter(
        (schedule) => schedule.id !== action.payload,
      );
      state.isLoading = false;
      state.scheduleMessage = "Se ha eliminado el horario correctamente";
    });
  },
});

export const { setSchedules, setScheduleMessage, setSelectedSchedule } =
  ScheduleSlice.actions;
