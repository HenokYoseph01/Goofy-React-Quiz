import React from "react";

export default function Progress({
  index,
  totalQuestions,
  score,
  maxPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={totalQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {totalQuestions}
      </p>
      <p>
        <strong>{score}</strong> / {maxPoints}
      </p>
    </header>
  );
}
