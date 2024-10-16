import { Checkbox } from "@/core/components/ui";
import { Building } from "@/data/models/Building";
import {ActionsColumn} from "@/modules/buildings/components/ActionsColumn"
import { ColumnDef } from "@tanstack/react-table";

export const ModuleTableColumns: ColumnDef<Building>[] = [
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
        accessorKey: "numberplants",
        header: "Numero de plantas",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("numberplants")}</div>
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => <ActionsColumn row={row} />,
    },
];
