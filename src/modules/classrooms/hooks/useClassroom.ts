import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { getClassrooms } from "@/core/store/thunks";
import { useEffect } from "react";

export const useClassroom = () => {
  const { classrooms } = useAppSelector((state) => state.classroom);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getClassrooms());
  }, [dispatch]);

  return {
    classrooms,
  };
};
