import { Group } from "@/data/models";

export type KeysGroupColumns = Exclude<keyof Group, "toJSON">;
export type ColumnLabel = Record<KeysGroupColumns, string>;
