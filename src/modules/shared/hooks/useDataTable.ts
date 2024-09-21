import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";

export const useDataTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  return {
    sorting,
    columnFilters,
    columnVisibility,
    rowSelection,
    setSorting,
    setColumnFilters,
    setColumnVisibility,
    setRowSelection,
  };
};
