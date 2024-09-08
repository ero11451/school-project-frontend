import { NavLink } from 'react-router-dom'
import sidebarInterface from '../interface/SideBarNav'

export default function NavItem({
    path,
    label,
 }:  sidebarInterface ) {

    return (
        <div>
          <NavLink
                to={path}
                className={({ isActive }) => isActive ?
                "transition ease-linear transition-all relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-lime-400 dark:text-lime-400"
                : "transition ease-linear transition-all inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" }
                aria-current="page">
                    
                    {label}
                </NavLink>
        </div>
    )
}
