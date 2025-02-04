import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { LoadingIndicator } from "../../component";
import { categoryGetAll } from "../../service/category-service";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";
import NotFound from "../../component/NotFound";
import { getCourses } from "../../service/courses-service";
import { ICourse, ICourseURLParams } from "../../interface/ICourse";
import { motion } from "framer-motion";
import moment from "moment";
import { ICategory } from "../../interface/ICategory";
import Pagination from "../../component/Pagination";
import { SubmitHandler, useForm } from "react-hook-form";
import CourseCard from "./CourseCard";
import { limitText } from "../../utility/limitText";

export function CourseList() {
  const sortBy: { name: string, id: string }[] = [{ id: "name", name: "Name" }, { id: "name_desc", name: "Name desc" }, { id: "date", name: "Date" }, { id: "date_desc", name: "Date desc" }]
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors, isValid, isLoading } } = useForm<ICourseURLParams>();

  const [params, setParams] = useState<ICourseURLParams>({
    pageNumber: 1,
    pageSize: 4,
    categoryId: null,
    sortBy: null,
    search: null
  })


  const { data: categoryData, isLoading: isloadingCategory } = useQuery({
    queryKey: ['category'],
    queryFn: () => categoryGetAll()
  })
  const { data: courseData, isLoading: loadingCourse, } = useQuery({
    queryKey: ['course-data', params],
    queryFn: () => getCourses(params)
  })

  const onSubmit: SubmitHandler<ICourseURLParams> = (data: ICourseURLParams) => {

    setParams(prev => prev = { ...prev, ...data })

  }

  const onReset = () => {
    console.log("reset")
    reset(
      {
        categoryId: null,
        sortBy: null,
        search: null
      }
    )
    setParams({
      pageNumber: 1,
      pageSize: 4,
      categoryId: null,
      sortBy: null,
      search: null
    })

  }

  console.log(errors, isValid)
  return (
    <div className=" dark:bg-neutral-900 lg:w-3/4 m-auto px-5">
      {isloadingCategory && <LoadingIndicator />}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center justify-around rounded bg-gradient-to-r from-green-500  via-[#001F3F] to-[#FFD700]  bg-[length:200%_200%]"
      >
        <div className="p-7 text-white">
          <h1 className="text-1xl text-left font-semibold ">Explore classes from Neeboh</h1>
          <p className="text-left text-sm">you have assess too all our courses and learn at your own pace.</p>
        </div>
        <img src="bg/course-img-bananer.png" alt="" className="w-12 lg:w-24" />
      </motion.div>


      <form onSubmit={handleSubmit(onSubmit)} className="lg:flex lg:justify-between lg:flex-row flex-col flex  m-auto  py-4  gap-3">
        <div className="max-w-sm space-y-3 w-full">
          <div>
            <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">Search</label>
            <div className="relative">
              <input type="text" id="hs-leading-icon" {...register("search")} name="hs-leading-icon" className="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm bg-gray-100 rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="search.." />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <svg className="shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">

          <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">Sort By</label>

          <select className="input w-full"   {...register("sortBy")}>
            <option value="0" disabled>Sort</option>
            {sortBy.map((category: { id: string | number; name: string }) =>
              <option key={category.id} value={category.id}>{category.name}</option>
            )}
          </select>
        </div>
        <div className="w-full">

          <label htmlFor="label" className="block text-sm font-medium mb-2 dark:text-white">Categories</label>

          <select className="input"  {...register("categoryId")}>
            <option value={"null"}>All </option>
            {categoryData && categoryData?.data?.data.map((category: ICategory) =>
              <option key={category?.id} value={category?.id}>{category?.categoryName}</option>
            )}
          </select>
        </div>
        <div className="flex  gap-3 items-end">

          <button onClick={() => onReset()} className="btn-outline h-fit">Restart</button>
          <button type="submit" className="btn-primary h-fit p-3">Submit {isLoading && "..."} </button>
        </div>

      </form>



      {loadingCourse && <LoadingIndicator />}


          {!courseData?.data.data && <NotFound text="No course found" />}

      <div className="  py-12 lg:py-2 mx-auto  dark:bg-neutral-900">


        <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-2">
          {courseData?.data && courseData?.data?.data.map((course: ICourse) =>


            <CourseCard
              status={course?.status || ""}
              onClick={() => navigate(`/${RoutePath?.courseList}/${course?.id}`)}
              courseName={course?.courseName || ""}
              dataCreated={moment(course?.createdAt).format("MMMM D, YYYY h:mm A")}
              totalClasses={course.totalClasses || 0}
              description={limitText(course?.description || '', 60)}
              userName={limitText(course.creator?.userName || "", 20) || ""} />

              
            // <div key={course?.id} onClick={() => navigate(`/${RoutePath?.courseList}/${course?.id}`)}
            //   className="group  bg-white/50 dark:bg-white/10 backdrop-blur-lg  flex flex-col  min-h-fit
            //             border border-gray-200 dark:border-gray-800  hover:border-transparent hover:shadow-lg 
            //             focus:outline-none focus:border-transparent focus:shadow-lg transition
            //              duration-300 rounded-xl  " >
            //   <motion.div
            //     animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            //     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            //     className="aspect-w-16 aspect-h-11  w-full h-44 bg-gradient-to-r from-gray-200 rounded-lg via-gray-300 to-gray-100  bg-[length:200%_200%]">
            //     <img loading="lazy" className="w-full h-full bg-transparent object-cover rounded-xl " src={course?.thumbnailUrl} alt="" />
            //   </motion.div>
            //   <div className="m-3">
            //     <h3 className=" font-semibold text-start text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
            //       {course?.courseName}
            //     </h3>
            //     <p className=" text-gray-600 dark:text-neutral-200 text-left h-fit text-sm">
            //       {limitText(course?.description || '', 70)}
            //     </p>
            //     <div className="my-3 flex items-center gap-x-3 text-left ">
            //       {course.creator?.userImgUrl && <img loading="lazy" className="w-10 h-10 rounded-full" src={course.creator?.userImgUrl} alt="Avatar" />}
            //       {course.creator?.userImgUrl == null && <span className="inline-flex items-center justify-center size-[46px] text-sm font-semibold leading-none rounded-full border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white">
            //         {(`${course?.creator?.userName[0]}${course?.creator?.userName[1]}`).toUpperCase()}
            //       </span>}
            //       <div className="flex flex-col justify-center item-center">
            //         <p className="text-base font-semibold text-gray-800 dark:text-neutral-40">{course?.creator?.userName}</p>
            //         <a href="mailto:" className="text-xs text-left text-blue-600 dark:text-neutral-200">
            //           {course?.creator?.email}
            //         </a>
            //       </div>
            //     </div>
            //     <p className="text-xs mb-2"> {moment(course?.createdAt).format("MMMM D, YYYY h:mm A")}</p>
            //     <button className="btn-primary w-full justify-center  text-center ">
            //       Take course
            //     </button>
            //   </div>
            // </div>
          )}




        </div>



        {courseData?.data?.length == 0 && <NotFound />}

      </div>


      <Pagination
        page={params.pageNumber || 1}
        pageSize={params.pageSize || 10}
        totalCount={courseData?.data.totalCount}
        totalPages={courseData?.data.totalPages}
        onPageChange={(newPage: number) => setParams(prev => prev = { ...prev, pageNumber: newPage })}
      />


      {/* <div className="flex justify-center items-center gap-3 mt-10">
        <nav className="flex items-center gap-x-1" aria-label="Pagination">
          <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Previous">
            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            <span className="sr-only">Previous</span>
          </button>
          <div className="flex items-center gap-x-1">
            <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500" aria-current="page">{courseData?.data.page}</button>
            <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">2</button>
            <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">3</button>
            <div className="hs-tooltip inline-block">
              <button type="button" className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10">
                <span className="group-hover:hidden text-xs">•••</span>
                <svg className="group-hover:block hidden shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 17 5-5-5-5"></path>
                  <path d="m13 17 5-5-5-5"></path>
                </svg>
                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                  {courseData?.data.totalPages + 1}
                </span>
              </button>
            </div>
            <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
          </div>
          <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Next">
            <span className="sr-only">Next</span>
            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </nav>

      </div> */}


      {/* {data?.data ? null : <div className="text-center flex justify-center items-center align-center mt-20">There is no Course available.</div>} */}





    </div>
  )
}
