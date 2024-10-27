import { PrivateRoutes } from "@/core/enums";
import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setGroupMessage, setSelectedGroup } from "@/core/store/slices";
import {
  createGroup,
  getGroupById,
  getMajors,
  getPlans,
  updateGroup,
} from "@/core/store/thunks";
import { FormTypes } from "@/core/types";
import { GroupDto } from "@/data/dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const formShcema = z.object({
  semester: z.string().min(1, "El semestre es requerido"),
  shift: z.string().min(1, "El turno es requerido"),
  career_id: z.string().min(1, "La carrera es requerida"),
  plan_id: z.string().min(1, "El plan es requerido"),
});

export const useGroupDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("Crear Grupo");
  const [formType, setFormType] = useState<FormTypes>("create");
  const { isLoading, selectedGroup, groupMessage } = useAppSelector(
    (state) => state.group,
  );
  const { majors } = useAppSelector((state) => state.major);
  const { plans } = useAppSelector((state) => state.plan);
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formShcema>>({
    resolver: zodResolver(formShcema),
    defaultValues: {
      semester: "",
      shift: "",
      career_id: "",
      plan_id: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formShcema>) => {
    const groupDto: GroupDto = {
      semester: Number(data.semester),
      shift: data.shift,
      career_id: Number(data.career_id),
      plan_id: Number(data.plan_id),
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
        shift: selectedGroup.shift.toString(),
        career_id: selectedGroup.careerId.toString(),
        plan_id: selectedGroup.planId.toString(),
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

  useEffect(() => {
    dispatch(getMajors());
    dispatch(getPlans());
  }, [dispatch]);

  return {
    id,
    formType,
    title,
    form,
    isLoading,
    majors,
    plans,
    onSubmit,
    onCancel,
  };
};
