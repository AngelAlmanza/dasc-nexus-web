import { ModuleHeaderComponent } from "@/core/components";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbForm } from "@/modules/subjects/components";
import { useParams } from "react-router-dom";

const SubjectDetails = () => {
  const { id } = useParams();
  const title = id ? `Informacion de la Materia ${id}` : "Crear Materia";
  const formType = id ? "update" : "create";

  return (
    <DashboardLayout
      header={
        <ModuleHeaderComponent
          moduleTitle={title}
          breadcrumbItems={
            <BreadcrumbForm
              formType={formType}
              id={Number(id)}
            />
          }
        />
      }
    >
      <p>Información de la Materia</p>
    </DashboardLayout>
  );
};

export default SubjectDetails;
