import { createSlice } from "@reduxjs/toolkit";

export type AppConfigsState = {
  token: string;
};

const appConfigsSlice = createSlice({
  name: "appConfigs",
  initialState: {
    token: localStorage.getItem("token") || "",
  },
  reducers: {
    updateToken: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
  },
});

export const { updateToken } = appConfigsSlice.actions;
export default appConfigsSlice.reducer;
