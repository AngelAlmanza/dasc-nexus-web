import { CareerRepository } from "@/data/repositories";
import { createAsyncThunk } from "@reduxjs/toolkit";

const majorsRepository = new CareerRepository();

const getMajors = createAsyncThunk("major/getMajors", async () => {
  const data = await majorsRepository.getAll();
  return data;
});

export { getMajors };
