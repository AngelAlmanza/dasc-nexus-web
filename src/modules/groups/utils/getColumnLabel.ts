import { KeysGroupColumns } from "@/modules/groups/types";
import { COLUMN_LABELS } from "@/modules/groups/constants";

export const getColumnLabel = (column: KeysGroupColumns) =>
  COLUMN_LABELS[column];
