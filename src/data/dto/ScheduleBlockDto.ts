import { DayEn } from "@/core/enums";

export interface ScheduleBlockDto {
  start_time: string;
  end_time: string;
  day: DayEn;
}
