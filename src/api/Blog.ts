import { isAuthenticate } from "../ultils/localStorage";
import intance from "./intance";
const user = isAuthenticate();
let header = {};
if (user) {
  let toke = user.inforUser.token;
  header = {
    headers: {
      Authorization: `${toke}`,
    },
  };
}
export const listBlog = () => {
  const url = `/blogs`;
  return intance.get(url, header);
};

export const listBlogLatest = () => {
  const url = `/blogs-latest`;
  return intance.get(url, header);
};

export const getDetailBlog = (id: String) => {
  const url = `/blogs/${id}`;
  return intance.get(url, header);
};

export const createBlog = (bank: any) => {
  const url = `/blog/add`;
  return intance.post(url, bank, header);
};

export const editBlog = (id: any) => {
  const url = `/blog/${id}`;
  return intance.put(url, header);
};

export const deleteBlog = (id: any) => {
  const url = `/blog/${id}`;
  return intance.delete(url, header);
};
