import { ModuleHeaderComponent } from "@/core/components";
import { Button } from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbModule } from "@/modules/majors/components";
import { useNavigate } from "react-router-dom";

const Major = () => {
  const navigate = useNavigate();

  const handleGoToDetails = (id?: number) => {
    if (id) {
      navigate(`${PrivateRoutes.MAJOR_DETAIL}/${id}`);
    } else {
      navigate(PrivateRoutes.MAJOR_CREATE);
    }
  };

  return (
    <DashboardLayout
      header={
        <ModuleHeaderComponent
          moduleTitle="Carreras"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <p>Careras</p>
      <Button onClick={() => handleGoToDetails(23)}>Go to details</Button>
      <Button onClick={() => handleGoToDetails()}>Go to create</Button>
    </DashboardLayout>
  );
};

export default Major;
