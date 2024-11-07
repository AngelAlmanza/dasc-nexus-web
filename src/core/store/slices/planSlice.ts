import {
  createPlan,
  deletePlan,
  getPlanById,
  getPlans,
  updatePlan,
} from "@/core/store/thunks";
import { IPlan } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface PlanState {
  plans: IPlan[];
  selectedPlan?: IPlan;
  isLoading: boolean;
  planMessage: string;
}

const initialState: PlanState = {
  plans: [],
  isLoading: false,
  planMessage: "",
};

export const PlanSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlans: (state, action) => {
      state.plans = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPlanMessage: (state, action) => {
      state.planMessage = action.payload;
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getPlans.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPlans.fulfilled, (state, action) => {
      state.plans = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPlans.rejected, (state) => {
      state.isLoading = false;
      state.planMessage = "Ha ocurrido un error al obtener los planes";
    });
    builder.addCase(getPlanById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPlanById.fulfilled, (state, action) => {
      state.selectedPlan = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPlanById.rejected, (state) => {
      state.isLoading = false;
      state.planMessage = "Ha ocurrido un error al obtener el plan";
    });
    builder.addCase(createPlan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPlan.fulfilled, (state, action) => {
      state.plans.push(action.payload);
      state.isLoading = false;
      state.planMessage = "Se ha creado el plan correctamente";
    });
    builder.addCase(createPlan.rejected, (state) => {
      state.isLoading = false;
      state.planMessage = "Ha ocurrido un error al crear el plan";
    });
    builder.addCase(updatePlan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updatePlan.fulfilled, (state, action) => {
      const index = state.plans.findIndex((p) => p.id === action.payload.id);
      state.plans[index] = action.payload;
      state.isLoading = false;
      state.planMessage = "Se ha actualizado el plan correctamente";
    });
    builder.addCase(updatePlan.rejected, (state) => {
      state.isLoading = false;
      state.planMessage = "Ha ocurrido un error al actualizar el plan";
    });
    builder.addCase(deletePlan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deletePlan.fulfilled, (state, action) => {
      state.plans = state.plans.filter((p) => p.id !== action.payload);
      state.isLoading = false;
      state.planMessage = "Se ha eliminado el plan correctamente";
    });
    builder.addCase(deletePlan.rejected, (state) => {
      state.isLoading = false;
      state.planMessage = "Ha ocurrido un error al eliminar el plan";
    });
  },
});

export const { setPlans, setPlanMessage, setSelectedPlan } = PlanSlice.actions;
