import React from "react";
import { useFela } from "react-fela";

function Button({ children, fontSize = 16 }) {
  const { css } = useFela();

  return (
    <button
      className={css({
        padding: 10,
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
}
