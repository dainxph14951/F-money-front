import React, { useEffect, useState } from "react";
import BreadcrumbComponent from "../../Breadcrumb";
import SearchBlock from "./SearchBlock";
import TableBlog from "./TableBlog";

function ListBlock() {
  return (
    <div>
      <BreadcrumbComponent />
      <SearchBlock />
      <TableBlog />
    </div>
  );
}

export default ListBlock;
