import { AsideMenu } from "@/core/components";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  header: React.ReactNode;
};

export const DashboardLayout = ({ children, header }: Props) => {
  return (
    <div className="w-screen h-screen flex">
      <AsideMenu />
      <div className="flex-1 overflow-y-auto">
        <header className="w-full bg-white shadow-sm p-4">{header}</header>
        <main className="p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};
