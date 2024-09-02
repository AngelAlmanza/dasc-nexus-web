import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  collapsedMenu: boolean;
  defaultLayout: number;
}

const initialState: UIState = {
  collapsedMenu: false,
  defaultLayout: 20,
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
  },
});

export const { toggleCollapsedMenu, setDefaultLayout } = UISlice.actions;
