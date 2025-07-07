import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addPost: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { setData, addPost } = apiSlice.actions;
export default apiSlice.reducer;
