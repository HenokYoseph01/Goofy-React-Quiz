import React from "react";

export default function ResetButton({ dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Reset Quiz
    </button>
  );
}
