import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setDashboardMessage } from "@/core/store/slices";
import { getDashboardInfo } from "@/core/store/thunks";
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
  const {
    careerCount,
    teacherCount,
    studentCount,
    classroomCount,
    dashboardMessage,
  } = useAppSelector((state) => state.dashboard);
  const { toast } = useToast();

  const dashboardInformation = useMemo((): DashboardInformation[] => {
    return [
      {
        title: "Salones",
        content: `${classroomCount} salones disponibles`,
        icon: <School size={ICON_DEFAULT_SIZE} />,
      },
      {
        title: "Solitudes",
        content: "4 solicitudes pendientes",
        icon: <ScrollText size={ICON_DEFAULT_SIZE} />,
      },
      {
        title: "Maestros",
        content: `${teacherCount} maestros`,
        icon: <Users size={ICON_DEFAULT_SIZE} />,
      },
      {
        title: "Estudiantes",
        content: `${studentCount} estudiantes`,
        icon: <BookUser size={ICON_DEFAULT_SIZE} />,
      },
      {
        title: "Carreras",
        content: `${careerCount} carreras disponibles`,
        icon: <GraduationCap size={ICON_DEFAULT_SIZE} />,
      },
    ];
  }, [careerCount, teacherCount, studentCount, classroomCount]);

  useEffect(() => {
    if (dashboardMessage && dashboardMessage.length > 0) {
      toast({
        title: "Dashboard",
        description: dashboardMessage,
      });
      dispatch(setDashboardMessage(""));
    }
  }, [dashboardMessage, toast, dispatch]);

  useEffect(() => {
    dispatch(getDashboardInfo());
  }, [dispatch]);

  return {
    dashboardInformation,
  };
};
