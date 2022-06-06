type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
  return <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}}></p>
    <div>
      {answers.map(answer => {
        return <div>
          <button
            disabled={userAnswer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{__html: answer}} />
          </button>
        </div>;
      })}
    </div>
  </div>;
};