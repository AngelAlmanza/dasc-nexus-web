import { login } from "@/core/store/thunks";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  token?: string;
  authMessage: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  authMessage: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAuthMessage: (state, action) => {
      state.authMessage = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.token = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.authMessage = action.payload as string;
    });
  },
});

export const { setAuthMessage, setIsAuthenticated, setToken } =
  AuthSlice.actions;
