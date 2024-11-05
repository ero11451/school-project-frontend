import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";
import { Ipost } from "../../interface/Ipost";
import { Params } from "../../interface/PostComponent";
import NotFound from "../../component/NotFound";
import HeardBg from "../../component/HeardBg";
import { limitText } from "../../utility/limitText";

export default function PostsList({posts,setParams}:{
    posts:Array<Ipost>;
    params: Params;
    setParams:unknown
}) {
    console.log(setParams)

    const navigate = useNavigate();
    
  return (
    <div >
        <HeardBg title={"Explore classes from Neeboh"} description={"Lorem ipsum dolor sit amet consectetur. Mauris id viverra adipiscing odio leo integer. "} label={"Courses"} labelIcon={"category-1.svg"} />
        <div className=" dark:bg-neutral-900">
            <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-2 mx-auto  dark:bg-neutral-900">

              
                <div className="grid lg:grid-cols-3 gap-6">
                        {posts?.map((post: Ipost) =>
                        
                        <button key={post.id} onClick={() => navigate(`/${RoutePath.postDetails}/${post.id}`)}
                        className="group  bg-white/50 dark:bg-white/10 backdrop-blur-lg  flex flex-col w-[400px] min-h-[350px] 
                        border border-gray-200 dark:border-gray-800  hover:border-transparent hover:shadow-lg 
                        focus:outline-none focus:border-transparent focus:shadow-lg transition
                         duration-300 rounded-xl p-5 " >
                       <div className="aspect-w-16 aspect-h-11">
                           <img className="w-[400px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
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
                           <img className="size-8 rounded-full" src="image/1703945762347.jpeg" alt="Avatar" />
                           <div>
                               <h5 className="text-sm text-gray-800 dark:text-neutral-200">{post.createdBy}</h5>
                           </div>
                       </div>

                        </button>
                        )}

                    </div>
           
       
       
       {posts?.length  == 0 &&     <NotFound />}
       
       </div>

        </div>
    </div>
  )
}
