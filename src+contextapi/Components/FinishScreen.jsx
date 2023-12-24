import { useQuiz } from "../contexts/QuizContext";

/* eslint-disable react/prop-types */
export default function FinishScreen() {
  const { points, total, highscore, dispatch } = useQuiz();
  const percentage = Math.ceil((points / total) * 100);
  return (
    <div className="w-[70%] text-white text-xl h-[50%] bg-blue-600 rounded-lg flex flex-col justify-center items-center gap-2">
      <p>
        You scored <strong>{points}</strong> out of {total} ({percentage}%)
      </p>
      <span className="text-sm">(Your HighScore: {highscore} points)</span>
      <button
        onClick={() => dispatch({ type: "quiz/restart" })}
        className="w-[25%] bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600"
      >
        Restart Quiz
      </button>
    </div>
  );
}
