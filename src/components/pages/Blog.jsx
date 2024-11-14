import React from "react";
import { useLocation, Link } from "react-router-dom";
import Trending from "../subComponents/Trending";
import BlogT from "../subComponents/BlogT";
import Categories from "../subComponents/Categories";
import Button from "../subComponents/Button";


const Blog = () => {
  const location = useLocation();

  return (
    <div className="blog genLayout">
      <h1>{location.pathname.replace(/\//g, " ")}</h1>
      <Trending />

      <Categories>
        <Link to="#">View all</Link>
        <Link to="#">Fashion</Link>
        <Link to="#">Culture</Link>
        <Link to="#">Business</Link>
        <Link to="#">Opinion</Link>
        <Link to="#">Art</Link>
      </Categories>

      <BlogT />
     
   <Button />
    </div>
  );
};

export default Blog;
