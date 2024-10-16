import { COLUMN_LABELS } from "@/modules/buildings/constants/columnLabel";
import { KeyBuildingColumns } from "@/modules/buildings/types/columnLabel";

export const getColumnLabel = (column: KeyBuildingColumns) =>
    COLUMN_LABELS[column];