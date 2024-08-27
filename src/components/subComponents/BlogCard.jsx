import React from "react";
import { BlogCardWrapper } from "../styles";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  return (
    <BlogCardWrapper>
      <img src={item.img} alt="car" />

      <div className="blogCardContent">
        <span>by {item.author}</span>
        <h3>{item.title}</h3>
        <p>{item.desp}</p>

        <div className="infoTag">
          <span>{item.date}</span>
          <Link to={`/book/${item.author}`}>click for more...</Link>
        </div>
      </div>
    </BlogCardWrapper>
  );
};

export default BlogCard;
