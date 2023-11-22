/* eslint-disable react/prop-types */
export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="text-white gap-2 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold">Welcome to the React Quiz!!</h1>
      <p className="text-xl text-center">
        {numQuestions} questions to test your React mastery
      </p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="rounded-lg gap-2 bg-slate-600 p-4 shadow-white hover:animate-pulse shadow-inner"
      >
        Let&apos;s start
      </button>
    </div>
  );
}
