import React, { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { NavWrapper } from "../styles";
import { Link } from "react-router-dom";
import BookContext from "../../contexts/BookContext";

const Navbar = () => {
  const { addedBook } = useContext(BookContext);
  return (
    <NavWrapper className="genLayout">
      <h1>
        Q.<span>studio</span>
      </h1>

      <div className="navRight">
        <div className="navItems">
          <Link to="/">home</Link>
          <Link to="/blog">blog</Link>
          <Link to="/podcasts">podcasts</Link>
          <Link to="/books">books</Link>
          <Link to="/about">about</Link>
        </div>

        <div className="navIcons">
          <Link to="/cart">
            <FiShoppingBag />
            <span>{addedBook.length}</span>
          </Link>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
