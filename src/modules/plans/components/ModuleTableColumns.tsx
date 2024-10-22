import { Checkbox } from "@/core/components/ui";
import { Plan } from "@/data/models";
import { ActionsColumn } from "@/modules/plans/components";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

export const ModuleTableColumns: ColumnDef<Plan>[] = [
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
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "start",
    header: "Inicio del plan",
    cell: ({ row }) => <div>{row.getValue("start")}</div>,
  },
  {
    accessorKey: "end",
    header: "Fin del plan",
    cell: ({ row }) => <div>{row.getValue("end")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de creación",
    cell: ({ row }) => (
      <div>{moment(row.getValue("createdAt")).format("LLL")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ActionsColumn row={row} />,
  },
];
