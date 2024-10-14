import { PrivateRoutes } from "@/core/enums";
import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setClassroomMessage, setSelectedClassroom } from "@/core/store/slices";
import {
  createClassroom,
  getClassroomById,
  updateClassroom,
} from "@/core/store/thunks";
import { FormTypes } from "@/core/types";
import { ClassroomDto } from "@/data/dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
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
  const { id } = useParams();
  const [title, setTitle] = useState<string>("Crear Aula");
  const [formType, setFormType] = useState<FormTypes>("create");
  const { isLoading, selectedClassroom, classroomMessage } = useAppSelector(
    (state) => state.classroom,
  );
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    const classroomDto: ClassroomDto = {
      name: data.name,
      building: Number(data.building),
      floor: data.floor,
      long_description: data.description,
    };

    if (formType === "create") {
      dispatch(createClassroom(classroomDto));
    } else {
      dispatch(updateClassroom({ id: Number(id), data: classroomDto }));
    }
  };

  const onCancel = () => {
    dispatch(setSelectedClassroom(null));
    navigate(PrivateRoutes.CLASSROOM);
  };

  useEffect(() => {
    if (id) {
      dispatch(getClassroomById(Number(id)));
      setTitle(`Información del Aula ${id}`);
      setFormType("update");
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedClassroom) {
      form.reset({
        name: selectedClassroom.name,
        building: selectedClassroom.building.toString(),
        floor: selectedClassroom.floor,
        description: selectedClassroom.long_description,
      });
    }
  }, [selectedClassroom, form]);

  useEffect(() => {
    if (classroomMessage && classroomMessage.length > 0) {
      toast({
        title: "Aulas",
        description: classroomMessage,
      });

      dispatch(setClassroomMessage(""));
      dispatch(setSelectedClassroom(null));
      navigate(PrivateRoutes.CLASSROOM);
    }
  }, [classroomMessage, toast, dispatch, navigate]);

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
