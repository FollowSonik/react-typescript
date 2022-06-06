import React from "react";

import {fetchQuizQuestions, Difficulty} from "./API";

import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

export default function App(): React.ReactElement {
  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [number, setNumber] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  async function startTrivia() {}

  function checkAnswer(e: React.MouseEvent<HTMLButtonElement>) {
  }

  function nextQuestion() {}

  return <div>
    <h1>React Quiz</h1>
    <button
      className="start"
      onClick={startTrivia}
    >Start</button>
    <p className="score">Score</p>
    <p>Loading Questions...</p>
    {/* <QuestionCard 
      questionNumber={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers && userAnswers[number]}
      callback={checkAnswer}
    /> */}
    <button
      className="next"
      onClick={nextQuestion}
    >Next Question</button>
  </div>;
}