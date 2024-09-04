import { IAsideLinks } from "@/core/interfaces";
import {
  BookMinus,
  BookUser,
  Building,
  GraduationCap,
  LayoutDashboard,
  School,
  ScrollText,
  Users,
} from "lucide-react";
import { PrivateRoutes } from "@/core/enums";

export const ModuleListMenu: IAsideLinks[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    variant: "default",
    to: PrivateRoutes.DASHBOARD,
  },
  {
    title: "Carreras",
    icon: GraduationCap,
    variant: "default",
    to: PrivateRoutes.MAJOR,
  },
  {
    title: "Materias",
    icon: BookMinus,
    variant: "default",
    to: PrivateRoutes.SUBJECT,
  },
  {
    title: "Salones",
    icon: School,
    variant: "default",
    to: PrivateRoutes.CLASSROOM,
  },
  {
    title: "Alumnos",
    icon: BookUser,
    variant: "default",
    to: PrivateRoutes.STUDENT,
  },
  {
    title: "Maestros",
    icon: Users,
    variant: "default",
    to: PrivateRoutes.TEACHER,
  },
  {
    title: "Solicitudes",
    icon: ScrollText,
    variant: "default",
    to: PrivateRoutes.REQUEST,
  },
  {
    title: "Edificios",
    icon: Building,
    variant: "default",
    to: PrivateRoutes.BUILDING,
  },
];
