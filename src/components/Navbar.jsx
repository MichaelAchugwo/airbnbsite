import React from "react";

export default function Navbar({ loginPic }) {
  return (
    <nav>
      <h4 className="logo">
        <i className="fa-brands fa-airbnb"></i>
        <span className="airbnb" style={{ paddingLeft: 5 + "px" }}>
          airbnb
        </span>
      </h4>
      {loginPic}
    </nav>
  );
}
