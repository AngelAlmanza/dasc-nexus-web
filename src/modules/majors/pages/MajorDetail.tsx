import { ModuleHeaderComponent } from "@/core/components";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbForm } from "@/modules/majors/components";
import { useParams } from "react-router-dom";

const MajorDetails = () => {
  const { id } = useParams();
  const title = id ? `Informacion de la Carrera ${id}` : "Crear Carrera";
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
      <p>Información de la Carrera</p>
    </DashboardLayout>
  );
};

export default MajorDetails;
