import React from "react";

function Header({ name, tagline }) {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#4CAF50",
        color: "white",
      }}
    >
      <h1>{name}</h1>
      <p>{tagline}</p>
    </header>
  );
}

export default Header;
