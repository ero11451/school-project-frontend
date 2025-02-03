import { FaChevronRight } from "react-icons/fa";

export default function CourseCard(
    {courseName, dataCreated, userName, description, status, totalClasses , onClick}:
     {
        courseName: string, 
        dataCreated: string, 
        totalClasses: number,
        userName: string,
        status:string,
        description:string, 
        onClick?: () => void
    }) {

  return (
   <button onClick={onClick} >
      <div className="bg-white rounded-2xl w-full shadow-lg grid grid-cols-5  h-full  overflow-hidden">
        <div className="bg-[#163930] rounded-tr-3xl text-white p-6 col-span-3 text-left">
          <p className="uppercase text-xs opacity-60">Course</p>
          <p className="font-bold">{courseName}</p>
          <a href="#" className="text-xs mt-4 inline-block opacity-60">View all chapters {totalClasses }  <FaChevronRight className="inline" /></a>
        </div>
        <div className="  col-span-2  flex flex-col justify-center text-left p-2 justify-between flex-1 text-left">
          <div className="absolute top-6 right-6 w-40 text-right">
            {/* <div className="h-2 bg-gray-200 rounded-full w-full relative">
              <div className="h-2 bg-indigo-900 rounded-full absolute left-0 top-0 w-2/3"></div>
            </div> */}
            <span className="text-xs opacity-60">{dataCreated}  </span>
          </div>
          <div className="text-xs ">

          {/* <p className=" text-xs opacity-60">Classes </p> */}
          <p className="lg:text-xs "> by {userName}</p>
          <p className={`${status == 'published' && "text-green-800"}`}>{status}</p>
          <p className="mt-2"> {description}</p>
          </div>
          <button className="bg-[#163930] rounded text-white p-1 text-xs">
            Task course</button>
        </div>
      </div>
      </button>
     
  );
}
