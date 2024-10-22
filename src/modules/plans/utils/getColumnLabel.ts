import { COLUMN_LABELS } from "@/modules/plans/constants";
import { KeysPlanColumns } from "@/modules/plans/types";

export const getColumnLabel = (column: KeysPlanColumns) =>
  COLUMN_LABELS[column];
