// import useWindowWidth from "../hooks/useWindowWidth"

import { useSelector } from "react-redux";

export default function Logo() {
  // const width =  useWindowWidth();
  const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);
   
  return (
    <div>

      <div className="flex items-start " >
        {theme !== "light"?  <img src="icon/logo_white.svg" className=" w-full lg:h-10 h-5 object-contain " alt="" /> :
         <img src="icon/logo.svg" className=" w-full lg:h-10 h-5 object-contain " alt="" />}
      </div>
    </div>
  )
}
