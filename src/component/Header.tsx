import { useNavigate } from "react-router-dom";
import { RoutePath } from "../router/routerPath";
import Glowing from "./headerBG/Glowing";


export default function Header() {

    const navigate = useNavigate();

    return (
        <div className=" dark:bg-black bg-black ">
            <Glowing />
            <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24 absolute lg:top-20 top-40 left-0 right-0 w-screen ">
                <h1 className="font-semibold text-white text-5xl md:text-6xl text-lg">
                    <span className="text-lime-400 ">Neeboh:</span> Transforming ideas into reality
                </h1>
                <div className="lg:max-w-4xl">
                    <p className="mt-5 text-neutral-400 lg:text-lg text-xs">
                    Unlock your potential with our learning portal and expert digital development services. Master new skills, grow your expertise, and succeed at any level. Start your journey today and transform your future.
                        </p>
                </div>
                <div>
                    <div className='flex gap-3 mt-3'>
                        <button type="button"
                           onClick={() => navigate(`/${RoutePath.login}`)}
                            className="py-2 text-white px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl 
                    border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 
                    disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 
                    dark:text-white dark:hover:text-white">
                            Sign in
                        </button>
                        <button type="button"
                          onClick={() => navigate(`/${RoutePath.contact}`)}
                        
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500">
                            Hire us
                        </button>

                    </div>

                </div>


            </div>
        </div>
    )
}
