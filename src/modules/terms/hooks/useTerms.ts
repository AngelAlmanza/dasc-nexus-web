import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setTermMessage } from "@/core/store/slices";
import { deleteTerm, getTerms } from "@/core/store/thunks";
import { useEffect } from "react";

export const useTerms = (requestTerms = true) => {
  const dispatch = useAppDispatch();
  const { terms, termMessage, isLoading } = useAppSelector(
    (state) => state.term,
  );
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    dispatch(deleteTerm(id));
  };

  useEffect(() => {
    if (!requestTerms) return;
    dispatch(getTerms());
  }, [dispatch, requestTerms]);

  useEffect(() => {
    if (termMessage && termMessage.length > 0) {
      toast({
        title: "Término",
        description: termMessage,
      });
      dispatch(setTermMessage(""));
    }
  }, [termMessage, toast, dispatch]);

  return {
    terms,
    isLoading,
    handleDelete,
  };
};
