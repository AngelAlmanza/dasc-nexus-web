import { Card, CardContent, CardHeader } from "@/core/components/ui";

type Props = {
  title: string;
  content: string;
  icon: React.ReactNode;
};

export const DashboardCard = ({ title, content, icon }: Props) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-3xl font-bold">{title}</h2>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        {icon}
        <p className="text-xl font-normal">{content}</p>
      </CardContent>
    </Card>
  );
};
