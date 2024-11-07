import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { ITeacher } from "@/data/models";
import { useModuleActions } from "@/modules/shared/hooks";
import { useTeachers } from "@/modules/teachers/hooks";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

type Props = {
  row: Row<ITeacher>;
};

export const ActionsColumn = ({ row }: Props) => {
  const { handleNavigation } = useModuleActions(
    PrivateRoutes.TEACHER_CREATE,
    PrivateRoutes.TEACHER_DETAIL,
  );
  const { isLoading, handleDelete } = useTeachers(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          disabled={isLoading}
        >
          <span className="sr-only">Abrir menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleNavigation(row.original.id)}>
          Ver Detalles
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDelete(row.original.id)}>
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
