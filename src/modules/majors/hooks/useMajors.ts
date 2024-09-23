import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { getMajors } from "@/core/store/thunks";
import { useEffect } from "react";

export const useMajors = () => {
  const dispatch = useAppDispatch();
  const { majors } = useAppSelector((state) => state.major);

  useEffect(() => {
    dispatch(getMajors());
  }, [dispatch]);

  return {
    majors,
  };
};
