// import React from 'react'
import { useSelector } from "react-redux";

export default function ExploreClasses() {
    const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);
    const headerBG :string = theme !== 'dark' ? "url('image/yelloBG.svg')" : "url('image/headerDarkBG.svg')"
    return (
        <div>
            {/* <img src="image/image363.svg" alt=""  /> */}

            <div className="overflow-hidden bg-[#FEFAF1]"  style={{backgroundImage:headerBG}}>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-1 ">
                    <div className="relative mx-auto max-w-5xl grid space-y-5 sm:space-y-10">

                        <div className="grid  lg:grid-cols-1 items-center gap-6 md:gap-10 ">

                            <div className="size-full   p-5  lg:text-center dark:text-white ">

                                <div className="shrink-0">
                                    <h3 className="block text-[22px] font-[600] 0">Explore classes from Neeboh</h3>
                                </div>

                                <p className="font-[100] lg:text-[18px] text-sm my-2 lg:px-32">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant dui consectetur sed nam amet, magna. Iet se
                                </p>
                                <button type="button" className="btn btn-primary-rounded">Get started</button>
                            </div>


                           <div className='w-screen'>
                                <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">

                                    {[1, 1, 1, 1, 1].map(() => <a  className="group  bg-white/30 backdrop-blur-lg  flex flex-col min-w-[350px] min-h-[350px] border border-gray-200 dark:border-gray-800  hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 " >
                      <div className="aspect-w-16 aspect-h-11">
                            <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                        </div>
                        <div className="my-6">
                            <h3 className="text-xl font-semibold text-start text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                                Announcing a free plan for small teams
                            </h3>
                            <p className="mt-5 text-gray-600 dark:text-neutral-200 text-left ">
                                At Wake, our mission has always been focused on bringing openness.
                            </p>
                        </div>
                        <div className="mt-auto flex items-center gap-x-3">
                            <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            <div>
                                <h5 className="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
                            </div>
                        </div>  

                                    </a>
                                    )}
                                </div>
                            </div> 

                            <div className="lg:p-5  lg:text-center dark:text-white">

                                    <h3 className=" lg:text-[22px] font-[600] ">
                                        See what our customers saying about us
                                    </h3>

                                <p className="font-[100] lg:text-[18px] text-sm lg:my-2 lg:px-32">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant dui consectetur sed nam amet, magna. Iet se
                                </p>
                            </div>

                            <div className="lg:grid lg:grid-cols-2 lg:gap-12 dark:text-white  lg:pt-3">
                                <div className="lg:w-full lg:h-full py-4 pr-6">
                                    <img src="image/home_unlock_user_image.svg" alt="" className=' bg-[#E8EBEA]  rounded-xl' />
                                </div>
                                <div className='lg:flex lg:flex-col lg:gap-10'>
                                    <h1 className=" lg:text-[24px] font-[400] text-[#456159] ">
                                        “Lorem ipsum dolor sit amet, consectetur aelit amet habitant dui consectetur “
                                    </h1>
                                    <p className=" font-[400] text-[14px] text-[#333333] dark:text-white p-2 font-[400]  border-l-2 border-[#E5951A] lg:p-5">
                                        Lorem ipsum dolor sit amet consectetur. Mi venenatis id diam sit. Etiam ac condimentum facilisi vivamus at. Cursus pharetra commodo tellus elementum pulvinar. Sollicitudin pharetra faucibus vitae ullamcorper congue purus.                                     </p>

                                    <div>
                                        <p className='font-[400]'>Muhammad Jamiu</p>
                                        <p className='text-[#828282] font-[200] text-sm lg:text-[14px]'>Facility manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="hidden absolute top-1/3 start-0 transform -translate-y-3/4 -translate-x-40 md:block lg:-translate-x-52" aria-hidden="true">
                            <img src="image/image362.svg" alt="" />
                        </div>
                        <div className="hidden absolute top-1/2 end-0 transform -translate-y-4/4 translate-x-40 md:block lg:translate-x-52 " aria-hidden="true">

                            <img src="image/image_359_1.svg" alt="" />
                        </div>
                        <div className="hidden absolute top-1/1 end-0 transform -translate-y-4/4 translate-x-40 md:block lg:translate-x-52 " aria-hidden="true">
                            <img src="image/image363.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
