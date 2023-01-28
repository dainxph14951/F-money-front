import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAuth, register } from "../../api/auth";
import {
  deletelManyUser,
  deletelUser,
  getAllUser,
  updateUser,
} from "../../api/user";
import { userLogin } from "../../models/auth";

export const newUser = createAsyncThunk(
  "auth/newUser",
  async (formData: userLogin) => {
    const { data } = await register(formData);
    return data;
  }
);
export const getAll = createAsyncThunk("auth/getAllUser", async () => {
  const { data } = await getAllUser();
  return data;
});
const cusCopy = createSlice({
  name: "auth",
  initialState: {
    values: [],
    loading: false,
    message: "",
    check: [],
  },
  reducers: {},
  extraReducers: {
    [getAll.fulfilled]: (state, action) => {
      state.loading = false;
      state.values = action.payload.users;
    },
  },
});

export default cusCopy.reducer;
