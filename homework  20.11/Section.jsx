import React from "react";

function Section({ title, children }) {
  return (
    <section style={{ margin: "20px 0" }}>
      <h2 style={{ borderBottom: "2px solid #4CAF50", paddingBottom: "5px" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;
