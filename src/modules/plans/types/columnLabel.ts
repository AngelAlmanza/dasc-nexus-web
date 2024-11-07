import { IPlan } from "@/data/models";

export type KeysPlanColumns = keyof IPlan;
export type ColumnLabel = Record<KeysPlanColumns, string>;
