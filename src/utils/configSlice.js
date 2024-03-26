import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    isSignOut: false,
    isProfileClick: false,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    updateSignOut: (state, action) => {
      state.isSignOut = action.payload;
    },
    toggleProfileClick: (state, action) => {
      state.isProfileClick = action.payload;
    },
  },
});

export const { changeLanguage, updateSignOut, toggleProfileClick } =
  configSlice.actions;
export default configSlice.reducer;
