import React from "react";
import { useFela } from "react-fela";

const Button = ({ children, fontSize = 16 }) => {
  const { css } = useFela();

  return (
    <button
      className={css({
        padding: ".5em",
        borderRadius: "8px",
        fontSize,
        color: "darkblue",
        ":hover": {
          color: "blue"
        }
      })}
    >
      {children}
    </button>
  );
};

export default Button;
