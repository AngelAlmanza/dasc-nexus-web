import { PrivateRoutes } from "@/core/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(6, "El nombre debe tener al menos 6 carácteres"),
  numberPlants: z
    .number()
    .min(1, "El numero plantas debe tener al menos 1 caracter")
    .max(2),
});

export const useBuildingDetails = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      numberPlants: 0,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const onCancel = () => {
    navigate(PrivateRoutes.BUILDING);
  };

  return {
    form,
    onSubmit,
    onCancel,
  };
};
