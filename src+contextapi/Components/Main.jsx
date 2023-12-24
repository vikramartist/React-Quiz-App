import { useQuiz } from "../contexts/QuizContext";

/* eslint-disable react/prop-types */
export default function Main({ children }) {
  const { status: Status } = useQuiz();
  return (
    <div
      className={
        Status === "ready" || Status === "finished"
          ? "main-before"
          : "main-after"
      }
    >
      {children}
    </div>
  );
}
