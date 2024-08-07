import { getPost } from "../../service/posts";
import { useQuery } from "@tanstack/react-query";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { categoryGetAll } from "../../service/category";
import PostsList from "../../component/PostList";

export default function Posts() {

    const { data: categories } = useQuery({queryKey: ['category'], queryFn: () => categoryGetAll()})
    const [params, setParams] = useState({ page: 1, pageSize:  4, categoryId : null  })
    const { data, isLoading } = useQuery({
        queryKey: ['posts', params], queryFn: () => getPost(params)
    })
    const posts = data?.data?.data;

    if (isLoading) {
        return <p className='text-center'>Loading...</p>
    }
    if (!data?.data?.data) {
        return <p className="text-center">No data</p>
    }
// atthe 
   
    return (
        <div className=" dark:bg-neutral-900">

           <div className="flex lg:px-20 lg:ml-10 lg:pb-4 gap-2">
           <button onClick={() => setParams({ page: 1, pageSize:  4 , categoryId :  null   })}
                      className={`${params.categoryId  == null ? 'bg-lime-400' : ''}  py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 dark:text-black focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300`}>
                        All </button>
            {categories?.data.map((category: { id: null; category: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) =>
                     <button onClick={() => setParams({ page: 1, pageSize:  4 , categoryId : category.id   })}
                      className={`${params.categoryId  == category.id ? 'bg-lime-400' : ''} py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 
                        text-gray-800 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:border-gray-500
                        focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white
                        dark:hover:text-neutral-300 dark:hover:border-neutral-300`}>
                        {category.category}
                         </button>
                    )} 
            </div>

                  <PostsList posts={posts} />
            <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-2 mx-auto  dark:bg-neutral-900">

                <div className="mt-10 lg:mt-20  text-center">
                    <div className="flex  align-center  justify-center gap-2">
                        <button onClick={() => setParams({ page: params.page == 1 ? 1 : params.page - 1, pageSize: 4 , categoryId: params.categoryId ? params.categoryId : null })} className="
                        relative inline-block font-medium md:text-lg text-black 
                        before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full 
                        before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black 
                        dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" >
                            Previous content
                        </button>
                        <button onClick={() => setParams({ page: params.page + 1, pageSize: 4, categoryId: params.categoryId ? params.categoryId : null  })} className="
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
