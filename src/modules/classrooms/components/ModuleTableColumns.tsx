import { Checkbox } from "@/core/components/ui";
import { Classroom } from "@/data/models";
import { ActionsColumn } from "@/modules/classrooms/components";
import { ColumnDef } from "@tanstack/react-table";

export const ModuleTableColumns: ColumnDef<Classroom>[] = [
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
    accessorKey: "building",
    header: "Edificio",
    cell: ({ row }) => <div>Edificio: {row.getValue("building")}</div>,
  },
  {
    accessorKey: "floor",
    header: "Piso",
    cell: ({ row }) => <div>Piso: {row.getValue("floor")}</div>,
  },
  {
    accessorKey: "long_description",
    header: "Descripción",
    enableResizing: false,
    cell: ({ row }) => (
      <div className="line-clamp-6">
        {row.getValue("long_description") || "Sin descripción"}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ActionsColumn row={row} />,
  },
];
