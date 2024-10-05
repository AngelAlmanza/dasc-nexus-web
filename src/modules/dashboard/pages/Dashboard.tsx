import { ModuleHeaderComponent } from "@/core/components";
import { DashboardLayout } from "@/core/layouts";
import {
  BreadcrumbModule,
  DashboardCard,
} from "@/modules/dashboard/components";
import { useDashboard } from "@/modules/dashboard/hooks";

const Dashboard = () => {
  const { dashboardInformation } = useDashboard();

  return (
    <DashboardLayout
      header={
        <ModuleHeaderComponent
          moduleTitle="Dashboard"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <section className="grid grid-cols-3 gap-4">
        {dashboardInformation.map((info, index) => (
          <DashboardCard
            key={index}
            title={info.title}
            content={info.content}
            icon={info.icon}
          />
        ))}
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
