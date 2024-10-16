import {
    getBuilding,
    getBuildingById,
    createBuilding,
    updateBuilding,
    deleteBuilding
} from "@/core/store/thunks/buildingThunks";
import { Building } from "@/data/models/Building";
import { createSlice } from "@reduxjs/toolkit";

interface BuildingState {
    building: Building[];
    selectedBuilding?: Building;
    isLoading: boolean;
    buildingMessage: string;
}

const initialState: BuildingState = {
    building: [],
    isLoading: false,
    buildingMessage: "",
};

export const BuildingSlice = createSlice({
    name: "Building",
    initialState,
    reducers: {
        setBuilding: (state, action) => {
            state.building = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setbuildingMessage: (state, action) => {
            state.buildingMessage = action.payload;
        },
        setselectedBuilding: (state, action) => {
            state. selectedBuilding = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getBuilding.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getBuilding.fulfilled, (state, action) => {
            state.building = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getBuilding.rejected, (state) => {
            state.isLoading = false;
            state.buildingMessage = "Ha ocurrido un error al obtener los Edificios";
        });
        builder.addCase(createBuilding.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createBuilding.fulfilled, (state, action) => {
            state.building.push(action.payload);
            state.isLoading = false;
            state.buildingMessage = "Se ha creado el edificio correctamente";
        });
        builder.addCase(createBuilding.rejected, (state) => {
            state.isLoading = false;
            state.buildingMessage = "Ha ocurrido un error al crear el edificio";
        });
        builder.addCase(updateBuilding.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateBuilding.fulfilled, (state, action) => {
            state.building = state.building.map((building) =>
                building.id === action.payload.id ? action.payload : building,
            );
            state.isLoading = false;
            state.buildingMessage = "Se ha actualizado el edificio correctamente";
        });
        builder.addCase(updateBuilding.rejected, (state) => {
            state.isLoading = false;
            state.buildingMessage = "Ha ocurrido un error al actualizar el edificio";
        });
        builder.addCase(deleteBuilding.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteBuilding.fulfilled, (state, action) => {
            state.building = state.building.filter(
                (building) => building.id !== action.payload,
            );
            state.isLoading = false;
            state.buildingMessage = "Se ha eliminado el edificio correctamente";
        });
        builder.addCase(deleteBuilding.rejected, (state) => {
            state.isLoading = false;
            state.buildingMessage = "Ha ocurrido un error al eliminar el edificio";
        });
        builder.addCase(getBuildingById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getBuildingById.fulfilled, (state, action) => {
            state.selectedBuilding = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getBuildingById.rejected, (state) => {
            state.isLoading = false;
            state.buildingMessage = "Ha ocurrido un error al obtener el edificio";
        });
    },
});

export const { setBuilding, setselectedBuilding, setbuildingMessage } =
    BuildingSlice.actions;
