import { useParams } from "react-router-dom";
import Detail from "./Detail";
import { useQuery } from "@tanstack/react-query";
import { IClass } from "../../interface/IClass";
import { useState } from "react";
import Task from "./Task";
import ModelWithElement from "../../component/ModelWithElement";
import { getAllClasses } from "../../service/classes-service";
import Logo from "../../component/Logo";

export default function CourseDetails() {
  const [selectedClass, setSelectedClass] = useState<IClass>();
  const urlParams = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["course-class-list-get-by-course-id"],
    queryFn: () => getAllClasses({ courseId: urlParams?.id }),
  });

  return (
    <div>

      {isLoading && "loading..."}

  
          
      <div
        id="application-sidebar"
        className="hs-overlay [--auto-close:lg]  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform  w-[260px]
  hidden  fixed inset-y-0 start-0 z-[60]  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700
 "
      >
        <div className="px-8 pt-4">
          <Logo />
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
          {data?.data?.data?.map((classItem: IClass) => (
                  <li key={classItem.id}>
                    {/* ✅ Fixed the key warning by using classItem.id */}
                    <button
                      onClick={() => setSelectedClass(classItem)}
                      className={`${
                        classItem?.id === selectedClass?.id
                          ? "bg-gray-200 dark:bg-neutral-700 dark:text-white w-full"
                          : ""
                      } flex items-center text-left gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white`}
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      {classItem?.title}
                    </button>
                  </li>
                ))}
            
          </ul>
        </nav>
      </div>
   <div>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:ml-60 dark:bg-neutral-800 dark:border-neutral-700">
        <div className="flex justify-between items-center py-2">
          <ol className="ms-3 flex items-center whitespace-nowrap">
            <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
               <button onClick={() => window.history.back()} className="flex items-center gap-x-1.5 text-sm text-gray-800 dark:text-neutral-400">
                Back
               </button>
              <svg
                className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
              aria-current="page"
            >
                {selectedClass?.title}
            </li>

            <li>

            {selectedClass?.tests && (
              <ModelWithElement
                onSave={() => console.log("please log this user")}
                title={selectedClass?.tests[0].question || ""}
                btnStyle={"bg-green-300 p-2 text-sm ml-4"}
                btnText={"Take Assessment"}
              >
                <Task options={selectedClass?.tests[0].options} />
              </ModelWithElement>
            )}

            </li>
          </ol>

          <button
            type="button"
            className="py-2 px-3 flex justify-center lg:hidden items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Sidebar"
          >
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
            </svg>
            <span className="sr-only">Sidebar</span>
          </button>
        </div>
      </div>


      <div className="w-full h-screen overflow-auto lg:ps-64">
          {/* header */}

     
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 ">
     
        <div className="max-w-[45rem]  h-screen  sm:px-6 lg:px-8 lg:py-16 mx-auto">
        {selectedClass ? (
          <Detail posts={selectedClass} />
        ) : (
          <>
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
              Thanks for taking our class
            </h2>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Join us for an engaging learning experience filled with hands-on
              activities, expert guidance, and opportunities to grow. Whether
              you’re here to gain skills or explore your passion, we’re excited
              to have you on this journey!
            </p>
          </>
        )}
      </div>
        </div>
      </div>

      
    </div>









   </div>
  );
}
