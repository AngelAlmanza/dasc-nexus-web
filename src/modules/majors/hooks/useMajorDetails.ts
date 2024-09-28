import { PrivateRoutes } from "@/core/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  career: z.string().min(6, "La carrera debe tener al menos 6 carácteres"),
  created_at: z.date(),
});

export const useMajorDetails = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      career: "",
      created_at: new Date(),
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const onCancel = () => {
    navigate(PrivateRoutes.MAJOR);
  };

  return {
    form,
    onSubmit,
    onCancel,
  };
};
