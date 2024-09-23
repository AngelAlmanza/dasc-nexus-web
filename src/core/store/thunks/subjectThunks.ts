import { SubjectRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const subjectRepository = new SubjectRepository();

const getSubjects = createAsyncThunk("subject/getSubjects", async () => {
  const data = await subjectRepository.getAll();
  return data;
});

export { getSubjects };
