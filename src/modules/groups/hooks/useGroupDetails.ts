import { PrivateRoutes, Shifts } from "@/core/enums";
import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setGroupMessage, setSelectedGroup } from "@/core/store/slices";
import { createGroup, getGroupById, updateGroup } from "@/core/store/thunks";
import { FormTypes } from "@/core/types";
import { GroupDto } from "@/data/dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const formShcema = z.object({
  semester: z.string().min(1, "El semestre es requerido"),
  shift: z.nativeEnum(Shifts, {
    message: "El turno seleccionado no existe",
    required_error: "El turno es requerido",
  }),
});

export const useGroupDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("Crear Grupo");
  const [formType, setFormType] = useState<FormTypes>("create");
  const { isLoading, selectedGroup, groupMessage } = useAppSelector(
    (state) => state.group,
  );
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formShcema>>({
    resolver: zodResolver(formShcema),
    defaultValues: {
      semester: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formShcema>) => {
    const groupDto: GroupDto = {
      semester: Number(data.semester),
      shift: data.shift,
    };

    if (formType === "update") {
      dispatch(updateGroup({ id: Number(id), data: groupDto }));
    } else {
      dispatch(createGroup(groupDto));
    }
  };

  const onCancel = () => {
    dispatch(setSelectedGroup(null));
    navigate(PrivateRoutes.GROUP);
  };

  useEffect(() => {
    if (id) {
      dispatch(getGroupById(Number(id)));
      setTitle(`Informacion del Grupo ${id}`);
      setFormType("update");
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedGroup) {
      form.reset({
        semester: selectedGroup.semester.toString(),
        shift: selectedGroup.shift,
      });
    }
  }, [selectedGroup, form]);

  useEffect(() => {
    if (groupMessage && groupMessage.length > 0) {
      toast({
        title: "Grupo",
        description: groupMessage,
      });
      dispatch(setGroupMessage(""));
      dispatch(setSelectedGroup(null));
      navigate(PrivateRoutes.GROUP);
    }
  }, [groupMessage, dispatch, toast, navigate]);

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
