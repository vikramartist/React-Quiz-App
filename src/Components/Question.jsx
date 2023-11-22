import Options from "./Options";

/* eslint-disable react/prop-types */
export default function Question({ question, answer, dispatch }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <h1 className="text-white text-xl font-semibold">{question.question}</h1>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
