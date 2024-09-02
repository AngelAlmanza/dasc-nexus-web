import {
  buttonVariants,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/core/components/ui";
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
        {links.map((link, index) =>
          collapsedMenu ? (
            <Tooltip
              key={index}
              delayDuration={0}
            >
              <TooltipTrigger asChild>
                <Link
                  to="#"
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "icon" }),
                    "h-9 w-9",
                    location.pathname === link.to ? "" : "bg-white",
                    location.pathname === link.to ? "" : "text-slate-950",
                  )}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="flex items-center gap-4"
              >
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              to={link.to}
              className={cn(
                buttonVariants({ variant: link.variant, size: "sm" }),
                "justify-start",
                "text-lg",
                "py-6",
                "px-4",
                location.pathname === link.to ? "" : "bg-white",
                location.pathname === link.to ? "" : "text-slate-950",
              )}
            >
              <link.icon className="mr-2 h-6 w-6" />
              {link.title}
              {link.label && (
                <span className={cn("ml-auto")}>{link.label}</span>
              )}
            </Link>
          ),
        )}
      </nav>
    </div>
  );
};
