import { ApiAxiosInstance } from "@/core/lib/axios";
import { ScheduleBlockDto } from "@/data/dto";
import { IRepository } from "@/data/interfaces";
import {
  CreateScheduleBlockResponse,
  GetScheduleBlockResponse,
  GetScheduleBlocksResponse,
  IScheduleBlock,
  UpdateScheduleBlockResponse,
} from "@/data/models";

const api = ApiAxiosInstance.getInstance();
const apiScheduleBlock = "/schedule-blocks";

export class ScheduleBlockRepository
  implements IRepository<IScheduleBlock, ScheduleBlockDto>
{
  async getAll(): Promise<IScheduleBlock[]> {
    const response = await api.get<GetScheduleBlocksResponse>(apiScheduleBlock);
    const scheduleBlocks = response.data.data;
    return scheduleBlocks.map((scheduleBlock) => ({
      id: scheduleBlock.id,
      start_time: scheduleBlock.start_time,
      end_time: scheduleBlock.end_time,
      day: scheduleBlock.day,
      createdAt: scheduleBlock.created_at,
      updatedAt: scheduleBlock.updated_at,
    }));
  }

  async getById(id: number): Promise<IScheduleBlock> {
    const response = await api.get<GetScheduleBlockResponse>(
      `${apiScheduleBlock}/${id}`,
    );
    const scheduleBlock = response.data.data;
    return {
      id: scheduleBlock.id,
      start_time: scheduleBlock.start_time,
      end_time: scheduleBlock.end_time,
      day: scheduleBlock.day,
      createdAt: scheduleBlock.created_at,
      updatedAt: scheduleBlock.updated_at,
    };
  }

  async create(data: ScheduleBlockDto): Promise<IScheduleBlock> {
    const response = await api.post<CreateScheduleBlockResponse>(
      apiScheduleBlock,
      data,
    );
    const scheduleBlock = response.data.data;
    return {
      id: scheduleBlock.id,
      start_time: scheduleBlock.start_time,
      end_time: scheduleBlock.end_time,
      day: scheduleBlock.day,
      createdAt: scheduleBlock.created_at,
      updatedAt: scheduleBlock.updated_at,
    };
  }

  async update(id: number, data: ScheduleBlockDto): Promise<IScheduleBlock> {
    const response = await api.put<UpdateScheduleBlockResponse>(
      `${apiScheduleBlock}/${id}`,
      data,
    );
    const scheduleBlock = response.data.data;
    return {
      id: scheduleBlock.id,
      start_time: scheduleBlock.start_time,
      end_time: scheduleBlock.end_time,
      day: scheduleBlock.day,
      createdAt: scheduleBlock.created_at,
      updatedAt: scheduleBlock.updated_at,
    };
  }

  async delete(id: number): Promise<boolean> {
    const response = await api.delete(`${apiScheduleBlock}/${id}`);
    if (response.status === 204) {
      return true;
    }
    return false;
  }
}
