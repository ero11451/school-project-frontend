import { useState } from "react";

interface QAItem {
  question: string;
  answer: string;
  options: string[];
}

export default function Task() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const item: QAItem = {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{item.question}</h1>
      <div className="space-y-2">
        {item.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`w-full text-left p-2 border rounded ${selectedOption === option ? 'bg-blue-100 border-blue-300' : 'bg-gray-100 border-gray-300'
              }`}
          >
            {option}
          </button>
        ))}
      </div>
      {showAnswer && (
        <div className={`mt-4 p-2 rounded ${selectedOption === item.answer ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {selectedOption === item.answer ? "Correct!" : `Incorrect! The correct answer is ${item.answer}.`}
        </div>
      )}
    </div>
  );
}
