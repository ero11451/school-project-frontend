import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";

export default function ProfilePosts() {
    const navigate = useNavigate();
    
    return (
        <div>

            <span className="block dark:text-white">Nike React</span>
            <span className="block dark:text-white text-xl md:text-3xl">Rewriting sport's </span>



            <div className=" lg:grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-10">

                <a className="group block" onClick={() => navigate('/profile/'+ RoutePath.videoDisplay)}>
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                    </div>

                    <div className="pt-4">
                        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                            eYoga
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">
                            A revamped and dynamic approach to yoga analytics
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Discovery
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Brand Guidelines
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Yoga
                            </span>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    )
}
