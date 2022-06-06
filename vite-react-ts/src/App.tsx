import React from "react";

import {fetchQuizQuestions, Difficulty, QuestionState} from "./API";

import QuestionCard from "./components/QuestionCard";

import {GlobalStyle, Wrapper} from "./App.styles";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

export default function App(): React.ReactElement {
  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState<QuestionState[]>([]);
  const [number, setNumber] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [score, setScore] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(true);

  console.log(questions);

  async function startTrivia() {
    setLoading(true);
    setIsGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  function checkAnswer(e: React.MouseEvent<HTMLButtonElement>) {
    if (!isGameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(prev => prev + 1);

      const answerObject: AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };

      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  function nextQuestion() {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setIsGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return <>
    <GlobalStyle />
    <Wrapper>
      <h1>React Quiz</h1>
      {(isGameOver || userAnswers.length === TOTAL_QUESTIONS) &&
      <button
        className="start"
        onClick={startTrivia}
      >Start</button>}
      {!isGameOver && <p className="score">Score: {score}.</p>}
      {loading && <p>Loading Questions...</p>}
      {!loading && !isGameOver && <QuestionCard 
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers && userAnswers[number]}
        callback={checkAnswer}
      />}
      {(
        !(isGameOver && loading) &&
        (
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1
        )
      ) &&
        <button
        className="next"
        onClick={nextQuestion}
      >Next Question</button>
      }
    </Wrapper>
  </>;
}