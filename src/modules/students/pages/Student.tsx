import { ModuleHeaderComponent } from "@/core/components";
import { Button } from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbModule } from "@/modules/students/components";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate();

  const handleGoToDetails = (id?: number) => {
    if (id) {
      navigate(`${PrivateRoutes.STUDENT_DETAIL}/${id}`);
    } else {
      navigate(PrivateRoutes.STUDENT_CREATE);
    }
  };

  return (
    <DashboardLayout
      header={
        <ModuleHeaderComponent
          moduleTitle="Alumnos"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <p>Alumnos</p>
      <Button onClick={() => handleGoToDetails(23)}>Go to details</Button>
      <Button onClick={() => handleGoToDetails()}>Go to create</Button>
    </DashboardLayout>
  );
};

export default Student;
