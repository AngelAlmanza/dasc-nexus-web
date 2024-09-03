import { Breadcrumb, BreadcrumbList } from "@/core/components/ui";

type Props = {
  moduleTitle: string;
  breadcrumbItems: React.ReactNode | React.ReactNode[];
};

export const ModuleHeaderComponent = ({
  moduleTitle,
  breadcrumbItems,
}: Props) => {
  return (
    <>
      <h1 className="text-5xl font-bold mb-4">{moduleTitle}</h1>
      <Breadcrumb>
        <BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
      </Breadcrumb>
    </>
  );
};
