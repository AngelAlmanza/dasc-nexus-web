import { Plan } from "@/data/models";

export type KeysPlanColumns = Exclude<keyof Plan, "toJSON">;
export type ColumnLabel = Record<KeysPlanColumns, string>;
