import { useState } from "react";
import { Itest } from "../../interface/Ipost";

export interface TaskProps {
 
    question?: string;
    options?:Itest[] ;
  
}

export default function Task({ question, options  }: TaskProps) {
  const [selectedAnswer , setSelectedAnswer] = useState<Itest>({id:0, isCorrect:false,option:'', selected:false })

  return (
    <div className="flex-1">
      <div className="max-w-2xl mx-auto  p-4 dark:bg-neutral-800 dark:text-white bg-white flex-1 shadow rounded-lg">
        <h1 className="text-2xl font-bold mb-4">{question}</h1>
        <div className="space-y-2 flex flex-col">
          {options?.map((option: Itest) => (
            <button
              key={option?.id}
              onClick={() => setSelectedAnswer({...option, ...{selected:true}})}
              className={`w-full text-left p-2 border rounded dark:text-black  dark:bg-neutral-600 dark:text-white dark:border-gray-700 bg-gray-100 border-gray-300`}
            >
              {/* {option.isCorrect ? 'false' : 'true'} */}
              {option?.option}
            </button>
          ))}
        </div>
   

        {selectedAnswer?.selected &&  <div className={`mt-4 flex justify-between p-2 rounded ${selectedAnswer?.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
             <p>   {selectedAnswer?.option }</p>
             <p>  {selectedAnswer?.isCorrect ? 'Is correct' : 'Is incorrect'} </p>
          </div> 
}
      </div>
    </div>
  );
}
