import {
  createTeacher,
  deleteTeacher,
  getTeacherById,
  getTeachers,
  updateTeacher,
} from "@/core/store/thunks";
import { ITeacher } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface TeacherState {
  teachers: ITeacher[];
  selectedTeacher?: ITeacher;
  isLoading: boolean;
  teacherMessage: string;
}

const initialState: TeacherState = {
  teachers: [],
  isLoading: false,
  teacherMessage: "",
};

export const TeacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setTeachers: (state, action) => {
      state.teachers = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setTeacherMessage: (state, action) => {
      state.teacherMessage = action.payload;
    },
    setSelectedTeacher: (state, action) => {
      state.selectedTeacher = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTeachers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeachers.fulfilled, (state, action) => {
      state.teachers = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTeachers.rejected, (state) => {
      state.isLoading = false;
      state.teacherMessage = "Ha ocurrido un error al obtener los profesores";
    });
    builder.addCase(createTeacher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTeacher.fulfilled, (state, action) => {
      state.teachers.push(action.payload);
      state.isLoading = false;
      state.teacherMessage = "Se ha creado el profesor correctamente";
    });
    builder.addCase(createTeacher.rejected, (state) => {
      state.isLoading = false;
      state.teacherMessage = "Ha ocurrido un error al crear el profesor";
    });
    builder.addCase(updateTeacher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTeacher.fulfilled, (state, action) => {
      state.teachers = state.teachers.map((teacher) =>
        teacher.id === action.payload.id ? action.payload : teacher,
      );
      state.isLoading = false;
      state.teacherMessage = "Se ha actualizado el profesor correctamente";
    });
    builder.addCase(updateTeacher.rejected, (state) => {
      state.isLoading = false;
      state.teacherMessage = "Ha ocurrido un error al actualizar el profesor";
    });
    builder.addCase(deleteTeacher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTeacher.fulfilled, (state, action) => {
      state.teachers = state.teachers.filter(
        (teacher) => teacher.id !== action.payload,
      );
      state.isLoading = false;
      state.teacherMessage = "Se ha eliminado el profesor correctamente";
    });
    builder.addCase(deleteTeacher.rejected, (state) => {
      state.isLoading = false;
      state.teacherMessage = "Ha ocurrido un error al eliminar el profesor";
    });
    builder.addCase(getTeacherById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeacherById.fulfilled, (state, action) => {
      state.selectedTeacher = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTeacherById.rejected, (state) => {
      state.isLoading = false;
      state.teacherMessage = "Ha ocurrido un error al obtener el profesor";
    });
  },
});

export const { setTeachers, setSelectedTeacher, setTeacherMessage } =
  TeacherSlice.actions;
