/* eslint-disable react/prop-types */
export default function NextButton({ answer, dispatch, index, numQuestions }) {
  if (answer === null) return;

  if (index < numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion", payload: null })}
        className="p-2 w-[5rem] bg-slate-400 self-end rounded-lg hover:bg-slate-500"
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "end" })}
        className="p-2 w-[5rem] bg-slate-400 self-end rounded-lg hover:bg-slate-500"
      >
        Finish
      </button>
    );
  }
}
