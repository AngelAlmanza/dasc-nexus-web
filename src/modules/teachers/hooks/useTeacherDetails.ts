import { PrivateRoutes } from "@/core/enums";
import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setSelectedTeacher, setTeacherMessage } from "@/core/store/slices";
import {
  createTeacher,
  getTeacherById,
  updateTeacher,
} from "@/core/store/thunks";
import { FormTypes } from "@/core/types";
import { TeacherDto } from "@/data/dto";
import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(6, "El nombre debe tener al menos 6 carácteres"),
  lastname: z.string().min(6, "El apellido debe tener al menos 6 carácteres"),
  birthday: z.date(),
  address: z.string().min(6, "La dirección debe tener al menos 6 carácteres"),
  phone: z
    .string()
    .min(10, "El teléfono debe tener al menos 10 carácteres")
    .regex(/^\d+$/, "El teléfono solo debe contener números"),
  email: z.string().email("El email no es válido"),
});

export const useTeacherDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("Crear Maestro");
  const [formType, setFormType] = useState<FormTypes>("create");
  const { isLoading, selectedTeacher, teacherMessage } = useAppSelector(
    (state) => state.teacher,
  );
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastname: "",
      birthday: moment("2000-01-01").toDate(),
      address: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const teacherDto: TeacherDto = {
      name: data.name,
      lastname: data.lastname,
      birthday: moment(data.birthday).format("YYYY-MM-DD"),
      address: data.address,
      phone: data.phone,
      email: data.email,
    };

    if (formType === "update") {
      dispatch(updateTeacher({ id: Number(id), data: teacherDto }));
    } else {
      dispatch(createTeacher(teacherDto));
    }
  };

  const onCancel = () => {
    dispatch(setSelectedTeacher(null));
    navigate(PrivateRoutes.TEACHER);
  };

  useEffect(() => {
    if (id) {
      dispatch(getTeacherById(Number(id)));
      setTitle(`Informacion del Maestro ${id}`);
      setFormType("update");
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedTeacher) {
      form.reset({
        name: selectedTeacher.name,
        lastname: selectedTeacher.lastname,
        birthday: moment(selectedTeacher.birthday).toDate(),
        address: selectedTeacher.address,
        phone: selectedTeacher.phone,
        email: selectedTeacher.email,
      });
    }
  }, [selectedTeacher, form]);

  useEffect(() => {
    if (teacherMessage && teacherMessage.length > 0) {
      toast({
        title: "Maestro",
        description: teacherMessage,
      });
      dispatch(setTeacherMessage(""));
      dispatch(setSelectedTeacher(null));
      navigate(PrivateRoutes.TEACHER);
    }
  }, [teacherMessage, toast, navigate, dispatch]);

  return {
    id,
    formType,
    title,
    form,
    isLoading,
    onSubmit,
    onCancel,
  };
};
