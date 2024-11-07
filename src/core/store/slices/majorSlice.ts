import {
  createMajor,
  deleteMajor,
  getMajorById,
  getMajors,
  updateMajor,
} from "@/core/store/thunks";
import { ICareer } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface MajorState {
  majors: ICareer[];
  selectedMajor?: ICareer;
  isLoading: boolean;
  majorMessage: string;
}

const initialState: MajorState = {
  majors: [],
  isLoading: false,
  majorMessage: "",
};

export const MajorSlice = createSlice({
  name: "major",
  initialState,
  reducers: {
    setMajors: (state, action) => {
      state.majors = action.payload;
    },
    setSelectedMajor: (state, action) => {
      state.selectedMajor = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setMajorMessage: (state, action) => {
      state.majorMessage = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getMajors.fulfilled, (state, action) => {
      state.majors = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMajors.rejected, (state) => {
      state.isLoading = false;
      state.majorMessage = "Ha ocurrido un error al obtener las carreras";
    });
    builder.addCase(getMajors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createMajor.fulfilled, (state, action) => {
      state.majors.push(action.payload);
      state.isLoading = false;
      state.majorMessage = "Se ha creado la carrera correctamente";
    });
    builder.addCase(createMajor.rejected, (state) => {
      state.isLoading = false;
      state.majorMessage = "Ha ocurrido un error al crear la carrera";
    });
    builder.addCase(createMajor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMajorById.fulfilled, (state, action) => {
      state.selectedMajor = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMajorById.rejected, (state) => {
      state.isLoading = false;
      state.majorMessage = "Ha ocurrido un error al obtener la carrera";
    });
    builder.addCase(getMajorById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateMajor.fulfilled, (state, action) => {
      const index = state.majors.findIndex(
        (major) => major.id === action.payload.id,
      );
      state.majors[index] = action.payload;
      state.isLoading = false;
      state.majorMessage = "Se ha actualizado la carrera correctamente";
    });
    builder.addCase(updateMajor.rejected, (state) => {
      state.isLoading = false;
      state.majorMessage = "Ha ocurrido un error al actualizar la carrera";
    });
    builder.addCase(updateMajor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteMajor.fulfilled, (state, action) => {
      state.majors = state.majors.filter(
        (major) => major.id !== action.payload,
      );
      state.isLoading = false;
      state.majorMessage = "Se ha eliminado la carrera correctamente";
    });
    builder.addCase(deleteMajor.rejected, (state) => {
      state.isLoading = false;
      state.majorMessage = "Ha ocurrido un error al eliminar la carrera";
    });
    builder.addCase(deleteMajor.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { setMajors, setSelectedMajor, setMajorMessage } =
  MajorSlice.actions;
