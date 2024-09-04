import { ModuleHeaderComponent } from "@/core/components";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbForm } from "@/modules/students/components";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  const title = id ? `Informacion del Alumno ${id}` : "Crear Alumno";
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
      <p>Información del Alumno</p>
    </DashboardLayout>
  );
};

export default StudentDetails;
