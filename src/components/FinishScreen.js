import React from "react";

export default function FinishScreen({ score, maxPoints, highScore }) {
  const percentage = (score / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🔥";
  if (percentage >= 80 && percentage < 100) emoji = "💪";
  if (percentage >= 50 && percentage < 80) emoji = "🤓";
  if (percentage >= 0 && percentage < 50) emoji = "😔";
  if (percentage === 0) emoji = "💀🥀";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You Scored <strong>{score}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
    </>
  );
}
