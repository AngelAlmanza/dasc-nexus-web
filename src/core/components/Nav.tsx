import { buttonVariants } from "@/core/components/ui";
import { IAsideLinks } from "@/core/interfaces";
import { cn } from "@/core/lib";
import { useAppSelector } from "@/core/store/hooks";
import { Link, useLocation } from "react-router-dom";

type Props = {
  links: IAsideLinks[];
};

export const Nav = ({ links }: Props) => {
  const location = useLocation();
  const { collapsedMenu } = useAppSelector((state) => state.ui);

  return (
    <div
      data-collapsed={collapsedMenu}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={cn(
              buttonVariants({ variant: link.variant, size: "sm" }),
              "justify-start",
              "text-lg",
              "py-6",
              "px-4",
              !location.pathname.includes(link.to)
                ? "bg-white text-slate-950"
                : "",
            )}
          >
            <link.icon className="mr-2 h-6 w-6" />
            {link.title}
            {link.label && <span className={cn("ml-auto")}>{link.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};
