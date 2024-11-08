import {
  createScheduleBlock,
  deleteScheduleBlock,
  getScheduleBlockById,
  getScheduleBlocks,
  updateScheduleBlock,
} from "@/core/store/thunks";
import { IScheduleBlock } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface ScheduleBlockState {
  scheduleBlocks: IScheduleBlock[];
  selectedScheduleBlock?: IScheduleBlock;
  isLoading: boolean;
  scheduleBlockMessage: string;
}

const initialState: ScheduleBlockState = {
  scheduleBlocks: [],
  isLoading: false,
  scheduleBlockMessage: "",
};

export const ScheduleBlockSlice = createSlice({
  name: "scheduleBlock",
  initialState,
  reducers: {
    setScheduleBlocks: (state, action) => {
      state.scheduleBlocks = action.payload;
    },
    setSelectedScheduleBlock: (state, action) => {
      state.selectedScheduleBlock = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setScheduleBlockMessage: (state, action) => {
      state.scheduleBlockMessage = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getScheduleBlocks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getScheduleBlocks.fulfilled, (state, action) => {
      state.scheduleBlocks = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getScheduleBlocks.rejected, (state) => {
      state.isLoading = false;
      state.scheduleBlockMessage =
        "Ha ocurrido un error al obtener los bloques de horario";
    });
    builder.addCase(getScheduleBlockById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getScheduleBlockById.fulfilled, (state, action) => {
      state.selectedScheduleBlock = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getScheduleBlockById.rejected, (state) => {
      state.isLoading = false;
      state.scheduleBlockMessage =
        "Ha ocurrido un error al obtener el bloque de horario";
    });
    builder.addCase(createScheduleBlock.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createScheduleBlock.fulfilled, (state, action) => {
      state.scheduleBlocks.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(createScheduleBlock.rejected, (state) => {
      state.isLoading = false;
      state.scheduleBlockMessage =
        "Ha ocurrido un error al crear el bloque de horario";
    });
    builder.addCase(updateScheduleBlock.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateScheduleBlock.fulfilled, (state, action) => {
      const index = state.scheduleBlocks.findIndex(
        (scheduleBlock) => scheduleBlock.id === action.payload.id,
      );
      state.scheduleBlocks[index] = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updateScheduleBlock.rejected, (state) => {
      state.isLoading = false;
      state.scheduleBlockMessage =
        "Ha ocurrido un error al actualizar el bloque de horario";
    });
    builder.addCase(deleteScheduleBlock.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteScheduleBlock.fulfilled, (state, action) => {
      state.scheduleBlocks = state.scheduleBlocks.filter(
        (scheduleBlock) => scheduleBlock.id !== action.payload,
      );
      state.isLoading = false;
    });
    builder.addCase(deleteScheduleBlock.rejected, (state) => {
      state.isLoading = false;
      state.scheduleBlockMessage =
        "Ha ocurrido un error al eliminar el bloque de horario";
    });
  },
});

export const {
  setScheduleBlocks,
  setSelectedScheduleBlock,
  setScheduleBlockMessage,
} = ScheduleBlockSlice.actions;
