import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../router/routerPath';
import ThemeToggle from './ThemeToggle';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState, clearToken } from '../redux-store/slice/authSlice';
import Logo from './Logo';
import  {NavItem}  from '.';

export default function Navbar() {
    const navigate = useNavigate();
    const user = useSelector((store:{auth:AuthState}) => store.auth.token)
    const dispatch = useDispatch();

    return (
        <header className="flex flex-wrap md:justify-start  md:flex-nowrap z-50 w-full py-7  dark:bg-neutral-900 dark:text-white">
            <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto" aria-label="Global">
                <div className="md:col-span-3">

                    <div className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80">
                      <Logo />
                    </div>

                </div>


                <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
                    {user == null ? <button type="button"
                        onClick={() => navigate(RoutePath.login)}
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                        Sign in
                    </button> :
                    <>
                     <button type="button"
                        onClick={() => dispatch(clearToken())}
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                        Log out
                    </button>
                    </>
                    }
                    

                    {/* <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500">
                        Hire us
                    </button> */}

                 {/* <button type="button" 
                             onClick={() => navigate(RoutePath.profile)}
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500">
                       My profile
                    </button>  */}

                    <ThemeToggle />

                    <div className="md:hidden">
                        <button type="button" className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                </div>


                <div
                    id="navbar-collapse-with-animation"
                    className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                        <NavItem path={RoutePath.home} label="Home" key={1} isActive={false} />
                        <NavItem path={RoutePath.contact} label="Contact" key={2} isActive={false} />
                        <NavItem path={RoutePath.PostsList} label="Post" key={3} isActive={false} />
                        <NavItem path={RoutePath.devTools} label="Dev tools" key={4} isActive={false} />
                        <NavItem path={RoutePath.servicePage} label="Service" key={5} isActive={false} />
                     
                    </div>
                </div>

            </nav>
        </header>
    )
}
