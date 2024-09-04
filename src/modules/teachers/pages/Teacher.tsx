import { ModuleHeaderComponent } from "@/core/components";
import { Button } from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbModule } from "@/modules/teachers/components";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const navigate = useNavigate();

  const handleGoToDetails = (id?: number) => {
    if (id) {
      navigate(`${PrivateRoutes.TEACHER_DETAIL}/${id}`);
    } else {
      navigate(PrivateRoutes.TEACHER_CREATE);
    }
  };

  return (
    <DashboardLayout
      header={
        <ModuleHeaderComponent
          moduleTitle="Maestros"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <p>Maestros</p>
      <Button onClick={() => handleGoToDetails(23)}>Go to details</Button>
      <Button onClick={() => handleGoToDetails()}>Go to create</Button>
    </DashboardLayout>
  );
};

export default Teacher;
