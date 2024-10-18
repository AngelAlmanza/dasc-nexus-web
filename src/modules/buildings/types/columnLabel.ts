import { Building } from "@/data/models";

export type KeyBuildingColumns = Exclude<keyof Building, "toJSON">;
export type ColumnLabel = Record<KeyBuildingColumns, string>;
