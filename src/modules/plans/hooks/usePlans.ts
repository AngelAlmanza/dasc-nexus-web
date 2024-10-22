import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setPlanMessage } from "@/core/store/slices";
import { deletePlan, getPlans } from "@/core/store/thunks";
import { useEffect } from "react";

export const usePlans = () => {
  const dispatch = useAppDispatch();
  const { plans, planMessage, isLoading } = useAppSelector(
    (state) => state.plan,
  );
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    dispatch(deletePlan(id));
  };

  useEffect(() => {
    dispatch(getPlans());
  }, [dispatch]);

  useEffect(() => {
    if (planMessage && planMessage.length > 0) {
      toast({
        title: "Plan",
        description: planMessage,
      });
      dispatch(setPlanMessage(""));
    }
  }, [planMessage, toast, dispatch]);

  return {
    plans,
    isLoading,
    handleDelete,
  };
};
