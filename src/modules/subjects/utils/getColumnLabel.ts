import { COLUMN_LABELS } from "@/modules/subjects/constants";
import { KeysSubjectColumns } from "@/modules/subjects/types";

export const getColumnLabel = (column: KeysSubjectColumns) =>
  COLUMN_LABELS[column];
