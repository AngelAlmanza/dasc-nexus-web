import {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
  } from "@/core/store/thunks/studentThunks";
  import { IStudent } from "@/data/models";
  import { createSlice } from "@reduxjs/toolkit";
  
  interface StudentState {
    students: IStudent[];
    selectedStudent?: IStudent;
    isLoading: boolean;
    studentMessage: string;
  }
  
  const initialState: StudentState = {
    students: [],
    isLoading: false,
    studentMessage: "",
  };
  
  export const StudentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
      setStudents: (state, action) => {
        state.students = action.payload;
      },
      setLoading: (state, action) => {
        state.isLoading = action.payload;
      },
      setStudentMessage: (state, action) => {
        state.studentMessage = action.payload;
      },
      setSelectedStudent: (state, action) => {
        state.selectedStudent = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getStudents.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getStudents.rejected, (state) => {
        state.isLoading = false;
        state.studentMessage = "Ha ocurrido un error al obtener los alumnos";
      });
      builder.addCase(createStudent.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(createStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
        state.isLoading = false;
        state.studentMessage = "Se ha creado el alumno correctamente";
      });
      builder.addCase(createStudent.rejected, (state) => {
        state.isLoading = false;
        state.studentMessage = "Ha ocurrido un error al crear el alumno";
      });
      builder.addCase(updateStudent.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(updateStudent.fulfilled, (state, action) => {
        state.students = state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student,
        );
        state.isLoading = false;
        state.studentMessage = "Se ha actualizado el alumno correctamente";
      });
      builder.addCase(updateStudent.rejected, (state) => {
        state.isLoading = false;
        state.studentMessage = "Ha ocurrido un error al actualizar el alumno";
      });
      builder.addCase(deleteStudent.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter(
          (student) => student.id !== action.payload,
        );
        state.isLoading = false;
        state.studentMessage = "Se ha eliminado el alumno correctamente";
      });
      builder.addCase(deleteStudent.rejected, (state) => {
        state.isLoading = false;
        state.studentMessage = "Ha ocurrido un error al eliminar el alumno";
      });
      builder.addCase(getStudentById.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getStudentById.fulfilled, (state, action) => {
        state.selectedStudent = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getStudentById.rejected, (state) => {
        state.isLoading = false;
        state.studentMessage = "Ha ocurrido un error al obtener el alumno";
      });
    },
  });
  
  export const { setStudents, setSelectedStudent, setStudentMessage } =
    StudentSlice.actions;
  