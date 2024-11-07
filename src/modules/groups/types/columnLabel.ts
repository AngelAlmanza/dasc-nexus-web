import { IGroup } from "@/data/models";

export type KeysGroupColumns = keyof IGroup;
export type ColumnLabel = Record<KeysGroupColumns, string>;
