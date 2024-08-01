import { useNavigate } from "react-router-dom";
import { getPost } from "../../service/posts";
import { useQuery } from "@tanstack/react-query";
import { RoutePath } from "../../router/routerPath";
import { Ipost } from "../../interface/Ipost";
import { useState } from "react";
import { limitText } from "../../utility/limitText";
import { categoryGetAll } from "../../service/category";
import { Icategory } from "../../interface/Icategory";

export default function Posts() {

    const { data: categories } = useQuery({queryKey: ['category'], queryFn: () => categoryGetAll()})
    const [params, setParams] = useState({ page: 1, pageSize:  4 , categoryId : categories?.data[0]?.id})
    const { data, isLoading } = useQuery({
        queryKey: ['posts', params],
        queryFn: () => getPost(params)
    })
    const posts = data?.data?.data;
    const navigate = useNavigate();

    if (isLoading) {
        return <p className='text-center'>Loading...</p>
    }
    if (!data?.data?.data) {
        return <>No data</>
    }

    return (
        <div className=" dark:bg-neutral-900">

            <div className="flex lg:px-20">
                {categories?.data.map((category: Icategory) =>
                     <button onClick={() => setParams({ page: 1, pageSize:  4 , categoryId : category.id})} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300">{category.category} </button>)}
            </div>

            <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-2 mx-auto  dark:bg-neutral-900">

                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="grid lg:grid-cols-2 gap-6">
                        {posts.map((post: Ipost) => <button className="group relative block rounded-xl focus:outline-none" onClick={() => navigate(`/${RoutePath.postDetails}/${post.id}`)} >

                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
                                <img className="size-full absolute top-0 start-0 object-cover" src={post.imgUrl ? post.imgUrl : "https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" } alt="Blog Image" />
                            </div>

                            <div className="absolute top-0 inset-x-0 z-10">
                                <div className="p-4 flex flex-col h-full sm:p-6">

                                    <div className="flex items-left">
                                        <div className="shrink-0">
                                            <img className="size-[46px] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-left text-white">
                                                Osamuyi ero
                                            </h4>
                                            <p className="text-xs text-left text-white/80">
                                                Jan 09, 2021
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="absolute bottom-0 inset-x-0 z-10">
                                <div className="flex flex-col h-full p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-3xl font-semibold text-white text-left group-hover:text-white/80 group-focus:text-white/80">
                                        {post?.title}
                                    </h3>
                                    <p className="mt-2 text-left text-white/80">
                                        {limitText(post?.content, 40)}
                                    </p>
                                </div>
                            </div>

                        </button>
                        )}

                    </div>

                </div>

                <div className="mt-10 lg:mt-20  text-center">
                    <div className="flex  align-center  justify-center gap-2">
                        <button onClick={() => setParams({ page: params.page == 1 ? 1 : params.page - 1, pageSize: 4 ,categoryId: params.categoryId ?? NaN })} className="
                        relative inline-block font-medium md:text-lg text-black 
                        before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full 
                        before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black 
                        dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" >
                            Previous content
                        </button>
                        <button onClick={() => setParams({ page: params.page + 1, pageSize: 4,categoryId: params.categoryId ?? NaN })} className="
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
    )
}
