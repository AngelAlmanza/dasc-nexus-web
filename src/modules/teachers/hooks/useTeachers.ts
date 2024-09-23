import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { getTeachers } from "@/core/store/thunks";
import { useEffect } from "react";

export const useTeachers = () => {
  const dispatch = useAppDispatch();
  const { teachers } = useAppSelector((state) => state.teacher);

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  return {
    teachers,
  };
};
