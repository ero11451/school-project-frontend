// import React from 'react'

import { useSelector } from "react-redux"

export default function HeardBg({title, description , label, labelIcon}: {title: string, description: string, label: string, labelIcon: string}) {
   
  const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);
     
   const bgImageURl = theme !== 'dark' ? "url('image/yelloBG.svg')" : "url('image/headerDarkBG.svg')" 
  return (
    <div>
         <div className="overflow-hidden bg-[#FEFAF1]"  style={{backgroundImage:bgImageURl}}>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:py-20 p-5">
                    <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">

                        <div className="text-center">
                            <button className='py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium text-[#E5951A] rounded-full bg-white/30 backdrop-blur-lg '>
                               <img src={labelIcon} alt=""  />
                                {label}
                            </button>
                            <p className="text-lg text-[#101828]  p-3 lg:p-1 font-bold  lg:text-6xl lg:leading-tight dark:text-neutral-200">
                               {title}
                            </p>
                           {description && <p className="lg:mt-4  lg:text-lg lg:mt-6 text-sm dark:text-white text-gray-800">
                               {description}
                            </p>}
                        </div>

                        {/* Background vector image - left side */}
                        <div className="hidden md:block absolute top-2/4 left-0 transform -translate-y-2/4 -translate-x-16 lg:-translate-x-40 xl:-translate-x-80" aria-hidden="true">
                            <img src="image/Vector1376.svg" alt="" className="w-32 lg:w-48" />
                        </div>

                        {/* Background vector image - right side */}
                        <div className="hidden md:block absolute top-1/4 right-0 transform -translate-y-1/4 translate-x-16 lg:translate-x-40 xl:translate-x-80" aria-hidden="true">
                            <img src="image/image365.svg" alt="" className="w-32 lg:w-48" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
