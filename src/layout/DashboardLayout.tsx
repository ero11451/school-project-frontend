import { NavLink, Outlet, useLocation } from 'react-router-dom'
// import ThemeToggle from "../component/ThemeToggle";
import sidebarInterface from '../interface/SideBarNav'
import Logo from '../component/Logo'
import { useEffect } from 'react'

export default function DashboardLayout({
  sideNavList,
}: {
  sideNavList: sidebarInterface[]
}) {
  const location = useLocation()

  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [location.pathname])

  return (
    <div>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div className="flex justify-between items-center py-2">
          <ol className="ms-3 flex items-center whitespace-nowrap">
            <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
              Application Layout
              <svg
                className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>

          <button
            type="button"
            className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Sidebar"
          >
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
            </svg>
            <span className="sr-only">Sidebar</span>
          </button>
        </div>
      </div>

      <div
        id="application-sidebar"
        className="hs-overlay [--auto-close:lg]  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform  w-[260px]
  hidden  fixed inset-y-0 start-0 z-[60]  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700
 "
      >
        <div className="px-8 pt-4">
          <Logo />
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            {sideNavList.map((nav: sidebarInterface) => (
              <li key={nav.key} className="flex flex-col">
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'transition ease-linear transition-all rounded-r-[22px] border-lime-400 bg-lime-100 border-l-4 p-2  text-lime-900 dark:bg-lime-900 dark:text-white dark:border-lime-200'
                      : 'transition ease-linear transition-all my-2 text-gray-800 dark:text-white dark:bg-neutral-800 dark:border-neutral-700'
                  }
                >
                  {nav.label}
                </NavLink>
              </li>
            ))}
            <li className="flex flex-col">
              <NavLink
                to={'/home'}
                className={({ isActive }) =>
                  isActive
                    ? 'transition ease-linear transition-all rounded-r-lg border-lime-400 bg-lime-100 border-l-4 p-2  text-lime-900 dark:bg-lime-900 dark:text-white dark:border-lime-200'
                    : 'transition ease-linear transition-all my-2 text-gray-800 dark:text-white dark:bg-neutral-800 dark:border-neutral-700'
                }
              >
                Logout
              </NavLink>
            </li>
            {/* className={
                    ` 
               ${({ isActive, isPending }: { isPending: string, isActive: string }) => {
                      console.log('log this nav');
                      return isPending ? "pending" : isActive ? "bg-red-300" : ""
                    }
                    }
                 " flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                ` }  */}
          </ul>
        </nav>
      </div>

      <div className="w-full h-screen lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
