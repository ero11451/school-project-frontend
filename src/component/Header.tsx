import { useNavigate } from "react-router-dom";
import { RoutePath } from "../router/routerPath";


export default function Header() {

    const navigate = useNavigate();

    return (
        <div className="bg-neutral-900 dark:bg-black">
            <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
                <h1 className="font-semibold text-white text-5xl md:text-6xl">
                    <span className="text-lime-400">Neeboh:</span> Transforming ideas into reality
                </h1>
                <div className="max-w-4xl">
                    <p className="mt-5 text-neutral-400 text-lg">
                        It is a creative hub where imagination meets craftsmanship to transform ideas into tangible realities. At Preline Agency, we specialize in turning conceptual visions into concrete forms, whether it be through design, artistry, or technological innovation.
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
