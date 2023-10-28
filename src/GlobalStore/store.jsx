import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "./slices/staffSlice";

export const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
});
