import { IClassroom } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";
import {
  getClassrooms,
  deleteClassroom,
  updateClassroom,
  createClassroom,
  getClassroomById,
} from "@/core/store/thunks";

interface ClassroomState {
  classrooms: IClassroom[];
  selectedClassroom?: IClassroom;
  isLoading: boolean;
  classroomMessage: string;
}

const initialState: ClassroomState = {
  classrooms: [],
  isLoading: false,
  classroomMessage: "",
};

export const ClassroomSlice = createSlice({
  name: "classroom",
  initialState,
  reducers: {
    setClassrooms: (state, action) => {
      state.classrooms = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setClassroomMessage: (state, action) => {
      state.classroomMessage = action.payload;
    },
    setSelectedClassroom: (state, action) => {
      state.selectedClassroom = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getClassrooms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getClassrooms.fulfilled, (state, action) => {
      state.classrooms = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getClassrooms.rejected, (state) => {
      state.isLoading = false;
      state.classroomMessage =
        "Ha ocurrido un error al obtener los salones de clase";
    });
    builder.addCase(createClassroom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createClassroom.fulfilled, (state, action) => {
      state.classrooms.push(action.payload);
      state.isLoading = false;
      state.classroomMessage = "Se ha creado el salón de clase correctamente";
    });
    builder.addCase(createClassroom.rejected, (state) => {
      state.isLoading = false;
      state.classroomMessage =
        "Ha ocurrido un error al crear el salón de clase";
    });
    builder.addCase(updateClassroom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateClassroom.fulfilled, (state, action) => {
      const index = state.classrooms.findIndex(
        (classroom) => classroom.id === action.payload.id,
      );
      state.classrooms[index] = action.payload;
      state.isLoading = false;
      state.classroomMessage =
        "Se ha actualizado el salón de clase correctamente";
    });
    builder.addCase(updateClassroom.rejected, (state) => {
      state.isLoading = false;
      state.classroomMessage =
        "Ha ocurrido un error al actualizar el salón de clase";
    });
    builder.addCase(deleteClassroom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteClassroom.fulfilled, (state, action) => {
      state.classrooms = state.classrooms.filter(
        (classroom) => classroom.id !== action.payload,
      );
      state.isLoading = false;
      state.classroomMessage =
        "Se ha eliminado el salón de clase correctamente";
    });
    builder.addCase(deleteClassroom.rejected, (state) => {
      state.isLoading = false;
      state.classroomMessage =
        "Ha ocurrido un error al eliminar el salón de clase";
    });
    builder.addCase(getClassroomById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getClassroomById.fulfilled, (state, action) => {
      state.selectedClassroom = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getClassroomById.rejected, (state) => {
      state.isLoading = false;
      state.classroomMessage =
        "Ha ocurrido un error al obtener el salón de clase";
    });
  },
});

export const { setClassrooms, setClassroomMessage, setSelectedClassroom } =
  ClassroomSlice.actions;
