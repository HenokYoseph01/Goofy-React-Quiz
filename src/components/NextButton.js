import React from "react";

export default function NextButton({
  dispatch,
  answer,
  index,
  totalQuestions,
}) {
  //Early return here, if answer is null don't show the next button
  if (answer === null) return null;
  if (index < totalQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === totalQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}
