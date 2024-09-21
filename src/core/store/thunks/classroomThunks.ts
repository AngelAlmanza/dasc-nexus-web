import { ClassroomRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const classroomRepository = new ClassroomRepository();

const getClassrooms = createAsyncThunk("classroom/getClassrooms", async () => {
  const data = await classroomRepository.getAll();
  return data;
});

export { getClassrooms };
