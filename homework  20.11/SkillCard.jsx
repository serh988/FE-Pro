import React from "react";

function SkillCard({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        width: "200px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SkillCard;
