import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setAuthMessage } from "@/core/store/slices";
import { login } from "@/core/store/thunks";
import { setAuthToken } from "@/modules/auth/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, authMessage } = useAppSelector(
    (state) => state.auth,
  );
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    dispatch(
      login({
        email: data.email,
        password: data.password,
      }),
    )
      .unwrap()
      .then((response) => {
        setAuthToken(response);
      })
      .catch((error) => form.setError("email", { message: error.message }));
  };

  useEffect(() => {
    if (authMessage && authMessage.length > 0) {
      toast({
        title: "Error",
        description: authMessage,
      });
      dispatch(setAuthMessage(""));
    }
  }, [authMessage, toast, dispatch]);

  return {
    form,
    onSubmit,
    isAuthenticated,
  };
};
