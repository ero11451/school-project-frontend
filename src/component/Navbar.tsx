import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../router/routerPath';
import ThemeToggle from './ThemeToggle';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState, clearToken, setUser,  } from '../redux-store/slice/authSlice';
import Logo from './Logo';
import { NavItem } from '.';
// import { limitText } from '../utility/limitText';
import { IUser } from '../interface/IUser';
import { useEffect } from 'react';

export default function Navbar() {
    const navigate = useNavigate();
    const userData = useSelector((store: { auth: AuthState }) => store.auth)
    const dispatch = useDispatch()
   
    useEffect(() => {
        if (userData.user) {
            dispatch(setUser(JSON.parse(localStorage.getItem("user") || "" )))
        } 
        return () => {}
    }, [])
    
    // console.log(JSON.parse(localStorage.getItem("user") || ""), "user name")
    return (
        <header className="flex flex-wrap md:justify-start fixed bg-white  md:flex-nowrap z-50 w-full py-2  dark:bg-neutral-900 dark:text-white">
            <nav className="relative lg:max-w-7xl w-full  grid grid-cols-3  lg:grid  lg:grid-cols-12  gap-3  lg:basis-full items-center lg:px-2 md:px-6  lg:mx-auto" >
                <div className="lg:col-span-3 ">
                    <button onClick={() => navigate(RoutePath.home)} className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80">
                        <Logo />
                    </button>
                </div>


                <div className="flex items-center  w-[200px]  gap-x-2 lg:ms-auto lg:py-1 lg:ps-6 md:order-3 lg:col-span-3 ">
                    <ThemeToggle />
                    {userData.token == null ? <div className=''>
                        <button type="button"
                        onClick={() => navigate(RoutePath.login)}
                        className="lg:btn-primary-rounded  text-[10px] bg-[#163930] p-2 lg:px-3 text-white rounded-full">
                        Get started
                    </button> 
                    </div>:
                    <ProfileDropDown data={userData?.user || null} />
                    }

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
                    className="hs-collapse  hidden overflow-hidden transition-all duration-300 basis-full w-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6 col-span-3 ">
                    <div className="flex flex-col lg:px-2 px-5 gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                        <NavItem path={RoutePath.home} label="Home" key={1} isActive={false} />
                        <NavItem path={RoutePath.about} label="About us" key={1} isActive={false} />
                        <NavItem path={RoutePath.contact} label="Contact" key={2} isActive={false} />
                        {/* <NavItem path={RoutePath.courseList} label="Courses" key={3} isActive={false} /> */}
                        <NavItem path={RoutePath.devTools} label="Dev Blog" key={4} isActive={false} />
                        {userData?.user?.isAdmin == true &&    <NavItem path={RoutePath.admin} label="Admin" key={5} isActive={false} />}

                    </div>
                </div>

            </nav>
        </header>
    )
}


function ProfileDropDown({data}:{data:IUser | null}){


    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const userProfile = {
        img: "src/assets/user-profile.png"
    }
    return   <>
    <div className="hs-dropdown relative inline-flex">
        <button id="hs-dropdown-custom-icon-trigger" type="button"  className='lg:btn-primary-rounded  text-[10px] bg-[#163930] p-2 lg:px-3 text-white rounded-full' aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            My profile
            {/* <div className='flex justify-center align-center items-center gap-3'>

            <img loading="lazy"  className="inline-block size-10 rounded-full" src={userProfile.img} alt="Avatar"  />
            <p>{limitText(data?.username || "", 9)  }</p>
            </div> */}
        </button>

        <div 
             className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
             role="menu" 
             aria-orientation="vertical" 
             aria-labelledby="hs-dropdown-custom-icon-trigger">
            <div className="p-1 space-y-0.5">
                <div className='text-center  justify-center items-center p-2 flex-col flex gap-2'>
                    <img loading="lazy"  className="inline-block size-14 rounded-full" src={userProfile.img} alt="Avatar" />
                    <p>{data?.username}</p>
                </div>
                <button type="button" 
                    onClick={() => navigate(RoutePath.profile)}
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" >
                    <img loading="lazy"  src="icon/profile_gray.svg" alt="" />  View profile
                </button>
                <button type="button"
                    onClick={() => dispatch(clearToken())}
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-[#EB5757] hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" >

                    <img loading="lazy"  src="icon/logout.svg" alt="" />
                    Log out
                </button>
            </div>
        </div>
    </div>


</>
}