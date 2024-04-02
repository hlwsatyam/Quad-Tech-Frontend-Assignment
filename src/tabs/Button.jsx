import React from "react";

const Button = ({ label = "Continue", onPress, ...className }) => {
  return (
    <button onClick={onPress} {...className}>
      {label}
    </button>
  );
};

export default Button;
