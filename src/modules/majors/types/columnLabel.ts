import { ICareer } from "@/data/models";

export type KeysMajorColumns = keyof ICareer;
export type ColumnLabel = Record<KeysMajorColumns, string>;
