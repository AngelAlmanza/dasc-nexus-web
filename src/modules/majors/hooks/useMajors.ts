import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setMajorMessage } from "@/core/store/slices";
import { deleteMajor, getMajors } from "@/core/store/thunks";
import { useEffect } from "react";

export const useMajors = () => {
  const dispatch = useAppDispatch();
  const { majors, majorMessage, isLoading } = useAppSelector(
    (state) => state.major,
  );
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    dispatch(deleteMajor(id));
  };

  useEffect(() => {
    dispatch(getMajors());
  }, [dispatch]);

  useEffect(() => {
    if (majorMessage && majorMessage.length > 0) {
      toast({
        title: "Carrera",
        description: majorMessage,
      });
      dispatch(setMajorMessage(""));
    }
  }, [majorMessage, toast, dispatch]);

  return {
    majors,
    isLoading,
    handleDelete,
  };
};
