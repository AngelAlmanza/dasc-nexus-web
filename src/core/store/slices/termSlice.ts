import {
  createTerm,
  deleteTerm,
  getTermById,
  getTerms,
  updateTerm,
} from "@/core/store/thunks/termThunks";
import { ITerm } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface TermState {
  terms: ITerm[];
  selectedTerm?: ITerm;
  isLoading: boolean;
  termMessage: string;
}

const initialState: TermState = {
  terms: [],
  isLoading: false,
  termMessage: "",
};

export const TermSlice = createSlice({
  name: "term",
  initialState,
  reducers: {
    setTerms: (state, action) => {
      state.terms = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setTermMessage: (state, action) => {
      state.termMessage = action.payload;
    },
    setSelectedTerm: (state, action) => {
      state.selectedTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getTerms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTerms.fulfilled, (state, action) => {
      state.terms = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTerms.rejected, (state) => {
      state.isLoading = false;
      state.termMessage = "Ha ocurrido un error al obtener los términos";
    });
    builder.addCase(getTermById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTermById.fulfilled, (state, action) => {
      state.selectedTerm = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTermById.rejected, (state) => {
      state.isLoading = false;
      state.termMessage = "Ha ocurrido un error al obtener el término";
    });
    builder.addCase(createTerm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTerm.fulfilled, (state, action) => {
      state.terms.push(action.payload);
      state.isLoading = false;
      state.termMessage = "Se ha creado el término correctamente";
    });
    builder.addCase(createTerm.rejected, (state) => {
      state.isLoading = false;
      state.termMessage = "Ha ocurrido un error al crear el término";
    });
    builder.addCase(updateTerm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTerm.fulfilled, (state, action) => {
      state.terms = state.terms.map((term) =>
        term.id === action.payload.id ? action.payload : term,
      );
      state.isLoading = false;
      state.termMessage = "Se ha actualizado el término correctamente";
    });
    builder.addCase(updateTerm.rejected, (state) => {
      state.isLoading = false;
      state.termMessage = "Ha ocurrido un error al actualizar el término";
    });
    builder.addCase(deleteTerm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTerm.fulfilled, (state, action) => {
      state.terms = state.terms.filter((term) => term.id !== action.payload);
      state.isLoading = false;
      state.termMessage = "Se ha eliminado el término correctamente";
    });
    builder.addCase(deleteTerm.rejected, (state) => {
      state.isLoading = false;
      state.termMessage = "Ha ocurrido un error al eliminar el término";
    });
  },
});

export const { setSelectedTerm, setTermMessage, setTerms } = TermSlice.actions;
