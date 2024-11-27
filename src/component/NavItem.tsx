import { NavLink } from 'react-router-dom'
import sidebarInterface from '../interface/SideBarNav'

export default function NavItem({
    path,
    label,
}: sidebarInterface) {

    return (
        <div>
            <NavLink
                to={path}
                className={({ isActive }) => `transition ease-linear transition-all  duration-400 
                 {${isActive ? 
                    "text-transparent bg-clip-text bg-gradient-to-r from-[#163930] via-green-900 to-[#3D9F86] animate-gradient  font-extrabold "  
                    :
                    "inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-[#163930] "}}
                    `}
                aria-current="page">
                {label}
            </NavLink>
        </div>
    )
}
