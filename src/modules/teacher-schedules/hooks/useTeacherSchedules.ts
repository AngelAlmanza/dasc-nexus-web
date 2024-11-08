import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setTeacherScheduleMessage } from "@/core/store/slices";
import {
  deleteTeacherSchedule,
  getTeacherSchedules,
} from "@/core/store/thunks";
import { useEffect } from "react";

export const useTeacherSchedules = (requestTeacherSchedules = true) => {
  const dispatch = useAppDispatch();
  const { teacherSchedules, teacherScheduleMessage, isLoading } =
    useAppSelector((state) => state.teacherSchedule);
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    dispatch(deleteTeacherSchedule(id));
  };

  useEffect(() => {
    if (!requestTeacherSchedules) return;
    dispatch(getTeacherSchedules());
  }, [dispatch, requestTeacherSchedules]);

  useEffect(() => {
    if (teacherScheduleMessage && teacherScheduleMessage.length > 0) {
      toast({
        title: "Horário do professor",
        description: teacherScheduleMessage,
      });
      dispatch(setTeacherScheduleMessage(""));
    }
  }, [teacherScheduleMessage, toast, dispatch]);

  return {
    teacherSchedules,
    isLoading,
    handleDelete,
  };
};
