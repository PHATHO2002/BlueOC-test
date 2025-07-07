// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import callAPiReducer from "./apiSlice";

export const store = configureStore({
  reducer: {
    callAPi: callAPiReducer,
  },
});
