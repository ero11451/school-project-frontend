// import React from 'react'

export default function ContactUs() {
    return (
        <div className='bg-[#F8F8F8] dark:bg-neutral-900' >
            <div className="overflow-hidden bg-[#FEFAF1]" style={{ backgroundImage: "url('image/yelloBG.svg')" }}>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">

                        <div className="text-center">
                            <h1 className="text-3xl text-[#101828] font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200">
                                Get in Touch and Start Your Journey with Us Today
                            </h1>
                            <p className="mt-4 text-lg lg:mt-6">
                                We’re Here to Help – Reach Out for Questions, Support, or Collaboration Opportunities
                            </p>
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

            <div className="container mx-auto flex justify-center ">
                <div className='rounded-lg m-5 bg-white lg:p-5 py-3 w-fit dark:bg-white/30 dark:backdrop-blur-lg '>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:p-10 dark: ">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 ">
                            <div className="space-y-4 bg-[#FEFAF1] flex flex-col p-4 lg:p-6 justify-between ">
                                <div>
                                    <h2 className="text-2xl font-[500] text-[#101828] dark:text-neutral-200">
                                        Your Questions Matter – <span className='text-[#FEBE3F]'>  We’re Here to Assist You!</span>
                                    </h2>
                                    <div className="my-4">
                                        <div className="flex gap-x-5">
                                            <div className="inline-flex justify-center items-center size-[42px] rounded-full bg-[#E5951A1F] ">
                                                <img src="icon/sms.svg" alt="" />
                                            </div>

                                            <div className="grow">
                                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                                    Our Email
                                                </p>
                                                <h3 className="group-hover:text-blue-600 font-[500] text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                                    neeboh.io@gmail.com
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <div className="flex gap-x-5">
                                            <div className="inline-flex justify-center items-center size-[42px] rounded-full bg-[#E5951A1F] ">

                                                <img src="icon/call-calling.svg" alt="" />
                                            </div>

                                            <div className="grow">
                                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                                    Our Telephone
                                                </p>
                                                <h3 className="group-hover:text-blue-600 font-[500] text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                                    neeboh.io@gmail.com
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <p>
                                        You can also reach out to us on our social media
                                    </p>
                                    <div className="flex gap-3 mt-4 text-[#E5951A]">
                                        <div className="inline-flex justify-center items-center size-[42px] rounded-full bg-[#E5951A1F] ">
                                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                        </div>
                                        <div className="inline-flex justify-center items-center size-[42px] rounded-full bg-[#E5951A1F] ">
                                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                                            </svg>            </div>
                                        <div className="inline-flex justify-center items-center size-[42px] rounded-full bg-[#E5951A1F] ">
                                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                            </svg>       </div>
                                    </div>

                                </div>
                            </div>
                            <div className="space-y-4 flex flex-col gap-1 ">
                                <div>
                                    <label htmlFor="">Full name</label>
                                    <input type="text" className='input' />
                                </div>
                                <div>
                                    <label htmlFor="">Email</label>
                                    <input type="text" className='input' />
                                </div>
                                <div>
                                    <label htmlFor="">Subject</label>
                                    <input type="text" className='input' />
                                </div>
                                <div>
                                    <label htmlFor="">Message</label>
                                    <textarea className='input' ></textarea>
                                </div>

                                <button className=' btn-primary-rounded flex justify-center'>
                                    Shoot us a mail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
