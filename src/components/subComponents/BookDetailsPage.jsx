import React from "react";
import { Items } from "../../Data";
import { Link, useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const params = useParams();


  const book = Items[1].categorizedBooks?.find((bk) => bk.author === params.id);
  return (
    <div className="genLayout">
      <Link to="/books">Back</Link>

      <p>Book Page</p>

      <div>{book.descp}</div>
    </div>
  );
};

export default BookDetailsPage;
