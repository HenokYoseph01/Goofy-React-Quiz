import React from "react";

export default function StartScreen({ totalNum, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The Saddest Quiz Ever Made!</h2>
      <h3>{totalNum} questions to test your Goofy Dev Skills Gang</h3>
      <button
        className="btn btn-ui"
        id="gradient"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
