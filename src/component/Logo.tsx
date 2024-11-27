// import useWindowWidth from "../hooks/useWindowWidth"

import { useSelector } from "react-redux";

export default function Logo({ imageStyle }: { imageStyle?: string }) {
  // const width =  useWindowWidth();
  const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);

  return (
    <div>

      <div className="flex items-start " >
        {theme !== "light" ?
          <img loading="lazy"  src="icon/logo_white.svg" className={` w-full lg:h-10 h-5 object-contain ${imageStyle}`} alt="neeboh" /> :
          <img loading="lazy"  src="icon/logo.svg" className={` w-full lg:h-10 h-5 object-contain ${imageStyle}`} alt="neeboh" />}
      </div>
    </div>
  )
}
