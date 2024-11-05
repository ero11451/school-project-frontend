// import React from 'react'

export default function HomeDevTool() {
    return (
        <div>
            <div className="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="text-center lg:p-10">
                    <button type="button" className="btn w-fit "></button>
                        <p className='font-[600]  lg:text-[32px] dark:text-white text-[#163930] '>Powerful Dev Tools to Bring Your 
                            <span className="text-transparent 
                        bg-clip-text bg-gradient-to-r dark:from-white text-[#163930] lg:from-[#163930] 
                        via-green-900 to-[#3D9F86] dark:text-white animate-gradient"> Ideas to Life</span>
                        </p>
                    <p className='lg:px-60 text-sm dark:text-gray-200 text-black' >Access cutting-edge development tools and resources to streamline your workflow and  build exceptional digital products</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="lg:w-full">
                       <img src="image/Frame1000001885@2x.svg" alt="" className='bg-[#E8EBEA]  dark:bg-[#E8EBEA] dark:border-gray-800 border-8 border-[#E8EBEA] rounded-xl' />
                    </div>


                    <div className="space-y-6 lg:space-y-10">

                        <div className="flex gap-x-5 sm:gap-x-8 border-b pb-4">

                            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            </span>
                            <div className="grow">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    Industry-leading documentation
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                    Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-5 sm:gap-x-8 border-b pb-4">

                            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                            </span>
                            <div className="grow">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    Developer community support
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                    We actively contribute to open-source projects—giving back to the community through development, patches, and sponsorships.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-5 sm:gap-x-8 border-b pb-4">

                            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                            </span>
                            <div className="grow">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    Simple and affordable
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                    From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
