// import Logo from "../../component/Logo";

import { useParams } from "react-router-dom";
import Detail from "./Detail";
import { useQuery } from "@tanstack/react-query";
import { categoryGetById } from "../../service/category";
import { Ipost } from "../../interface/Ipost";
import { useState } from "react";
import Task from "./Task";

const categoryDefultData = {
  id: 1,
  imageUrl: 'image/Frame 1000004809.svg',
  category: "Programming",
  name: 'JavaScript Fundamentals',
  content: 'Learn the core concepts of JavaScript, including variables, functions, loops, and object-oriented programming. Dive into modern features like ES6 syntax, asynchronous programming, and the DOM, empowering you to create dynamic web applications.',
  description: 'This course provides a comprehensive introduction to JavaScript, equipping students with the skills to write clean, efficient code and build interactive web applications. Suitable for beginners and those looking to enhance their JavaScript knowledge.',
  teacher: {
    username: "osamuyi joseph ero",
    email: "string"
  },
}
const defultData = [{
  id: 1,
  title: "Understanding Scope in JavaScript",
  content: 
    "In this class, we'll dive into the concept of scope in JavaScript. You'll learn about the different types of scope: global, local, and block scope. We'll also cover how variable declarations with `var`, `let`, and `const` interact with scope and the importance of closures in JavaScript programming.",
  imgUrl: "image/Frame 1000004810.svg", // Update with an actual image URL if available
  videoUrl: "o5_u_1N_Ziw&t=16s", // Update with an actual video URL if available
  example: 
    "Example: Understanding closures\n" +
    "```javascript\n" +
    "function outerFunction() {\n" +
    "  let outerVariable = 'I am outer';\n" +
    "  return function innerFunction() {\n" +
    "    console.log(outerVariable);\n" +
    "  };\n" +
    "}\n" +
    "const myClosure = outerFunction();\n" +
    "myClosure(); // Output: 'I am outer'\n" +
    "```",
  code: 
    "// Example of block scope\n" +
    "if (true) {\n" +
    "  let blockScoped = 'This is block scoped';\n" +
    "  console.log(blockScoped); // Output: 'This is block scoped'\n" +
    "}\n" +
    "console.log(blockScoped); // Error: blockScoped is not defined",
  status: "published",
  options: [
    {
      id: 1,
      option: "Global scope is accessible throughout the program.",
      isCorrect: true,
      summary: "Global scope refers to variables defined outside any function or block."
    },
    {
      id: 2,
      option: "Block scope is created using `var`.",
      isCorrect: false,
      summary: "`var` does not create block scope; it is function-scoped."
    },
    {
      id: 3,
      option: "Closures capture variables from their parent scope.",
      isCorrect: true,
      summary: "Closures allow inner functions to access variables from their outer function, even after the outer function has returned."
    }
  ],
  categoryId: 101, // Example category ID for JavaScript courses
  category: { id: 101, name: "JavaScript" }, // Example category object
  locationId: 10, // Example location ID
  question: "What is the difference between global scope and block scope in JavaScript?",
  location: { id: 10, name: "Online" }, // Example location object
  summary: 
    "This class covers the essentials of scope in JavaScript, including global, local, block scope, and closures. Gain clarity on how variable declarations interact with scope and how closures are used effectively.",
  createdBy: "YourName",
  teacher: {
    name: "YourName",
    email: "yourname@example.com"
  }
}]

export default function CourseDetails() {

  const [selectedClass, setSelectedClass] = useState<Ipost>();
  const urlParams = useParams();
  // const navigate = useNavigate();

  const { data: cateroryData, isLoading } = useQuery({
    queryKey: ['course-class-list'],
    queryFn: () => categoryGetById(urlParams?.id || ''),
  })
  const MainData = cateroryData?.data?.courses || defultData;

  console.log(cateroryData, isLoading)

  return (
    <div>
      <div className="bg-gray-50 transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px] dark:bg-neutral-900">

        <main id="content">

          <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8  dark:bg-neutral-800 dark:border-neutral-700">
            <div className="flex items-center py-2">

              <button type="button" className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                <span className="sr-only">Toggle Navigation</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /><path d="m8 9 3 3-3 3" /></svg>
              </button>

              <ol className="ms-3 flex items-center whitespace-nowrap">
                <li className="flex items-center text-left text-sm  text-gray-800 dark:text-neutral-400">
                  {cateroryData?.data?.name || categoryDefultData?.name}
                  <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </li>
                <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
                  {selectedClass?.title}
                </li>
              </ol>
            </div>
          </div>

          <div id="hs-application-sidebar" className="hs-overlay [--body-scroll:true] lg:[--overlay-backdrop:false] [--is-layout-affect:true] [--auto-close:lg]
hs-overlay-open:translate-x-0
-translate-x-full transition-all duration-300 transform
w-[260px] h-full
hidden
fixed inset-y-0 start-0 z-[60]
bg-white border-e border-gray-200

dark:bg-neutral-800 dark:border-neutral-700" role="dialog" tabIndex={-1} aria-label="Sidebar">
            <div className="relative flex flex-col h-full max-h-full">
              <div className="px-6 pt-4">

                <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="Preline">
                  {/* <Logo /> */}
                </a>

              </div>


              <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                  <ul className="flex flex-col space-y-1">
                    {MainData?.map((classItem: Ipost) => <>
                      <li>
                        <button onClick={() => setSelectedClass(classItem)}
                          className={`${classItem?.id == selectedClass?.id ? 'bg-gray-200 dark:bg-neutral-700 dark:text-white ' : ''}` + "flex items-center text-left gap-x-3.5 py-2 px-2.5  text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white"} >
                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                          {classItem?.title}
                        </button>
                      </li>
                    </>)}

                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="w-full  h-full">
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 flex justify-center ">
              {/* <!-- your content goes here ... --> */}
              
              {selectedClass ? <div className="grid grid-cols-2 gap-4">
                <Detail posts={selectedClass} /> 
                <Task posts={{
                question: selectedClass?.question,
                options: selectedClass?.options
              }} />
                </div>  : <>

                <div className="max-w-[45rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                  <div className="gap-8">
                    <div className="">
                      <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
                        Thanks for taking our class
                      </h2>
                      <p className="mt-3 text-gray-600 dark:text-neutral-400">
                         {/* {selectedClass?.name} */}
                         Join us for an engaging learning experience filled with hands-on activities, expert guidance, and opportunities to grow. 
                         Whether you’re here to gain skills or explore your passion, we’re excited to have you on this journey!              
                      </p>
                    </div>

                  </div>
                </div>
              </>}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
