import { ModuleHeaderComponent } from "@/core/components";
import { Button } from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbModule } from "@/modules/classrooms/components";
import { useNavigate } from "react-router-dom";

const Classroom = () => {
  const navigate = useNavigate();

  const handleGoToDetails = (id?: number) => {
    if (id) {
      navigate(`${PrivateRoutes.CLASSROOM_DETAIL}/${id}`);
    } else {
      navigate(PrivateRoutes.CLASSROOM_CREATE);
    }
  };

  return (
    <DashboardLayout
      header={
        <ModuleHeaderComponent
          moduleTitle="Salones"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <p>Salones</p>
      <Button onClick={() => handleGoToDetails(23)}>Go to details</Button>
      <Button onClick={() => handleGoToDetails()}>Go to create</Button>
    </DashboardLayout>
  );
};

export default Classroom;
