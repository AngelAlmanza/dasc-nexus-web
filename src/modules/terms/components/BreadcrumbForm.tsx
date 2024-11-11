import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { FormTypes } from "@/core/types";
import { Slash } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  formType: FormTypes;
  id?: number;
};

export const BreadcrumbForm = ({ formType, id }: Props) => {
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link to={PrivateRoutes.TERM}>Periodos</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link
            to={
              formType === "create"
                ? PrivateRoutes.TERM_CREATE
                : `${PrivateRoutes.TERM_DETAIL}/${id}`
            }
          >
            {formType === "create" ? "Crear" : "Actualizar"}
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </>
  );
};