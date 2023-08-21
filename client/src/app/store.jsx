import { configureStore } from "@reduxjs/toolkit";
import transacReducer from "../features/transacSlice";
export const store = configureStore({
  reducer: {
    transac: transacReducer,
  },
});
