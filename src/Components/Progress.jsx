/* eslint-disable react/prop-types */
export default function Progress({
  index,
  numQuestions,
  answer,
  points,
  total,
}) {
  return (
    <header className="text-white text-sm flex flex-col justify-center items-center w-full gap-1">
      <progress
        className="w-[70%] border rounded-2xl border-slate-500 fill-blue-600"
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <section className="flex justify-between w-[70%]">
        <p>
          Question <strong>{index + 1}</strong>/{numQuestions}
        </p>

        <p>
          <strong>{points}</strong>/{total}
        </p>
      </section>
    </header>
  );
}
