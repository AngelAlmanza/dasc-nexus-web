import { ModuleHeaderComponent } from "@/core/components";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbModule } from "@/modules/dashboard/components";

const Dashboard = () => {
  return (
    <DashboardLayout
      header={
        <ModuleHeaderComponent
          moduleTitle="Dashboard"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <h1>Dashboard</h1>
    </DashboardLayout>
  );
};

export default Dashboard;
