import { AsideMenu } from "@/core/components";
import { Toaster } from "@/core/components/ui";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  header: React.ReactNode;
};

export const DashboardLayout = ({ children, header }: Props) => {
  return (
    <div className="w-screen h-screen flex">
      <AsideMenu />
      <div className="flex-1 overflow-y-auto">
        <header className="w-full bg-white shadow-sm py-4 px-12">
          {header}
        </header>
        <main className="p-12 overflow-y-auto">{children}</main>
        <Toaster />
      </div>
    </div>
  );
};
