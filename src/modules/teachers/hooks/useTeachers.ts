import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setTeacherMessage } from "@/core/store/slices";
import { deleteTeacher, getTeachers } from "@/core/store/thunks";
import { useEffect } from "react";

export const useTeachers = () => {
  const dispatch = useAppDispatch();
  const { teachers, teacherMessage, isLoading } = useAppSelector(
    (state) => state.teacher,
  );
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    dispatch(deleteTeacher(id));
  };

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  useEffect(() => {
    if (teacherMessage && teacherMessage.length > 0) {
      toast({
        title: "Profesores",
        description: teacherMessage,
      });
      dispatch(setTeacherMessage(""));
    }
  }, [teacherMessage, toast, dispatch]);

  return {
    teachers,
    isLoading,
    handleDelete,
  };
};
