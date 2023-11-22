/* eslint-disable react/prop-types */
export default function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn-option ${index === answer ? "option-select" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "bg-blue-500 shadow-none"
                : "bg-yellow-500 text-black shadow-none"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
