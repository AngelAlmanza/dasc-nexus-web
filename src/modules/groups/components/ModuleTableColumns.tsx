import { Checkbox } from "@/core/components/ui";
import { Group } from "@/data/models";
import { ActionsColumn } from "@/modules/groups/components";
import { ColumnDef } from "@tanstack/react-table";

export const ModuleTableColumns: ColumnDef<Group>[] = [
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
    accessorKey: "careerId",
    header: "Carrera",
    cell: ({ row }) => <div>{row.getValue("careerId")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ActionsColumn row={row} />,
  },
];
