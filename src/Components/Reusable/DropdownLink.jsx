import React from "react";
import { Link } from "react-router-dom";

const DropdownLink = ({ to, label }) => {
  return (
    <Link to={to} className="dropdown-link">
      {label}
    </Link>
  );
};

export default DropdownLink;
