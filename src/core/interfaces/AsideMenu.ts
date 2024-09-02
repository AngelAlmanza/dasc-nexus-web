import { LucideIcon } from "lucide-react";

export interface IAsideLinks {
  title: string;
  label?: string;
  icon: LucideIcon;
  to: string;
  variant: "default" | "ghost";
}
