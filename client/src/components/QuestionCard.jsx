import { useState } from "react";

export default function QuestionCard({ questionData, handleAnswer, questionNumber, totalQuestions }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);
      setTimeout(() => {
        handleAnswer(option === questionData.correctAnswer);
        setSelectedOption(null);
      }, 1000);
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-lg text-center max-w-xl">
      <h2 className="text-xl font-semibold text-white mb-2">
        Question {questionNumber} of {totalQuestions}  
      </h2>
      <h2 className="text-2xl font-bold text-white">{questionData.question}</h2>
      <div className="mt-6 grid gap-4">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              selectedOption
                ? option === questionData.correctAnswer
                  ? "bg-green-500 text-white"
                  : option === selectedOption
                  ? "bg-red-500 text-white"
                  : "bg-white/20 text-white"
                : "bg-white/20 hover:bg-white/40 text-white"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
