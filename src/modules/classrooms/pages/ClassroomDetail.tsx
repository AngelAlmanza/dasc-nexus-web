import { ModuleHeaderComponent } from "@/core/components";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbForm } from "@/modules/classrooms/components";
import { useParams } from "react-router-dom";

const ClassroomDetails = () => {
  const { id } = useParams();
  const title = id ? `Informacion del Salón ${id}` : "Crear Salón";
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
      <p>Información del salón</p>
    </DashboardLayout>
  );
};

export default ClassroomDetails;
