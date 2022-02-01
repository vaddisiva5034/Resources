import { createSlice, configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "./mystore.reducer";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
