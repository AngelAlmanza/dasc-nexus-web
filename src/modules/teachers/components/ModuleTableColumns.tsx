import { Checkbox } from "@/core/components/ui";
import { Teacher } from "@/data/models";
import { ActionsColumn } from "@/modules/teachers/components";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

export const ModuleTableColumns: ColumnDef<Teacher>[] = [
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
    accessorKey: "lastname",
    header: "Apellido",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lastname")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Correo",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: "Teléfono",
    cell: ({ row }) => <div>{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "birthday",
    header: "Fecha de nacimiento",
    cell: ({ row }) => (
      <div>{moment(row.getValue("birthday")).format("DD/MM/YYYY")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ActionsColumn row={row} />,
  },
];
