import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setSubjectMessage } from "@/core/store/slices";
import { deleteSubject, getSubjects } from "@/core/store/thunks";
import { useEffect } from "react";

export const useSubjects = () => {
  const dispatch = useAppDispatch();
  const { subjects, subjectMessage, isLoading } = useAppSelector(
    (state) => state.subject,
  );
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    dispatch(deleteSubject(id));
  };

  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);

  useEffect(() => {
    if (subjectMessage && subjectMessage.length > 0) {
      toast({
        title: "Materias",
        description: subjectMessage,
      });
    }
    dispatch(setSubjectMessage(""));
  }, [subjectMessage, toast, dispatch]);

  return {
    subjects,
    isLoading,
    handleDelete,
  };
};
