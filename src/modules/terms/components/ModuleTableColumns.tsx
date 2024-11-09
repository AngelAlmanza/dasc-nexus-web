import { Checkbox } from "@/core/components/ui";
import { ITerm } from "@/data/models";
import { ActionsColumn } from "@/modules/terms/components";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

export const ModuleTableColumns: ColumnDef<ITerm>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Seleccionar todo"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "init",
    header: "Inicio",
    cell: ({ row }) => <div>{moment(row.getValue("init")).format("LLL")}</div>,
  },
  {
    accessorKey: "end",
    header: "Fin",
    cell: ({ row }) => <div>{moment(row.getValue("end")).format("LLL")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ActionsColumn row={row} />,
  },
];
