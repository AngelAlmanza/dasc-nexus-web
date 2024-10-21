import { RoomTypes } from "@/core/enums";

export interface ClassroomDto {
  name: string;
  building: number;
  floor: number;
  capacity: number;
  long_desc: string;
  type: RoomTypes;
}
