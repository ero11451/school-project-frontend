import { useQuery } from "@tanstack/react-query";
import { Header } from "../component";
import PostsList from "../component/PostList";
import { useState } from "react";
import { getPost } from "../service/posts";



function HomePage() {
  
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
    
    return (
        <div>

            <Header />     
            <div className="mb-6 mt-5 sm:mb-10 max-w-2xl text-center mx-auto">
                <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
                    Latest work
                </h1>
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

            <main>

                <div className="bg-black">
                    <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
                        <blockquote className="max-w-4xl mx-auto">
                            <p className="mb-6 md:text-lg">
                                <span className="font-semibold text-lime-400">Philip,</span> <span className="text-neutral-500">CEO at Day Spa</span>
                            </p>

                            <p className="text-xl sm:text-2xl md:text-3xl md:leading-normal text-white">
                                I'm absolutely floored by the level of care and attention to detail the team at Preline have put into this project and for one can guarantee that we will be a return customer.
                            </p>

                            <footer className="mt-6 md:mt-10">
                                <div className="border-neutral-700">
                                    <button type="button" className="group inline-flex items-center gap-x-3 text-neutral-400 text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                        <span className="size-8 md:size-10 flex flex-col justify-center items-center bg-white text-black rounded-full group-hover:bg-lime-400 group-focus:bg-lime-400">
                                            <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                            </svg>
                                        </span>
                                        Watch the Video
                                    </button>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </main>
            {/* <Plane /> */}


        </div>

    )
}

export default HomePage;