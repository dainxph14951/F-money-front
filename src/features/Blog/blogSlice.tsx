import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBlog, listBlog } from "../../api/Blog";

interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};

export const getAllListBlogs = createAsyncThunk(
  "blog/getAllListBlogs",
  async () => {
    // const { data } = await listBlog();
    console.log(1111111);
    // return data;
  }
);
export const addBlog = createAsyncThunk(
  "blog/addBlog",
  async (blog : any) => {
    const { data } = await createBlog(blog);
    return data;
  }
);
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    values: [],
    loading: false,
    message: "",
    check: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllListBlogs.fulfilled, (state, action) => {
      console.log(22222222);
      // state.values = action.payload;
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
  },
});

export default blogSlice.reducer;
