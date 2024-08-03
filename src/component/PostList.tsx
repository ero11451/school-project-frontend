import { useNavigate } from "react-router-dom";
import { RoutePath } from "../router/routerPath";
import { Ipost } from "../interface/Ipost";
import { limitText } from "../utility/limitText";

export default function PostsList({posts}:{posts:Array<Ipost>}) {
    

    const navigate = useNavigate();
    
  return (
    <div >
        <div className=" dark:bg-neutral-900">
            <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-2 mx-auto  dark:bg-neutral-900">

              
                <div className="grid lg:grid-cols-2 gap-6">
                        {posts?.map((post: Ipost) => <button key={post.id} className="group relative block rounded-xl focus:outline-none" onClick={() => navigate(`/${RoutePath.postDetails}/${post.id}`)} >

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

        </div>
    </div>
  )
}
