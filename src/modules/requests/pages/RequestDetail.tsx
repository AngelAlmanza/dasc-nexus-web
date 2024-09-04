import { ModuleHeaderComponent } from "@/core/components";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbForm } from "@/modules/requests/components";
import { useParams } from "react-router-dom";

const RequestDetails = () => {
  const { id } = useParams();
  const title = id ? `Informacion de la Solicitud ${id}` : "Crear Solicitud";
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
      <p>Información de la Solicitud</p>
    </DashboardLayout>
  );
};

export default RequestDetails;
