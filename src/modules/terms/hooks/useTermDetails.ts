import { PrivateRoutes } from "@/core/enums";
import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setSelectedTerm, setTermMessage } from "@/core/store/slices";
import { createTerm, getTermById, updateTerm } from "@/core/store/thunks";
import { FormTypes } from "@/core/types";
import { TermDto } from "@/data/dto";
import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  range: z.object({
    from: z.date({ message: "La fecha de inicio es requerida" }),
    to: z.date({ message: "La fecha de fin es requerida" }),
  }),
  name: z
    .string({ message: "El nombre es requerido" })
    .min(3, { message: "El nombre es demasiado corto" })
    .max(255, { message: "El nombre es demasiado largo" }),
  active: z.boolean(),
});

export const useTermDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("Crear Periodo");
  const [formType, setFormType] = useState<FormTypes>("create");
  const { isLoading, selectedTerm, termMessage } = useAppSelector(
    (state) => state.term,
  );
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      range: {
        from: moment().toDate(),
        to: moment().add(6, "months").toDate(),
      },
      active: false,
      name: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const termDto: TermDto = {
      init: moment(data.range.from).format("YYYY-MM-DD HH:mm:ss"),
      end: moment(data.range.to).format("YYYY-MM-DD HH:mm:ss"),
      active: data.active,
    };

    if (formType === "update") {
      dispatch(updateTerm({ id: Number(id), data: termDto }));
    } else {
      dispatch(createTerm(termDto));
    }
  };

  const onCancel = () => {
    dispatch(setSelectedTerm(null));
    navigate(PrivateRoutes.TERM);
  };

  useEffect(() => {
    if (id) {
      dispatch(getTermById(Number(id)));
      setTitle(`Informacion del Periodo ${id}`);
      setFormType("update");
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedTerm) {
      form.reset({
        range: {
          from: moment(selectedTerm.init).toDate(),
          to: moment(selectedTerm.end).toDate(),
        },
        active: Boolean(selectedTerm.active),
        name: "",
      });
    }
  }, [selectedTerm, form]);

  useEffect(() => {
    if (termMessage && termMessage.length > 0) {
      toast({
        title: "Periodo",
        description: termMessage,
      });
      dispatch(setTermMessage(""));
      dispatch(setSelectedTerm(null));
      navigate(PrivateRoutes.TERM);
    }
  }, [termMessage, toast, dispatch, navigate]);

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
