import { configureStore } from "@reduxjs/toolkit";
import schoolReducer from "./schoolSlice";

export const store = configureStore({
  reducer: {
    school: schoolReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
