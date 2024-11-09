import { PrivateRoutes } from "@/core/enums";
import { IAsideLinks } from "@/core/interfaces";
import {
  BookMinus,
  BookUser,
  CalendarDays,
  // Building,
  ChartNoAxesGantt,
  GraduationCap,
  Group,
  LayoutDashboard,
  School,
  ScrollText,
  TimerReset,
  Users,
} from "lucide-react";

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
    title: "Horarios",
    icon: CalendarDays,
    variant: "default",
    to: PrivateRoutes.TEACHER_SCHEDULE,
  },
  {
    title: "Solicitudes",
    icon: ScrollText,
    variant: "default",
    to: PrivateRoutes.REQUEST,
  },
  // {
  //   title: "Edificios",
  //   icon: Building,
  //   variant: "default",
  //   to: PrivateRoutes.BUILDING,
  // },
  {
    title: "Planes de Estudio",
    icon: ChartNoAxesGantt,
    variant: "default",
    to: PrivateRoutes.PLAN,
  },
  {
    title: "Grupos",
    icon: Group,
    variant: "default",
    to: PrivateRoutes.GROUP,
  },
  {
    title: "Periodos",
    icon: TimerReset,
    variant: "default",
    to: PrivateRoutes.TERM,
  },
];
