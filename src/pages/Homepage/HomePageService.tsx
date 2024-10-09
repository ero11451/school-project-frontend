// import React from 'react'

export default function HomePageService() {
    return (
        <div className=' bg-gradient-to-r from-[#14342C] via-[#0D7D61] to-[#14342C] text-white' style={{backgroundImage:"url('image/green_bg.svg')"}}>

            <div className='text-center lg:pt-10 pt-5 '>
                <p className='lg:font-[600] lg:text-[32px]'>Your Top Choice for Expert Services and Learning</p>
                <p className='lg:font-[100] lg:text-[18px] p-4'>chieve Your Goals with Expert Support and Comprehensive Learning Resources for Personal and Professional Growth</p>
            </div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">

                 {[1,1,1,1,1,1].map(() => 
                     <div className="size-full bg-white/30 backdrop-blur-lg  shadow-lg rounded-lg p-10 dark:bg-neutral-900">
                     <div className="flex items-center gap-x-4 mb-3">
                         <div className="inline-flex justify-center items-center size-[62px] rounded-full border-2 border-white dark:border-blue-900 bg-none">
                             <img src="image/home_service_icon.svg" alt="" />
                         </div>
                     </div>
                     <div className="shrink-0">
                         <h3 className="block text-[32px] font-[600] 0 dark:text-white ">Tailored Solutions for You</h3>
                     </div>
                     <br />
                     <p className="font-[100]">Get customized support for your unique needs – whether you need experts or learning tools, Neeboh is here for you..</p>
                 </div>
                 )  
}
                </div>
            </div>

        </div>
    )
}