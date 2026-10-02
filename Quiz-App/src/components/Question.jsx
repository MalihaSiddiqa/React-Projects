import { useState } from "react";
import questions from "../data/questions.js";
import Result from "./Result.jsx";

const Question = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const currQuestion = questions[currentIndex];
  const total = questions.length;

  const handleSelect = (c) => {
    if (selected !== null) return;
    setSelected(c);
    if (c === currQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };
  const handleNext = () => {
    setSelected(null);
    setCurrentIndex((prev) => prev + 1);
  };

  if (!currQuestion) {
    return <Result score={score} total={total} />;
  }
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-slate-500">
        Question {currentIndex + 1} of {total}
      </p>

      <h2 className="text-lg">{currQuestion.question}</h2>

      <ul className="flex flex-col gap-2">
        {currQuestion.choices.map((choice) => {
         const isSelected= selected === choice
          const isCorrect = choice === currQuestion.answer;
          let bgStyle = "bg-linear-135 from-slate-800 to-slate-700";

          if (selected !== null) {
            if (isCorrect) {
              bgStyle = "bg-emerald-600 ";
            } else if(isSelected) {
              bgStyle = "bg-rose-600";
            }
          }
          return (
            <li key={choice}>
              <button
                type="button"
                onClick={() => handleSelect(choice)}
                className={`w-full rounded-lg p-3 text-left transition hover:translate-x-1 ${bgStyle}`}
              >
                {choice}
              </button>
            </li>
          );
        })}
      </ul>

      {/* next btn */}
      {selected && (
        <button
          onClick={handleNext}
          className="w-full rounded-lg bg-linear-135 from-orange-500 to-amber-400 p-3 font-semibold text-white transition hover:scale-103"
        >
          {currentIndex + 1 === total ? "Show Result" : "Next Question"}
        </button>
      )}
    </div>
  );
};

export default Question;
