import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setGroupMessage } from "@/core/store/slices";
import { deleteGroup, getGroups } from "@/core/store/thunks";
import { useEffect } from "react";

export const useGroups = (requestGroups = true) => {
  const dispatch = useAppDispatch();
  const { groups, groupMessage, isLoading } = useAppSelector(
    (state) => state.group,
  );
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    dispatch(deleteGroup(id));
  };

  useEffect(() => {
    if (!requestGroups) return;
    dispatch(getGroups());
  }, [dispatch, requestGroups]);

  useEffect(() => {
    if (groupMessage && groupMessage.length > 0) {
      toast({
        title: "Grupo",
        description: groupMessage,
      });
      dispatch(setGroupMessage(""));
    }
  }, [groupMessage, toast, dispatch]);

  return {
    groups,
    isLoading,
    handleDelete,
  };
};
