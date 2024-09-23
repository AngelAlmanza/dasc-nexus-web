import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { getSubjects } from "@/core/store/thunks";
import { useEffect } from "react";

export const useSubjects = () => {
  const dispatch = useAppDispatch();
  const { subjects } = useAppSelector((state) => state.subject);

  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);

  return {
    subjects,
  };
};
