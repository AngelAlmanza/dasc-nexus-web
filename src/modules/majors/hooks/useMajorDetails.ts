import { PrivateRoutes } from "@/core/enums";
import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setMajorMessage, setSelectedMajor } from "@/core/store/slices";
import { createMajor, getMajorById, updateMajor } from "@/core/store/thunks";
import { FormTypes } from "@/core/types";
import { CareerDto } from "@/data/dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  career: z.string().min(6, "La carrera debe tener al menos 6 carácteres"),
});

export const useMajorDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("Crear Carrera");
  const [formType, setFormType] = useState<FormTypes>("create");
  const { isLoading, selectedMajor, majorMessage } = useAppSelector(
    (state) => state.major,
  );
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      career: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const majorDto: CareerDto = {
      name: data.career,
    };

    if (formType === "update") {
      dispatch(updateMajor({ id: Number(id), data: majorDto }));
    } else {
      dispatch(createMajor(majorDto));
    }
  };

  const onCancel = () => {
    dispatch(setSelectedMajor(null));
    navigate(PrivateRoutes.MAJOR);
  };

  useEffect(() => {
    if (id) {
      dispatch(getMajorById(Number(id)));
      setTitle(`Informacion de la Carrera ${id}`);
      setFormType("update");
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedMajor) {
      form.reset({
        career: selectedMajor.name,
      });
    }
  }, [selectedMajor, form]);

  useEffect(() => {
    if (majorMessage && majorMessage.length > 0) {
      toast({
        title: "Carrera",
        description: majorMessage,
      });
      dispatch(setMajorMessage(""));
      dispatch(setSelectedMajor(null));
      navigate(PrivateRoutes.MAJOR);
    }
  }, [majorMessage, toast, navigate, dispatch]);

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
