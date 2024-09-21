import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  collapsedMenu: boolean;
  defaultLayout: number;
  isLoading: boolean;
}

const initialState: UIState = {
  collapsedMenu: false,
  defaultLayout: 20,
  isLoading: false,
};

export const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCollapsedMenu: (state) => {
      state.collapsedMenu = !state.collapsedMenu;
    },
    setDefaultLayout: (state, action) => {
      state.defaultLayout = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleCollapsedMenu, setDefaultLayout, setLoading } =
  UISlice.actions;
