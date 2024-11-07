import { Checkbox } from "@/core/components/ui";
import { IGroup } from "@/data/models";
import { ActionsColumn } from "@/modules/groups/components";
import { ColumnDef } from "@tanstack/react-table";

export const ModuleTableColumns: ColumnDef<IGroup>[] = [
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
    accessorKey: "semester",
    header: "Semestre",
    cell: ({ row }) => <div>{row.getValue("semester")}</div>,
  },
  {
    accessorKey: "shift",
    header: "Turno",
    cell: ({ row }) => <div>{row.getValue("shift")}</div>,
  },
  {
    accessorKey: "students",
    header: "Número de estudiantes",
    cell: ({ row }) => (
      <div>{(row.getValue("students") as number[]).length}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ActionsColumn row={row} />,
  },
];
