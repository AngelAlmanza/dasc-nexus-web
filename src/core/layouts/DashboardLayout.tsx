import { AsideMenu } from "@/core/components";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen flex">
      <AsideMenu navCollapsedSize={4} />
      <main className="flex-1 p-4 overflow-y-auto">{children}</main>
    </div>
  );
};
