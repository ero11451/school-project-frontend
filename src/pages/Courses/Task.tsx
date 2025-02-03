import { useState } from "react";
import { IOption } from "../../interface/IClass";
import confetti from "canvas-confetti";



export default function Task({  options  }: { options : IOption[]}) {
  const [selectedAnswer , setSelectedAnswer] = useState<IOption>();


  const celebrate = (option:IOption) => {
    setSelectedAnswer(option)
    if(option.isCorrect) {
    confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      y: 0.6
    }
   });
  }

}

  return (
    <div className="flex-1">
      <div className="max-w-2xl mx-auto  p-4 dark:bg-neutral-800 dark:text-white bg-white flex-1 shadow rounded-lg">
        {/* <h1 className="text-2xl font-bold mb-4">{question}</h1> */}
        <div className="space-y-2 flex flex-col">
          {options?.map((option: IOption) => (
            <button
              key={option?.testId}
              onClick={() => celebrate(option)}
              className={`w-full text-left p-2 border rounded dark:text-black  dark:bg-neutral-600 dark:text-white dark:border-gray-700 bg-gray-100 border-gray-300`}
            >
              {option.optionText}
            </button>
          ))}
        </div>
   

        {selectedAnswer?.testId &&  <div className={`mt-4 flex justify-between p-2 rounded ${selectedAnswer?.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
             <p>   {selectedAnswer?.optionText }</p>
             <p>  {selectedAnswer?.isCorrect ? 'Is correct' : 'Is incorrect'} </p>
          </div> 
}
      </div>
    </div>
  );
}
