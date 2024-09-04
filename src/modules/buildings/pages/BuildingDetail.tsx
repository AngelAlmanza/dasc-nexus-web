import { ModuleHeaderComponent } from "@/core/components";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbForm } from "@/modules/buildings/components";
import { useParams } from "react-router-dom";

const BuildingDetails = () => {
  const { id } = useParams();
  const title = id ? `Informacion del Edificio ${id}` : "Crear Edificio";
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
      <p>Información del Edificio</p>
    </DashboardLayout>
  );
};

export default BuildingDetails;
