import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "36px",
        height: "36px",
        cursor: "pointer",
        zIndex: "2",
        backgroundColor: "#fff",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
      }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
