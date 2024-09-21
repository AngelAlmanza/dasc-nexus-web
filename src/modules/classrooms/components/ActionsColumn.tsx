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
import { Classroom } from "@/data/models";
import { useModuleActions } from "@/modules/shared/hooks";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

type Props = {
  row: Row<Classroom>;
};

export const ActionsColumn = ({ row }: Props) => {
  const { handleNavigation } = useModuleActions(
    PrivateRoutes.CLASSROOM_CREATE,
    PrivateRoutes.CLASSROOM_DETAIL,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
