import { Career } from "@/data/models";

export type KeysMajorColumns = Exclude<keyof Career, "toJSON">;
export type ColumnLabel = Record<KeysMajorColumns, string>;
