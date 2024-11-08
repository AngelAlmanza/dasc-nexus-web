import { ITerm } from "@/data/models";

export type KeysTermColumns = keyof ITerm;
export type ColumnLabel = Record<KeysTermColumns, string>;
