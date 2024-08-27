import React from "react";
import { Items } from "../../Data";
import { Link, useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const params = useParams();

  const book = Items[3].categorizedBlogs?.find((bk) => bk.author === params.id);
  return (
    <div className="genLayout">
      <Link to="/books">Back</Link>

      <div>{book.desp}</div>
    </div>
  );
};

export default BookDetailsPage;
