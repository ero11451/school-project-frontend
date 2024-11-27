// import { useState } from "react";
import HeardBg from "../../component/HeardBg";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { categoryGetById, courseGetByCategoryId } from "../../service/category";
import NotFound from "../../component/NotFound";
import { limitText } from "../../utility/limitText";
import { RoutePath } from "../../router/routerPath";
import { Ipost } from "../../interface/Ipost";

export  function CourseClassList  () {
  const urlParams = useParams(); 
  const navigate = useNavigate();

  const { data: cateroryData, isLoading } = useQuery({
    queryKey: ['course-class-list'],
    queryFn: () => categoryGetById(urlParams?.id || ''),
  })

  const { data: classes, isLoading: loading } = useQuery({
    queryKey: ['course-get-by-category-id'],
    queryFn: () => courseGetByCategoryId({
      categoryId: urlParams?.id,
      pageSize: 10,
      page: 1
    })
  })

  console.log({  cateroryData, isLoading, classes, loading });

  return (
    <div >
   
      <HeardBg
        title={cateroryData?.data?.name || ''}
        description={cateroryData?.data?.description || ''}
        label={"Courses"}
                labelIcon={"icon/category-2.svg"}
      />
      <div className=" dark:bg-neutral-900">
        <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-2 mx-auto  dark:bg-neutral-900">


          <div className="grid lg:grid-cols-3 gap-6">
            {classes?.data?.data?.map((post: Ipost) =>

              <button key={post.id} onClick={() => navigate(`/${RoutePath.postDetails}/${post.id}`)}
                className="group  bg-white/50 dark:bg-white/10 backdrop-blur-lg  flex flex-col w-[400px] min-h-[350px] 
                        border border-gray-200 dark:border-gray-800  hover:border-transparent hover:shadow-lg 
                        focus:outline-none focus:border-transparent focus:shadow-lg transition
                         duration-300 rounded-xl p-5 " >
                <div className="aspect-w-16 aspect-h-11">
                  <img loading="lazy"  className="w-[400px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                </div>
                <div className="my-6">
                  <h3 className="text-xl font-semibold text-start text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-5 text-gray-600 dark:text-neutral-200 text-left ">
                    {limitText(post.content || '', 70)}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
                  <img loading="lazy"  className="size-8 rounded-full" src="image/1703945762347.jpeg" alt="Avatar" />
                  <div>
                    <h5 className="text-sm text-gray-800 dark:text-neutral-200">{post.createdBy}</h5>
                  </div>
                </div>

              </button>
            )}

          </div>



          {classes?.data?.data?.length == 0 && <NotFound />}

        </div>

      </div>
    </div>
  )
}
