// import React from 'react'

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import { cn } from "../../lib/utils";

interface Iitem {
    id: number,
    title: string,
    description: string
}

const data = [{
    id: 1,
    title: 'Tailored Solutions for You',
    description: 'Get customized support for your unique needs – whether you need experts or learning tools, Neeboh is here for you.'
},
{
    id: 2,
    title: 'Trusted and skilled Professionals',
    description: 'Our experts are thoroughly vetted to ensure you receive top-quality services every time'
},
{
    id: 3,
    title: 'Learn at your own pace',
    description: 'Access a rich library of learning resources and interactive quizzes to boost your skills at your own pace.'
},
{
    id: 4,
    title: 'Comprehensive Platform', description: 'We offer a one-stop solution for hiring professionals and accessing top-quality learning content, making your growth journey seamless.'
},
{
    id: 5,
    title: 'Comprehensive Learning Resources', description: 'access a wide range of industry-focused materials to enhance your skills effectively and at your own pace'
},
{
    id: 6,
    title: 'Secure and Reliable products', description: 'Trustworthy services with a focus on your security and satisfaction every step of the way.'
}]

export default function HomePageService() {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className=' bg-gradient-to-r from-[#14342C] via-[#0D7D61] to-[#14342C] text-white' style={{ backgroundImage: "url('image/green_bg.svg')" }}>

            <div className='text-center lg:pt-24 pt-10 '>
                <p className='lg:font-[600] lg:text-[27px] font-semibold text-lg lg:text-center text-left px-5'>Your Top Choice for Expert Services and Learning</p>
                <p className='lg:font-[100] lg:text-[16px] lg:p-5 lg:px-[400px] leading-relaxed lg:text-center text-left text-sm font-[100] p-4'>chieve Your Goals with Expert Support and Comprehensive Learning Resources for Personal and Professional Growth</p>
            </div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:p-14 lg:px-20 mx-auto ">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">

                    {data.map((item: Iitem, idx) =>
                        <div
                            className="relative group  block p-2 h-full w-full"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}>
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="absolute inset-0 h-full w-full  bg-[#0D7D61] dark:bg-slate-800/[0.8] block  rounded-[30px]"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15, delay: 0.2 },
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <div key={item.id} className={cn("size-full bg-white/5 backdrop-blur-lg  shadow-lg rounded-[30px] lg:p-8 p-5 border-[1px] border-gray-200 ")}>
                                <div className="flex items-center gap-x-4 mb-3">
                                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-2 border-white  bg-none">
                                        <img loading="lazy" src="image/home_service_icon.svg" alt="" />
                                    </div>
                                </div>
                                <div className="shrink-0 lg:my-7 my-3">
                                    <h3 className="block lg:text-[22px] font-semibold  dark:text-white ">{item.title}</h3>
                                </div>
                                <p className="font-[100] lg:text-[15px] text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>

        </div>
    )
}