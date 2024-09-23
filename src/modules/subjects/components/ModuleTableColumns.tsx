import { Checkbox } from "@/core/components/ui";
import { Career, Subject } from "@/data/models";
import { ActionsColumn } from "@/modules/subjects/components";
import { ColumnDef } from "@tanstack/react-table";

export const ModuleTableColumns: ColumnDef<Subject>[] = [
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
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "career",
    header: "Carrera",
    cell: ({ row }) => <div>{(row.getValue("career") as Career).name}</div>,
  },
  {
    accessorKey: "practice_hours",
    header: "Horas de práctica",
    cell: ({ row }) => <div>{row.getValue("practice_hours")}</div>,
  },
  {
    accessorKey: "theory_hours",
    header: "Horas de teoría",
    cell: ({ row }) => <div>{row.getValue("theory_hours")}</div>,
  },
  {
    accessorKey: "credits",
    header: "Créditos",
    cell: ({ row }) => <div>{row.getValue("credits")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ActionsColumn row={row} />,
  },
];
