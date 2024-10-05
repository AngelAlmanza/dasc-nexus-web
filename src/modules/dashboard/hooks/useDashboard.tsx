import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { getClassrooms, getMajors, getTeachers } from "@/core/store/thunks";
import { ICON_DEFAULT_SIZE } from "@/modules/dashboard/constants";
import { DashboardInformation } from "@/modules/dashboard/types";
import {
  BookUser,
  GraduationCap,
  School,
  ScrollText,
  Users,
} from "lucide-react";
import { useEffect, useMemo } from "react";

export const useDashboard = () => {
  const dispatch = useAppDispatch();
  const { classrooms } = useAppSelector((state) => state.classroom);
  const { majors } = useAppSelector((state) => state.major);
  const { teachers } = useAppSelector((state) => state.teacher);

  const dashboardInformation = useMemo((): DashboardInformation[] => {
    return [
      {
        title: "Salones",
        content: `${classrooms.length} salones disponibles`,
        icon: <School size={ICON_DEFAULT_SIZE} />,
      },
      {
        title: "Solitudes",
        content: "4 solicitudes pendientes",
        icon: <ScrollText size={ICON_DEFAULT_SIZE} />,
      },
      {
        title: "Maestros",
        content: `${teachers.length} maestros`,
        icon: <Users size={ICON_DEFAULT_SIZE} />,
      },
      {
        title: "Estudiantes",
        content: "450 estudiantes",
        icon: <BookUser size={ICON_DEFAULT_SIZE} />,
      },
      {
        title: "Carreras",
        content: `${majors.length} carreras disponibles`,
        icon: <GraduationCap size={ICON_DEFAULT_SIZE} />,
      },
    ];
  }, [classrooms, majors, teachers]);

  useEffect(() => {
    dispatch(getClassrooms());
    dispatch(getMajors());
    dispatch(getTeachers());
  }, [dispatch]);

  return {
    dashboardInformation,
  };
};
