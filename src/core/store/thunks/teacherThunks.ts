import { TeacherRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const teacherRepository = new TeacherRepository();

const getTeachers = createAsyncThunk("teacher/getTeachers", async () => {
  const data = await teacherRepository.getAll();
  return data;
});

export { getTeachers };
