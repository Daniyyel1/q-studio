import React from "react";
import { CategoryWrapper } from "../styles";
import { Link } from 'react-router-dom'

const Categories = ({children}) => {
  return (
    <CategoryWrapper>
      {children}
    </CategoryWrapper>
  );
};

export default Categories;
