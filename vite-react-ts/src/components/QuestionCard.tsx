import React from "react";

import {AnswerObject} from "../App";

import {Wrapper, ButtonWrapper} from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback(e: React.MouseEvent<HTMLButtonElement>): void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuestionCard({
  answers,
  callback,
  question,
  questionNumber,
  totalQuestions,
  userAnswer
}: Props): React.ReactElement {
  return <Wrapper>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}}></p>
    <div>
      {answers.map(answer => {
        return <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
          <button
            disabled={!!userAnswer}
            onClick={callback}
            value={answer}
          >
            <span dangerouslySetInnerHTML={{__html: answer}} />
          </button>
        </ButtonWrapper>;
      })}
    </div>
  </Wrapper>;
};