/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import HeardBg from "../../component/HeardBg";
import { useQuery } from "@tanstack/react-query";
import { LoadingIndicator } from "../../component";
import { categoryGetAll } from "../../service/category";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";
import { Icategory } from "../../interface/Icategory";
import NotFound from "../../component/NotFound";
import { limitText } from "../../utility/limitText";

const defaultData : [Icategory]= [
  {
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
  
];

console.log(defaultData)

export function CourseList() {
  const navigate = useNavigate()
  const { data: courseList, isLoading } = useQuery({
    queryKey: ['category'],
    queryFn: () => categoryGetAll(),
  })
  const [params, setParams] = useState({
    page: 1,
    pageSize: 4,
    categoryId: null,
  })

  const dataSource = courseList?.data || defaultData

  console.log({ courseList, params, setParams })
  return (
    <div className=" dark:bg-neutral-900">
      <HeardBg
        title={"Explore classes from Neeboh"}
        description={"Lorem ipsum dolor sit amet consectetur. Mauris id viverra adipiscing odio leo integer. "}
        label={"Courses"}
        labelIcon={"icon/category-2.svg"}
      />
      {isLoading && <LoadingIndicator />}
      {/* <PostsCategory categories={courseList?.data} setParams={setParams} params={params} /> */}


      <div className=" dark:bg-neutral-900">
        <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-2 mx-auto  dark:bg-neutral-900">


          <div className="grid lg:grid-cols-3 gap-6">
            {dataSource.map((item: Icategory) =>

              <button key={item.id} onClick={() => navigate(`/${RoutePath.courseList}/${item.id}`)}
                className="group  bg-white/50 dark:bg-white/10 backdrop-blur-lg  flex flex-col w-[400px] min-h-[350px] 
                        border border-gray-200 dark:border-gray-800  hover:border-transparent hover:shadow-lg 
                        focus:outline-none focus:border-transparent focus:shadow-lg transition
                         duration-300 rounded-xl p-5 " >
                <div className="aspect-w-16 aspect-h-11  w-full">
                  <img loading="lazy" className="w-full h-[300px] object-cover rounded-xl" src={item.imageUrl} alt="Blog Image" />
                </div>
                <div className="my-6">
                  <h3 className="text-xl font-semibold text-start text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                    {item.name}
                  </h3>
                  <p className="mt-5 text-gray-600 dark:text-neutral-200 text-left ">
                    {limitText(item.content || '', 70)}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3 text-left">
                  <img loading="lazy" className="size-10 rounded-full" src="image/1703945762347.jpeg" alt="Avatar" />
                  <div>
                    <h5 className="text-sm text-gray-800 dark:text-neutral-200">{item.teacher?.username}</h5>
                    <a  href="https://www.linkedin.com/in/ero-osamuyi/" target="_blank" className="text-xs text-left text-blue-600 dark:text-neutral-200">Contact me</a>
                  </div>
                </div>

               <button className="btn-primary-rounded w-full justify-center mt-5 text-center">
                Take course
               </button>
              </button>
            )}

          </div>



          {courseList?.data?.length == 0 && <NotFound />}

        </div>

      </div>



      {courseList?.data ? null : <div className="text-center flex justify-center items-center align-center mt-20">There is no Course available.</div>}





    </div>
  )
}
