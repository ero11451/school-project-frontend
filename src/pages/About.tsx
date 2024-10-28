import { useSelector } from "react-redux";
import HeardBg from "../component/HeardBg";

interface Iitem {
    title: string,
    description: string
}

const data = [{
    title: 'Tailored Solutions for You',
    description: 'Get customized support for your unique needs – whether you need experts or learning tools, Neeboh is here for you.'
},

{
    title: 'Secure and Reliable products', description: 'Trustworthy services with a focus on your security and satisfaction every step of the way.'
}]

export default function About() {
    const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);
    return (
        <div className="dark:bg-neutral-900 dark:text-white">

            {/* category-2.svg */}
            <HeardBg title={"Empowering Growth Through Learning and Innovation"}
                description={"At Neeboh, we connect learners, businesses, and professionals to create opportunities for growth and success."} label={"About us"} labelIcon={"icon/category-2.svg"} />
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">

                <div className="lg:grid lg:grid-cols-2  gap-4">
                    <p className=" font-[600] lg:text-[36px]">
                        We are dynamic platform that bridges the gap between <span className="text-[#10182873] dark:text-white">learning and professional services </span>
                    </p>
                    <p className="text-[#333333] font-[300] lg:text-[18px] dark:text-white">
                        Our mission is to empower individuals and businesses by providing access to expert talent, practical learning resources, and seamless development tools, enabling everyone to achieve their full potential
                    </p>
                </div>
                <div className="grid grid-cols-4  grid-rows-4 gap-4 my-10 h-fit">
                    <div className="bg-gray-300 col-span-2 row-span-4 rounded-lg">
                        <img src="image/Frame1618870078.svg" alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="bg-gray-300 col-span-2 row-span-2 rounded-lg">

                        <img src="image/Frame1618870079.svg" alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className=" bg-gray-300 col-span-2 row-span-2 rounded-lg">

                        <img src="image/Frame1618870080.svg" alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>


            </div>


            <div className=' bg-gradient-to-r from-[#14342C] via-[#0D7D61] lg:pb-12 to-[#14342C] text-white' style={{ backgroundImage: "url('image/green_bg.svg')" }}>

                <div className='text-center lg:pt-24 pt-10 '>
                    <p className='lg:font-[600] lg:text-[32px] font-semibold text-lg lg:text-center text-left px-5'>Guided by Our Mission, Driven by Our Values</p>
                    <p className='lg:font-[100] lg:text-[16px] lg:p-5 lg:px-[400px] leading-relaxed lg:text-center text-left text-sm font-[100] p-4'>
                    Empowering Growth and Success Through Integrity, Innovation, and Collaboration, to Create Meaningful Impact</p>
                </div>

                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:p-14 lg:px-20 mx-auto ">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-6 md:gap-10">

                        {data.map((item: Iitem) =>
                            <div className="size-full bg-white/5 backdrop-blur-lg  shadow-lg rounded-[30px] lg:p-8 p-5 border-[1px] border-gray-200 ">
                                <div className="flex items-center gap-x-4 mb-3">
                                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-2 border-white  bg-none">
                                        <img src="image/home_service_icon.svg" alt="" />
                                    </div>
                                </div>
                                <div className="shrink-0 lg:my-7 my-3">
                                    <h3 className="block lg:text-[32px] font-semibold  dark:text-white ">{item.title}</h3>
                                </div>
                                <p className="font-[100] lg:text-[18px] text-sm leading-relaxed">{item.description}</p>
                            </div>
                        )
                        }
                    </div>
                </div>

            </div>







            <div className="overflow-hidden">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
                        <div className="">
                            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                                <div>
                                    <h1 className="block text-[32px] font-bold dark:text-white">
                                        Unlock Your Project’s Potential with <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#163930] dark:from-white via-green-900 to-[#3D9F86] dark:to-green-200 animate-gradien'>  Expert Talent</span>
                                    </h1>
                                    <p className="mt-3 lg:font-[400] font-[200] dark:text-white">
                                        Engage Directly with Your Tutor, Get Answers to Questions, and Sharpen Your Skills Through Quizzes Tailored for You
                                    </p>
                                    <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                                        <a className="btn-primary-rounded flex justify-center" href="#">
                                            Book a demo in 1 minutes
                                        </a>
                                    </div>
                                </div>
                                <div className="relative ms-4">
                                    <img className="w-full rounded-md" src="image/home_unlock_user_image.svg" alt="Hero Image" />
                                    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>


                                </div>

                            </div>

                        </div>


                        <div className=" absolute top-1/2 start-0 transform -translate-y-1/4 -translate-x-40 md:block lg:-translate-x-80" aria-hidden="true">
                            <img src="image/gradiant-ball.svg" alt="" />
                        </div>


                        <div className=" absolute top-1/5 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80 " aria-hidden="true">
                            <img src="image/cove_green.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="overflow-hidden">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">


                        <div className="">
                            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                                <div className="relative ms-4">
                                    <img className="w-full rounded-md" src="image/home_unlock_user_image.svg" alt="Hero Image" />
                                    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
                                </div>
                                <div>
                                <h1 className="block text-[32px] font-bold dark:text-white">
                                        Unlock Your Project’s Potential with <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#163930] dark:from-white via-green-900 to-[#3D9F86] dark:to-green-200 animate-gradien'>  Expert Talent</span>
                                    </h1>
                                    <p className="text-sm font-[400]">
                                        Engage Directly with Your Tutor, Get Answers to Questions, and Sharpen Your Skills Through Quizzes Tailored for You
                                    </p>
                                    <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                                        <a className="btn-primary-rounded flex justify-center" href="#">
                                            Book a demo in 1 minutes
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="overflow-hidden bg-[#FEFAF1] dark:text-white"
                    style={{ backgroundImage: theme !== 'dark' ? "url('image/yelloBG.svg')" : "url('image/headerDarkBG.svg')" }}>
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-1 ">
                        <div className="relative mx-auto max-w-5xl grid space-y-5 sm:space-y-10">

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10 lg:m-12">

                                <div className="size-full   p-5 ">

                                    <div className="shrink-0">
                                        <h3 className="block text-[22px] font-[600] 0 dark:text-white ">Our Service</h3>
                                    </div>

                                    <p className="font-[100] text-[18px] my-5">Expert solutions from market research to launch, designed to elevate your projects and drive success</p>
                                    <button type="button" className="btn btn-primary-rounded">Get started</button>
                                </div>

                                {[1, 1, 1, 1, 1].map(() =>
                                    <div className="size-full bg-white/30 backdrop-blur-lg   rounded-lg p-5 text-black dark:text-white">
                                        <div className="flex items-center gap-x-4 mb-3">
                                            <div className="inline-flex justify-center items-center size-[62px] bg-[#E8EBEA] rounded-full border-2 border-white  bg-none">
                                                <img src="icon/code_icon.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="shrink-0">
                                            <h3 className="block text-lg lg:text-[22px] font-[600] ">Product Development </h3>
                                        </div>
                                        <br />
                                        <p className="font-[100]  text-sm lg:text-[18px]">Get customized support for your unique needs – whether you need experts or learning tools, Neeboh is here for you..</p>
                                    </div>
                                )
                                }
                            </div>


                            <div className="hidden absolute top-1/3 start-0 transform -translate-y-3/4 -translate-x-40 md:block lg:-translate-x-52" aria-hidden="true">
                                <img src="image/purpul_angule.svg" alt="" />
                            </div>
                            <div className="hidden absolute top-1/2 end-0 transform -translate-y-4/4 translate-x-40 md:block lg:translate-x-52 " aria-hidden="true">
                                <img src="image/yellow_bg_splash.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
