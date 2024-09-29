import { PrivateRoutes } from "@/core/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(6, "El nombre debe tener al menos 6 carácteres"),
  lastname: z.string().min(6, "El apellido debe tener al menos 6 carácteres"),
  birthday: z.date(),
  address: z.string().min(6, "La dirección debe tener al menos 6 carácteres"),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 carácteres"),
  email: z.string().email("El email no es válido"),
});

export const useTeacherDetails = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastname: "",
      birthday: new Date(),
      address: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const onCancel = () => {
    navigate(PrivateRoutes.TEACHER);
  };

  return {
    form,
    onSubmit,
    onCancel,
  };
};
