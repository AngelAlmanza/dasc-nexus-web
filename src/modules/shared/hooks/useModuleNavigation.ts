import { PrivateRoutes } from "@/core/enums";
import { useNavigate } from "react-router-dom";

export const useModuleActions = (
  routeCreate: PrivateRoutes,
  routeDetails: PrivateRoutes,
) => {
  const navigate = useNavigate();

  const handleNavigation = (id?: number) => {
    if (id) {
      navigate(`${routeDetails}/${id}`);
    } else {
      navigate(routeCreate);
    }
  };

  return {
    handleNavigation,
  };
};
