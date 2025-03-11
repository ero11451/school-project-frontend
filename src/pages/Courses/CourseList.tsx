import {  useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { LoadingIndicator } from "../../component";
import { categoryGetAll } from "../../service/category-service";
import NotFound from "../../component/NotFound";
import { getCourses } from "../../service/courses-service";
import { ICourse, ICourseURLParams } from "../../interface/ICourse";
import {  motion } from "framer-motion";
import { ICategory } from "../../interface/ICategory";
import Pagination from "../../component/Pagination";
import { SubmitHandler, useForm } from "react-hook-form";
import { BentoGridDemo } from "../../components/ui/BentoGrid";


export function CourseList() {
  const sortBy: { name: string, id: string }[] = [{ id: "name", name: "Name" }, { id: "name_desc", name: "Name desc" }, { id: "date", name: "Date" }, { id: "date_desc", name: "Date desc" }]
  // const navigate = useNavigate();

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

   const course :ICourse []= courseData?.data.data || []
   console.log(errors, isValid)
  return (
    <div>
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
                <input type="text" id="hs-leading-icon" {...register("search")} name="hs-leading-icon" className="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm bg-gray-100 rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-500 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-100" placeholder="search.." />
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
        {loadingCourse || courseData?.data?.length == 0 && <NotFound />}
        {!courseData?.data.data && <NotFound text="No course found" />}

<div className="mt-5 h-full flex-1 flex flex-col gap-24">

      <BentoGridDemo itemsList={course} />

       
      <Pagination
        page={params.pageNumber || 1}
        pageSize={params.pageSize || 10}
        totalCount={courseData?.data.totalCount}
        totalPages={courseData?.data.totalPages}
        onPageChange={(newPage: number) => setParams(prev => prev = { ...prev, pageNumber: newPage })}
      /> 
      </div>

      </div>

    </div>
  )
}



 
