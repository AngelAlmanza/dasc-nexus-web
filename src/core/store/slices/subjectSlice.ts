import {
  getSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
} from "@/core/store/thunks";
import { Subject } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface SubjectState {
  subjects: Subject[];
  selectedSubject?: Subject;
  isLoading: boolean;
  subjectMessage: string;
}

const initialState: SubjectState = {
  subjects: [],
  isLoading: false,
  subjectMessage: "",
};

export const SubjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    setSubjects: (state, action) => {
      state.subjects = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSubjectMessage: (state, action) => {
      state.subjectMessage = action.payload;
    },
    setSelectedSubject: (state, action) => {
      state.selectedSubject = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSubjects.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSubjects.fulfilled, (state, action) => {
      state.subjects = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getSubjects.rejected, (state) => {
      state.isLoading = false;
      state.subjectMessage = "Ha ocurrido un error al obtener las materias";
    });
    builder.addCase(getSubjectById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSubjectById.fulfilled, (state, action) => {
      state.selectedSubject = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getSubjectById.rejected, (state) => {
      state.isLoading = false;
      state.subjectMessage = "Ha ocurrido un error al obtener la materia";
    });
    builder.addCase(createSubject.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSubject.fulfilled, (state, action) => {
      state.subjects.push(action.payload);
      state.isLoading = false;
      state.subjectMessage = "Se ha creado la materia correctamente";
    });
    builder.addCase(createSubject.rejected, (state) => {
      state.isLoading = false;
      state.subjectMessage = "Ha ocurrido un error al crear la materia";
    });
    builder.addCase(updateSubject.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateSubject.fulfilled, (state, action) => {
      const index = state.subjects.findIndex(
        (subject) => subject.id === action.payload.id,
      );
      state.subjects[index] = action.payload;
      state.isLoading = false;
      state.subjectMessage = "Se ha actualizado la materia correctamente";
    });
    builder.addCase(updateSubject.rejected, (state) => {
      state.isLoading = false;
      state.subjectMessage = "Ha ocurrido un error al actualizar la materia";
    });
    builder.addCase(deleteSubject.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteSubject.fulfilled, (state, action) => {
      state.subjects = state.subjects.filter(
        (subject) => subject.id !== action.payload,
      );
      state.isLoading = false;
      state.subjectMessage = "Se ha eliminado la materia correctamente";
    });
    builder.addCase(deleteSubject.rejected, (state) => {
      state.isLoading = false;
      state.subjectMessage = "Ha ocurrido un error al eliminar la materia";
    });
  },
});

export const { setSubjects, setSelectedSubject, setSubjectMessage } =
  SubjectSlice.actions;
