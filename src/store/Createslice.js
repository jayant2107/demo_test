import { createSlice } from "@reduxjs/toolkit";

const bookslice = createSlice({
  name: "login",
  initialState: {
    data: null,
  },
  reducers: {
    logindata: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { logindata } = bookslice.actions;
export default bookslice.reducer;
