import { PrivateRoutes } from "@/core/enums";
import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setSelectedSubject, setSubjectMessage } from "@/core/store/slices";
import {
  createSubject,
  getSubjectById,
  updateSubject,
} from "@/core/store/thunks";
import { FormTypes } from "@/core/types";
import { SubjectDto } from "@/data/dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
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
  const { id } = useParams();
  const [title, setTitle] = useState<string>("Crear Materia");
  const [formType, setFormType] = useState<FormTypes>("create");
  const { isLoading, selectedSubject, subjectMessage } = useAppSelector(
    (state) => state.subject,
  );
  const { toast } = useToast();
  const dispatch = useAppDispatch();
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
    const subjectData: SubjectDto = {
      name: data.name,
      key: data.key,
      credits: data.credits,
      theory_hours: data.theory_hours,
      practice_hours: data.practice_hours,
      total_hours: data.theory_hours + data.practice_hours,
      id_area: Number(data.area),
      id_plan: Number(data.plan),
      id_career: Number(data.major),
    };

    if (formType === "update") {
      dispatch(updateSubject({ id: Number(id), data: subjectData }));
    } else {
      dispatch(createSubject(subjectData));
    }
  };

  const onCancel = () => {
    dispatch(setSelectedSubject(null));
    navigate(PrivateRoutes.SUBJECT);
  };

  useEffect(() => {
    if (id) {
      dispatch(getSubjectById(Number(id)));
      setTitle(`Información de la Materia ${id}`);
      setFormType("update");
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedSubject) {
      form.reset({
        name: selectedSubject.name,
        key: selectedSubject.key,
        credits: selectedSubject.credits,
        theory_hours: selectedSubject.theory_hours,
        practice_hours: selectedSubject.practice_hours,
        area: selectedSubject.id_area.toString(),
        major: selectedSubject.career.id.toString(),
        plan: selectedSubject.plan.id.toString(),
      });
    }
  }, [selectedSubject, form]);

  useEffect(() => {
    if (subjectMessage && subjectMessage.length > 0) {
      toast({
        title: "Materia",
        description: subjectMessage,
      });
      dispatch(setSubjectMessage(""));
      dispatch(setSelectedSubject(null));
      navigate(PrivateRoutes.SUBJECT);
    }
  }, [subjectMessage, toast, navigate, dispatch]);

  return {
    id,
    formType,
    form,
    title,
    isLoading,
    onSubmit,
    onCancel,
  };
};
