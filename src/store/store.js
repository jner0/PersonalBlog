import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./blog";

export const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
  },
});
