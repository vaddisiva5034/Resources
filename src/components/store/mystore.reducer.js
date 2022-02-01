import { createSlice } from "@reduxjs/toolkit";
import {
  incrementByAction,
  decrmentByAction,
  updateAgeActopm,
  updateTitleAction,
} from "./mystore.action";

const initialState = {
  value: 0,
  name: "kiran",
  age: 12,
  title: "test",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: {
    [incrementByAction.toString()]: (state, action) => {
      state.value += action.payload;
    },
    [decrmentByAction.toString()]: (state, action) => {
      state.value -= action.payload;
    },
    [updateAgeActopm.toString()]: (state, action) => {
      state.age = action.payload;
    },
    [updateTitleAction.fulfilled.toString()]: (state, action) => {
      state.title = action.payload;
    },
    [updateTitleAction.rejected.toString()]: (state, action) => {
      state.title = "some thing went wrong";
    },
  },
});
