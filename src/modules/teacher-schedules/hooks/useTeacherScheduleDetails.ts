import { PrivateRoutes } from "@/core/enums";
import { useToast } from "@/core/hooks";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import {
  setSelectedTeacherSchedule,
  setTeacherScheduleMessage,
} from "@/core/store/slices";
import {
  createTeacherSchedule,
  getClassrooms,
  getScheduleBlocks,
  getSubjects,
  getTeachers,
  getTeacherScheduleById,
  getTerms,
  updateTeacherSchedule,
} from "@/core/store/thunks";
import { FormTypes } from "@/core/types";
import { TeacherScheduleDto } from "@/data/dto";
import { getAllowedTeacherScheduleValues } from "@/modules/teacher-schedules/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  teacher: z.string({ message: "El profesor es requerido" }),
  subject: z.string({ message: "La materia es requerida" }),
  room: z.string({ message: "El aula es requerida" }),
  scheduleBlock: z.string({ message: "El bloque de horario es requerido" }),
  term: z.string({ message: "El periodo es requerido" }),
});

export const useTeacherScheduleDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("Crear Horario de Profesor");
  const [formType, setFormType] = useState<FormTypes>("create");
  const { isLoading, selectedTeacherSchedule, teacherScheduleMessage } =
    useAppSelector((state) => state.teacherSchedule);
  const { teachers } = useAppSelector((state) => state.teacher);
  const { subjects } = useAppSelector((state) => state.subject);
  const { classrooms } = useAppSelector((state) => state.classroom);
  const { terms } = useAppSelector((state) => state.term);
  const { scheduleBlocks } = useAppSelector((state) => state.scheduleBlocks);
  const { teacherSchedules } = useAppSelector((state) => state.teacherSchedule);
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teacher: "",
      subject: "",
      room: "",
      scheduleBlock: "",
      term: "",
    },
  });

  const selectedTeacher = useWatch({ control: form.control, name: "teacher" });
  const selectedScheduleBlock = useWatch({
    control: form.control,
    name: "scheduleBlock",
  });
  const selectedTerm = useWatch({ control: form.control, name: "term" });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const teacherScheduleDto: TeacherScheduleDto = {
      teacher_id: Number(data.teacher),
      subject_id: Number(data.subject),
      room_id: Number(data.room),
      schedule_block_id: Number(data.scheduleBlock),
      term_id: Number(data.term),
    };

    if (formType === "update") {
      dispatch(
        updateTeacherSchedule({ id: Number(id), data: teacherScheduleDto }),
      );
    } else {
      dispatch(createTeacherSchedule(teacherScheduleDto));
    }
  };

  const onCancel = () => {
    dispatch(setSelectedTeacherSchedule(null));
    navigate(PrivateRoutes.TEACHER_SCHEDULE);
  };

  const allowedValues = useMemo(() => {
    const values = getAllowedTeacherScheduleValues(
      teacherSchedules,
      teachers,
      scheduleBlocks,
      terms,
      Number(selectedTeacher),
      Number(selectedScheduleBlock),
      Number(selectedTerm),
    );
    return values;
  }, [
    selectedTeacher,
    selectedScheduleBlock,
    selectedTerm,
    teacherSchedules,
    teachers,
    scheduleBlocks,
    terms,
  ]);

  useEffect(() => {
    if (id) {
      dispatch(getTeacherScheduleById(Number(id)));
      setTitle(`Informacion del Horario de Profesor ${id}`);
      setFormType("update");
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedTeacherSchedule) {
      form.reset({
        teacher: selectedTeacherSchedule.teacher.id.toString(),
        subject: selectedTeacherSchedule.subject.id.toString(),
        room: selectedTeacherSchedule.room.id.toString(),
        scheduleBlock: selectedTeacherSchedule.schedule_block.id.toString(),
        term: selectedTeacherSchedule.term.id.toString(),
      });
    }
  }, [selectedTeacherSchedule, form]);

  useEffect(() => {
    if (teacherScheduleMessage && teacherScheduleMessage.length > 0) {
      toast({
        title: "Horario de Profesor",
        description: teacherScheduleMessage,
      });
      dispatch(setTeacherScheduleMessage(""));
      dispatch(setSelectedTeacherSchedule(null));
      navigate(PrivateRoutes.TEACHER_SCHEDULE);
    }
  }, [teacherScheduleMessage, toast, dispatch, navigate]);

  useEffect(() => {
    dispatch(getTeachers());
    dispatch(getSubjects());
    dispatch(getClassrooms());
    dispatch(getTerms());
    dispatch(getScheduleBlocks());
  }, [dispatch]);

  return {
    id,
    title,
    formType,
    form,
    isLoading,
    subjects,
    classrooms,
    allowedValues,
    onSubmit,
    onCancel,
  };
};
