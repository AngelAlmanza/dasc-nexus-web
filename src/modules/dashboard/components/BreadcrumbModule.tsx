import { BreadcrumbItem, BreadcrumbLink } from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { Link } from "react-router-dom";

export const BreadcrumbModule = () => {
  return (
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link to={PrivateRoutes.DASHBOARD}>Dashboard</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
};
