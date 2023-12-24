/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();
const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "data/received":
      return { ...state, status: "ready", questions: action.payload };
    case "data/failed":
      return { ...state, status: "error" };
    case "quiz/start":
      return {
        ...state,
        status: "start",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "quiz/end":
      return {
        ...state,
        status: "finished",
        highscore:
          state.highscore < state.points ? state.points : state.highscore,
      };
    case "quiz/restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    case "quiz/timer":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    case "quiz/answer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }

    case "quiz/nextquestion":
      return { ...state, index: state.index + 1, answer: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const total = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(function () {
    fetch("http://localhost:8080/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "data/received", payload: data }))
      .catch((err) => dispatch({ type: "data/failed", payload: err.message }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        dispatch,
        numQuestions,
        total,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("QuizContext is accessed outised QuizProvider");
  }

  return context;
}

export { QuizProvider, useQuiz };
