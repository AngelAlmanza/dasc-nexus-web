import { Checkbox } from "@/core/components/ui";
import {
  IClassroom,
  IScheduleBlock,
  ISubject,
  ITeacherSchedule,
} from "@/data/models";
import { ActionsColumn } from "@/modules/teacher-schedules/components";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

export const ModuleTableColumns: ColumnDef<ITeacherSchedule>[] = [
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
    accessorKey: "room",
    header: "Salón",
    cell: ({ row }) => <div>{(row.getValue("room") as IClassroom).name}</div>,
  },
  {
    accessorKey: "teacherName",
    header: "Profesor",
    cell: ({ row }) => <div>{row.getValue("teacherName")}</div>,
  },
  {
    accessorKey: "subject",
    header: "Materia",
    cell: ({ row }) => <div>{(row.getValue("subject") as ISubject).name}</div>,
  },
  {
    accessorKey: "schedule_block",
    header: "Horario",
    cell: ({ row }) => (
      <div>
        {moment(
          (row.getValue("schedule_block") as IScheduleBlock).start_time,
          "HH:mm:ss",
        ).format("HH:mm")}{" "}
        -{" "}
        {moment(
          (row.getValue("schedule_block") as IScheduleBlock).end_time,
          "HH:mm:ss",
        ).format("HH:mm")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ActionsColumn row={row} />,
  },
];
