/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const sec = Math.floor(secondsRemaining % 60);
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "quiz/timer" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="bg-slate-800 text-white text-sm px-4 py-2 rounded-lg">
      {sec < 10 ? `${mins}:0${sec}` : `${mins}:${sec}`}
    </div>
  );
}
