import { PrivateRoutes } from "@/core/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(6, "El nombre debe tener al menos 6 carácteres"),
  key: z.string().min(6, "La clave debe tener al menos 6 carácteres"),
  credits: z
    .number({ message: "Los créditos deben ser un número" })
    .int()
    .positive("Los créditos deben ser un número positivo"),
  theory_hours: z
    .number({ message: "Las horas de teoría deben ser un número" })
    .int()
    .positive("Las horas de teoría deben ser un número positivo"),
  practice_hours: z
    .number({ message: "Las horas de práctica deben ser un número" })
    .int()
    .positive("Las horas de práctica deben ser un número positivo"),
  semester: z
    .number({ message: "El semestre debe ser un número" })
    .int()
    .positive("El semestre debe ser un número positivo"),
  area: z.string().min(4, "El área debe tener al menos 6 carácteres"),
  major: z.string().min(3, "La carrera debe tener al menos 3 carácteres"),
  plan: z.string().min(4, "El plan debe tener al menos 6 carácteres"),
});

export const useSubjectDetails = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      key: "",
      credits: 0,
      theory_hours: 0,
      practice_hours: 0,
      semester: 0,
      area: "",
      major: "",
      plan: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const onCancel = () => {
    navigate(PrivateRoutes.SUBJECT);
  };

  return {
    form,
    onSubmit,
    onCancel,
  };
};
