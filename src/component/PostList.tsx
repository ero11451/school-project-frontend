import { useNavigate } from "react-router-dom";
import { RoutePath } from "../router/routerPath";
import { Ipost } from "../interface/Ipost";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../service/posts";

export default function PostsList({grid = 2}: { grid:number}) {
    
    const [params , setParams] = useState({page : 1, pageSize :4})
    const {data, isLoading} = useQuery({ 
        queryKey: ['posts', params],
        queryFn: () => getPost(params)
    })
    const posts = data?.data?.data;
    const navigate = useNavigate();

    if (isLoading) {
        return <>Loading...</>
    }
    if (!data?.data?.data) {
        return <>No data</>
    }
    
  return (
    <div >
        <div className=" dark:bg-neutral-900">
            <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-2 mx-auto  dark:bg-neutral-900">

                <div className={` lg:grid grid-cols-${grid} gap-4 sm:gap-6 md:gap-8 lg:gap-12`}>
                    {posts.map((post: Ipost) =>
                        <button className="group block" onClick={() => navigate(`/${RoutePath.postDetails}/${post.id}`)} >
                            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                                <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                            </div>

                            <div className="pt-4">
                                <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                                    {post.title}
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                    {post.content}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                        {post.category?.category}
                                    </span>
                                </div>
                            </div>
                        </button>
                    )}
                </div>

                <div className="mt-10 lg:mt-20 flex align-center  justify-center  text-center">
                <div className="flex  align-center  justify-center gap-2">
                    <button onClick={() => setParams({ page : params.page == 1 ? 1 : params.page - 1, pageSize:4 })} className="
                        relative inline-block font-medium md:text-lg text-black 
                        before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full 
                        before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black 
                        dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" >
                    Previous content
                    </button>
                     <button onClick={() => setParams({ page : params.page + 1, pageSize:4 })} className="
                     relative inline-block font-medium md:text-lg text-black 
                     before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full 
                     before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black 
                     dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" >
                            Next content
                 </button>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}
