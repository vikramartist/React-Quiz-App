import { useQuiz } from "../contexts/QuizContext";

/* eslint-disable react/prop-types */
export default function NextButton() {
  const { answer, dispatch, index, numQuestions } = useQuiz();
  if (answer === null) return;

  if (index < numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "quiz/nextquestion", payload: null })}
        className="p-2 w-[5rem] bg-slate-400 self-end rounded-lg hover:bg-slate-500"
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "quiz/end" })}
        className="p-2 w-[5rem] bg-slate-400 self-end rounded-lg hover:bg-slate-500"
      >
        Finish
      </button>
    );
  }
}
