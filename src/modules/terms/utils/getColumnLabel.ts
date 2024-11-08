import { COLUMN_LABELS } from "@/modules/terms/constants";
import { KeysTermColumns } from "@/modules/terms/types";

export const getColumnLabel = (column: KeysTermColumns) =>
  COLUMN_LABELS[column];
