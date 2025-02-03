import { useSelector } from "react-redux";
import { limitText } from "../../utility/limitText";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";
import { getCourses } from "../../service/courses-service";
import { ICourse } from "../../interface/ICourse";

export default function ExploreClasses() {
    const navigate = useNavigate()
    const { data, isLoading } = useQuery({
        queryKey: ['courseClassList'],
        queryFn: () => getCourses({ page: 1, pageSize: 5 }),
    })
    const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);
    const headerBG: string = theme !== 'dark' ? "url('image/yelloBG.svg')" : "url('image/headerDarkBG.svg')"
    console.log(data, isLoading, headerBG , navigate )

    return (
        <div>
            <div className="overflow-hidden bg-[#FEFAF1]" style={{ backgroundImage: headerBG }}>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-1 ">
                    <div className="relative mx-auto max-w-5xl grid space-y-5 sm:space-y-10">

                        <div className="grid  lg:grid-cols-1 items-center gap-6 md:gap-10 lg:mt-10">

                            <div className="size-full   p-5  lg:text-center dark:text-white ">

                                <div className="shrink-0">
                                    <h3 className="block text-[22px] font-[600] ">Explore classes from Neeboh</h3>
                                </div>

                                <p className="font-[100] lg:text-[15px] font-[100] p-3 text-sm  lg:px-48">
                                    {limitText(`Our classes cater to all skill levels, covering topics from technology and creative arts to business skills and  personal development. Gain practical experience,learn from industry experts, and join a community of  learners driven by growth and innovation. There's something here for everyone! `, 100)}
                                </p>
                                <button type="button" onClick={() => navigate('/' + RoutePath.courseList)} className="btn btn-primary-rounded m-5">Explore more</button>
                            </div>
                            {isLoading && "loading..."}

                            <div className='w-screen'>
                                <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">

                                 {!data?.data &&  <div className = "text-center">There is no data </div> }
                                    {data && data?.data?.data.map((item: ICourse) =>
                                        <a key={item.id} className="group  bg-white/50 dark:bg-white/10 backdrop-blur-lg  flex flex-col w-[400px] min-h-[350px] 
                                         border border-gray-200 dark:border-gray-800  hover:border-transparent hover:shadow-lg 
                                         focus:outline-none focus:border-transparent focus:shadow-lg transition
                                          duration-300 rounded-xl p-5 " >
                                            <div className="aspect-w-16 aspect-h-11">
                                                <img loading="lazy"  className="w-[400px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                                            </div>
                                            <div className="my-6">
                                                <h3 className="text-xl font-semibold text-start text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                                                    {item.courseName}
                                                </h3>
                                                <p className="mt-5 text-gray-600 dark:text-neutral-200 text-left ">
                                                    {limitText(item.description || '', 70)}
                                                </p>
                                            </div>
                                          

                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="lg:p-5  lg:text-center dark:text-white">

                            <button className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full  font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                        <img loading="lazy"  src="icon/category-dark.svg" alt=""  />
                                        <p>Testimonials</p>
                                    </button>
                                <h3 className=" lg:text-[22px] font-[600] ">
                                    See what our customers saying about us
                                </h3>

                                <p className="font-[100] lg:text-[18px] text-sm lg:my-2 lg:px-32">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant dui consectetur sed nam amet, magna. Iet se
                                </p>
                            </div>

                            <div className="lg:grid lg:grid-cols-2 lg:gap-12 dark:text-white  lg:pt-3">
                                <div className="lg:w-full lg:h-full py-4 pr-6">
                                    <img loading="lazy"  src="image/testimonial.svg" alt="" className=' rounded-xl' />
                                </div>
                                <div className='lg:flex lg:flex-col lg:gap-10'>
                                  <h1 className=" lg:text-[24px] font-[400] text-[#456159] ">
                                        “ “
                                    </h1>
                                    <p className=" font-[400] text-[14px] text-[#333333] dark:text-white p-2 font-[400]  border-l-2 border-[#E5951A] lg:p-5">
                                        Taking classes here has been an incredible experience! The variety of topics covered is impressive, and each course is thoughtfully designed to be both engaging and practical. The instructors are knowledgeable and genuinely invested in helping students succeed. I’ve gained valuable skills that I could apply right away, and the supportive community made learning enjoyable and inspiring. Highly recommend for anyone looking to grow personally and professionally!
                                    </p>
                                    <div>
                                        <p className='font-[400]'>Muhammad Jamiu</p>
                                        <p className='text-[#828282] font-[200] text-sm lg:text-[14px]'>Facility manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="hidden absolute top-1/3 start-0 transform -translate-y-3/4 -translate-x-40 md:block lg:-translate-x-52" aria-hidden="true">
                            <img loading="lazy"  src="image/image362.svg" alt="" />
                        </div>
                        <div className="hidden absolute top-1/2 end-0 transform -translate-y-4/4 translate-x-40 md:block lg:translate-x-52 " aria-hidden="true">

                            <img loading="lazy"  src="image/imageblue.svg" alt="" />
                        </div>
                        <div className="hidden absolute top-1/1 end-0 transform -translate-y-4/4 translate-x-40 md:block lg:translate-x-52 " aria-hidden="true">
                            <img loading="lazy"  src="image/image363.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
