import { BuildingDto } from "@/data/dto/BuildingDto";
import { BuildingRepository } from "@/data/repositories/buildingRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";


const buildingRepository = new BuildingRepository();

const getBuilding = createAsyncThunk(
    "building/getBuilding",
    async (_, thunkAPI) => {
        try {
            const response = await buildingRepository.getAll();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const getBuildingById = createAsyncThunk(
    "building/getBuildingById",
    async (id: number, thunkAPI) => {
        try {
            const response = await buildingRepository.getById(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const createBuilding = createAsyncThunk(
    "building/createBuilding",
    async (data: BuildingDto, thunkAPI) => {
        try {
            const response = await buildingRepository.create(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const updateBuilding = createAsyncThunk(
    "building/updateBuilding",
    async ({ id, data }: { id: number; data: BuildingDto }, thunkAPI) => {
        try {
            const response = await buildingRepository.update(id, data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const deleteBuilding = createAsyncThunk(
    "building/deleteBuilding",
    async (id: number, thunkAPI) => {
        try {
            const response = await buildingRepository.delete(id);
            if (response) {
                return id;
            } else {
                return thunkAPI.rejectWithValue("No se pudo eliminar el profesor");
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export {
    getBuilding,
    getBuildingById,
    createBuilding,
    updateBuilding,
    deleteBuilding,
};