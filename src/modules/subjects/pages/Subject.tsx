import { ModuleHeaderComponent } from "@/core/components";
import { Button } from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbModule } from "@/modules/subjects/components";
import { useNavigate } from "react-router-dom";

const Subject = () => {
  const navigate = useNavigate();

  const handleGoToDetails = (id?: number) => {
    if (id) {
      navigate(`${PrivateRoutes.SUBJECT_DETAIL}/${id}`);
    } else {
      navigate(PrivateRoutes.SUBJECT_CREATE);
    }
  };

  return (
    <DashboardLayout
      header={
        <ModuleHeaderComponent
          moduleTitle="Materias"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <p>Materias</p>
      <Button onClick={() => handleGoToDetails(23)}>Go to details</Button>
      <Button onClick={() => handleGoToDetails()}>Go to create</Button>
    </DashboardLayout>
  );
};

export default Subject;
