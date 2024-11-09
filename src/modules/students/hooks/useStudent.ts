import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setStudentMessage } from "@/core/store/slices/studentSlice";
import { deleteStudent, getStudents } from "@/core/store/thunks/studentThunks";
import { useEffect } from "react";

export const useStudents = (requestStudents = true) => {
  const dispatch = useAppDispatch();
  const { students, studentMessage, isLoading } = useAppSelector(
    (state) => state.student,
  );
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    dispatch(deleteStudent(id));
  };

  useEffect(() => {
    if (!requestStudents) return;
    dispatch(getStudents());
  }, [dispatch, requestStudents]);

  useEffect(() => {
    if (studentMessage && setStudentMessage.length > 0) {
      toast({
        title: "Alumnos",
        description: studentMessage,
      });
      dispatch(setStudentMessage(""));
    }
  }, [studentMessage, toast, dispatch]);

  return {
    students,
    isLoading,
    handleDelete,
  };
};
