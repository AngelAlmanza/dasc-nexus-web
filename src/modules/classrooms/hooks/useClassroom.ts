import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setClassroomMessage } from "@/core/store/slices";
import { deleteClassroom, getClassrooms } from "@/core/store/thunks";
import { useEffect } from "react";

export const useClassroom = (requestClassrooms = true) => {
  const dispatch = useAppDispatch();
  const { classrooms, classroomMessage, isLoading } = useAppSelector(
    (state) => state.classroom,
  );
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    dispatch(deleteClassroom(id));
  };

  useEffect(() => {
    if (!requestClassrooms) return;
    dispatch(getClassrooms());
  }, [dispatch, requestClassrooms]);

  useEffect(() => {
    if (classroomMessage && classroomMessage.length > 0) {
      toast({
        title: "Aulas",
        description: classroomMessage,
      });
      dispatch(setClassroomMessage(""));
    }
  }, [classroomMessage, toast, dispatch]);

  return {
    classrooms,
    isLoading,
    handleDelete,
  };
};
