import { ApiAxiosInstance } from "@/core/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = ApiAxiosInstance.getInstance();

interface LoginResponse {
  data: string;
  message: string;
  status: number;
}

const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, thnkAPI) => {
    try {
      const response = await api.post<LoginResponse>(`/login`, payload);
      return response.data.data;
    } catch (error) {
      console.error("ERROR => ", error);
      if (error instanceof Error && "status" in error) {
        const typedError = error as { status: number };
        if (typedError.status === 401) {
          return thnkAPI.rejectWithValue("Credenciales incorrectas");
        }
      }
      return thnkAPI.rejectWithValue("Error al iniciar sesión,");
    }
  },
);

export { login };
