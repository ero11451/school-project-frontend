// import React from 'react'

export default function BookInSection() {
    return (
        <div>            <><div>


            <div className="overflow-hidden">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">


                        <div className="">

                            <div className="grid md:grid-cols-2 flex-col-reverse flex  gap-4 md:gap-8 xl:gap-20 md:items-center">
                                <div>
                                    <button className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                        <img loading="lazy"  src="icon/category-dark.svg" alt=""  />
                                        <p>Hire us</p>
                                    </button>
                                    <h1 className="block text-[32px] font-bold dark:text-white">
                                        Unlock Your Project’s Potential with <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#163930] dark:from-white via-green-900 to-[#3D9F86] dark:to-green-200 animate-gradien'>  Expert Talent</span>
                                    </h1>
                                    <p className="mt-3 lg:font-[200] font-[200] dark:text-white">
                                        Engage Directly with Your Tutor, Get Answers to Questions, and Sharpen Your Skills Through Quizzes Tailored for You
                                    </p>


                                    <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                                        <a  type="button" href="mailto:neeboh.io@gmail.com" className="btn-primary-rounded flex justify-center">
                                            Book a demo in 1 minutes
                                        </a>

                                    </div>


                                </div>


                                <div className="relative ms-4">
                                    <img loading="lazy"  className="w-full rounded-md" src="image/home_unlock_user_image.svg" alt="Hero Image" />
                                    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>


                                </div>

                            </div>

                        </div>


                        <div className="hidden absolute top-1/2 start-0 transform -translate-y-1/4 -translate-x-40 md:block lg:-translate-x-80" aria-hidden="true">
                            <img loading="lazy"  src="image/gradiant-ball.svg" alt="" />
                        </div>


                        <div className="hidden absolute top-1/5 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80 " aria-hidden="true">
                            <img loading="lazy"  src="image/cove_green.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {/* <SideShow /> */}

        </>
        </div>
    )
}
