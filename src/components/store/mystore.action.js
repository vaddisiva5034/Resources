import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const incrementByAction = createAction("incrementBy", (value) => {
  return {
    payload: value,
  };
});

export const decrmentByAction = createAction("decrmentBy", () => {
  return {
    payload: 1,
  };
});

export const updateAgeActopm = createAction("ageasjdkjaw", (newAge) => {
  return {
    payload: newAge,
  };
});

export const updateTitleAction = createAsyncThunk("updatetitle", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicodea.com/todos/1"
  );
  return response.data.title;
});
