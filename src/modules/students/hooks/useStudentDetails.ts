import { PrivateRoutes } from "@/core/enums";
import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setSelectedStudent, setStudentMessage } from "@/core/store/slices/studentSlice";
import { 
  createStudent,
  getStudentById,
  updateStudent,
} from "@/core/store/thunks/studentThunks";
import { FormTypes } from "@/core/types";
import { StudentDto } from "@/data/dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(6, "El nombre debe tener al menos 6 carácteres"),
    lastname: z.string().min(6, "El apellido debe tener al menos 6 carácteres"),
    phone: z
      .string()
      .min(10, "El teléfono debe tener al menos 10 carácteres")
      .regex(/^\d+$/, "El teléfono solo debe contener números"),
    email: z.string().email("El email no es válido"),
});

export const useStudentDetails = () => {
    const { id } = useParams();
    const [title, setTitle] = useState<string>("Crear Alumno");
    const [formType, setFormType] = useState<FormTypes>("create");
    const { isLoading, selectedStudent, studentMessage } = useAppSelector(
    (state) => state.student,
    );
    const { toast } = useToast();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        lastname: "",
        phone: "",
        email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const studentDto: StudentDto = {
      name: data.name,
      lastname: data.lastname,
      phone:data.phone,
      email:data.phone,

    };

    if (formType === "update") {
      dispatch(updateStudent({ id: Number(id), data: studentDto }));
    } else {
      dispatch(createStudent(studentDto));
    }
  };

  const onCancel = () => {
    dispatch(setSelectedStudent(null));
    navigate(PrivateRoutes.TEACHER);
  };

  useEffect(() => {
    if (id) {
      dispatch(getStudentById(Number(id)));
      setTitle(`Informacion del Maestro ${id}`);
      setFormType("update");
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedStudent) {
      form.reset({
        name: selectedStudent.name,
        lastname: selectedStudent.lastname,
        email: selectedStudent.email,
        phone: selectedStudent.phone,
      });
    }
  }, [selectedStudent, form]);

  useEffect(() => {
    if (studentMessage && studentMessage.length > 0) {
      toast({
        title: "Alumno",
        description: studentMessage,
      });
      dispatch(setStudentMessage(""));
      dispatch(setSelectedStudent(null));
      navigate(PrivateRoutes.TEACHER);
    }
  }, [studentMessage, toast, navigate, dispatch]);

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
