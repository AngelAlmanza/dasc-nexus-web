import { PrivateRoutes } from "@/core/enums";
import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setPlanMessage, setSelectedPlan } from "@/core/store/slices";
import {
  createPlan,
  getPlanById,
  updatePlan,
  getMajors,
} from "@/core/store/thunks";
import { FormTypes } from "@/core/types";
import { PlanDto } from "@/data/dto";
import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(6, "El nombre debe tener al menos 6 carácteres"),
  career_id: z.string().min(1, "La carrera es requerida"),
  range: z.object({
    from: z.date({ message: "La fecha de inicio es requerida" }),
    to: z.date({ message: "La fecha de fin es requerida" }),
  }),
});

export const usePlanDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("Crear Plan de Estudios");
  const [formType, setFormType] = useState<FormTypes>("create");
  const { isLoading, selectedPlan, planMessage } = useAppSelector(
    (state) => state.plan,
  );
  const { majors } = useAppSelector((state) => state.major);
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      career_id: "",
      range: {
        from: moment().toDate(),
        to: moment().add(6, "months").toDate(),
      },
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const planDto: PlanDto = {
      name: data.name,
      career_id: Number(data.career_id),
      init: moment(data.range.from).format("YYYY-MM-DD HH:mm:ss"),
      end: moment(data.range.to).format("YYYY-MM-DD HH:mm:ss"),
    };

    if (formType === "update") {
      dispatch(updatePlan({ id: Number(id), data: planDto }));
    } else {
      dispatch(createPlan(planDto));
    }
  };

  const onCancel = () => {
    dispatch(setSelectedPlan(null));
    navigate(PrivateRoutes.PLAN);
  };

  useEffect(() => {
    if (id) {
      dispatch(getPlanById(Number(id)));
      setTitle(`Informacion del Plan de Estudios ${id}`);
      setFormType("update");
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedPlan) {
      form.reset({
        name: selectedPlan.name,
        career_id: selectedPlan.career.id.toString(),
        range: {
          from: moment(selectedPlan.start).toDate(),
          to: moment(selectedPlan.end).toDate(),
        },
      });
    }
  }, [selectedPlan, form]);

  useEffect(() => {
    if (planMessage && planMessage.length > 0) {
      toast({
        title: "Plan",
        description: planMessage,
      });
      dispatch(setPlanMessage(""));
      dispatch(setSelectedPlan(null));
      navigate(PrivateRoutes.PLAN);
    }
  }, [planMessage, toast, navigate, dispatch]);

  useEffect(() => {
    dispatch(getMajors());
  }, [dispatch]);

  return {
    id,
    formType,
    title,
    majors,
    form,
    isLoading,
    onSubmit,
    onCancel,
  };
};
