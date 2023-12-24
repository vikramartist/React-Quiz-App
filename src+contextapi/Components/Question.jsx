import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

/* eslint-disable react/prop-types */
export default function Question() {
  const { questions, index } = useQuiz();
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <h1 className="text-white text-xl font-semibold">
        {questions[index].question}
      </h1>
      <Options />
    </div>
  );
}
