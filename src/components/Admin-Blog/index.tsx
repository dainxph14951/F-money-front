import React, { useEffect } from "react";
import { listBlog } from "../../api/Blog";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllListBlogs } from "../../features/Blog/blogSlice";
import BreadcrumbComponent from "../Breadcrumb";
import SearchBlock from "./SearchBlock";
import TableBlogs from "./TableBlogs";

type Props = {};

const ListBlogs = (props: Props) => {
<<<<<<< HEAD
  // const blogs = useAppSelector((state) => state.blog.value);
  const blogs = useAppSelector((state) => state.blog.values);

  console.log("blogs", blogs);

=======
  const blogs = useAppSelector((state) => state.blog.value);
  const dispatch = useAppDispatch();
>>>>>>> origin/Develop
  useEffect(() => {
    dispatch(getAllListBlogs());
  }, []);

  return (
    <div>
      <BreadcrumbComponent />
      <SearchBlock />
      <TableBlogs data= {blogs}/>
    </div>
  );
};

export default ListBlogs;
