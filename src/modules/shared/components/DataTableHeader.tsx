import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Input,
} from "@/core/components/ui";
import { IBaseModel } from "@/data/models";
import { Table } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

type Props<K extends IBaseModel, U> = {
  table: Table<K>;
  searchInputColumnName: string;
  searchInputColumnPlaceholder: string;
  createButtonLabel: string;
  getColumnLabel: (column: U) => string;
  handleNavigation: () => void;
};

export const DataTableHeader = <K extends IBaseModel, U>({
  table,
  searchInputColumnName,
  searchInputColumnPlaceholder,
  createButtonLabel,
  getColumnLabel,
  handleNavigation,
}: Props<K, U>) => {
  return (
    <div className="flex items-center justify-between py-4">
      <Input
        placeholder={searchInputColumnPlaceholder}
        value={
          (table
            .getColumn(searchInputColumnName)
            ?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table
            .getColumn(searchInputColumnName)
            ?.setFilterValue(event.target.value)
        }
        className="max-w-xl"
      />
      <div className="flex items-center justify-end flex-row-reverse gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto"
            >
              Columnas <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {getColumnLabel(column.id as U)}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={() => handleNavigation()}>{createButtonLabel}</Button>
      </div>
    </div>
  );
};
