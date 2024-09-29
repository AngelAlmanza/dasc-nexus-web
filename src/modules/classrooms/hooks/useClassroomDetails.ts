import { PrivateRoutes } from "@/core/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(6, "El nombre debe tener al menos 6 carácteres"),
  building: z.string().min(6, "El edificio debe tener al menos 6 carácteres"),
  floor: z
    .number()
    .int()
    .min(1, "El piso debe ser mayor a 0")
    .max(2, "El piso debe ser menor a 100"),
  description: z
    .string()
    .min(6, "La descripción debe tener al menos 6 carácteres"),
  capacity: z
    .number()
    .int()
    .min(15, "La capacidad debe ser mayor a 14")
    .max(50, "La capacidad debe ser menor a 50"),
});

export const useClassroomDetails = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      building: "",
      floor: 1,
      description: "",
      capacity: 15,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const onCancel = () => {
    navigate(PrivateRoutes.CLASSROOM);
  };

  return {
    form,
    onSubmit,
    onCancel,
  };
};
