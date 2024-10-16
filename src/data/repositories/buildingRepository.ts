import { ApiAxiosInstance } from "@/core/lib/axios";
import { BuildingDto } from "../dto/BuildingDto";
import { IRepository, IResponse } from "@/data/interfaces";
import { Building } from "@/data/models/Building";


const api = ApiAxiosInstance.getInstance();
const apiBuilding = "/building";

export class BuildingRepository implements IRepository<Building, BuildingDto> {
    async getAll(): Promise<Building[]> {
        const response = await api.get<IResponse<Building[]>>(apiBuilding);
        return response.data.data;
    }

    async getById(id: number): Promise<Building> {
        const response = await api.get<IResponse<Building>>(`${apiBuilding}/${id}`);
        return response.data.data;
    }

    async create(data: BuildingDto): Promise<Building> {
        const response = await api.post<IResponse<Building>>(apiBuilding, data);
        return response.data.data;
    }

    async update(id: number, data: BuildingDto): Promise<Building> {
        const response = await api.put<IResponse<Building>>(
            `${apiBuilding}/${id}`,
            data,
        );
        return response.data.data;
    }

    async delete(id: number): Promise<boolean> {
        const response = await api.delete(`${apiBuilding}/${id}`);
        if (response.status === 204) {
            return true;
        } else {
            return false;
        }
    }
}