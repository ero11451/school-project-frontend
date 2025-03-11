import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";
import { getCourses } from "../../service/courses-service";
import { AnimatedTestimonials } from "../../components/ui/animated-testimonials";
import { BentoGridDemo } from "../../components/ui/BentoGrid";
import { limitText } from "../../utility/limitText";
// import { Carousel, SlideData } from "../../component/Carousel";
// import { CardDemo } from "../../component/CardDemo";

export default function ExploreClasses() {
    const navigate = useNavigate()
    const { data, isLoading } = useQuery({
        queryKey: ['courseClassList'],
        queryFn: () => getCourses({ pageNumber: 1, pageSize: 5 }),
    })
    const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);
    const headerBG: string = theme !== 'dark' ? "url('image/yelloBG.svg')" : "url('image/headerDarkBG.svg')"
    console.log(data, isLoading, headerBG, navigate)

    // const dataCarousel: SlideData[] = data?.data.data.map((course: ICourse) =>  {
    //  return { 
    //      src: course?.thumbnailUrl,
    //      title : course?.courseName,
    //      button : course?.description
    //     }})

    return (
        <div>
            {/* <CardDemo /> */}
            {/* <Carousel slides={dataCarousel}  /> */}
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
                                <button type="button" onClick={() => navigate('/' + RoutePath.courseList)} className="btn btn-primary-rounded ">Explore more</button>
                            </div>
                            {isLoading && "loading..."}

                                <div className="flex space-x-4 ">

                                    {!data?.data.data && <div className="text-center">There is no data </div>}
                                    <BentoGridDemo itemsList={data?.data?.data} />

                            
                            </div>

                            <div className="lg:p-5  lg:text-center dark:text-white">

                                <button className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full  font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                    <img loading="lazy" src="icon/category-dark.svg" alt="" />
                                    <p>Testimonials</p>
                                </button>
                                <h3 className=" lg:text-[22px] font-[600] m-4 ">
                                    See what our customers saying about us
                                </h3>

                                {/* <p className="font-[100] lg:text-[18px] text-sm lg:my-2 lg:px-32">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant dui consectetur sed nam amet, magna. Iet se
                                </p> */}
                                <AnimatedTestimonialsDemo />
                            </div>

                            {/* <div className="lg:grid lg:grid-cols-2 lg:gap-12 dark:text-white  lg:pt-3">
                                <div className="lg:w-full lg:h-full py-4 pr-6">
                                    <img loading="lazy" src="image/testimonial.svg" alt="" className=' rounded-xl' />
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
                            </div> */}
                        </div>


                        <div className="hidden absolute top-1/3 start-0 transform -translate-y-3/4 -translate-x-40 md:block lg:-translate-x-52" aria-hidden="true">
                            <img loading="lazy" src="image/image362.svg" alt="" />
                        </div>
                        <div className="hidden absolute top-1/2 end-0 transform -translate-y-4/4 translate-x-40 md:block lg:translate-x-52 " aria-hidden="true">

                            <img loading="lazy" src="image/imageblue.svg" alt="" />
                        </div>
                        <div className="hidden absolute top-1/1 end-0 transform -translate-y-4/4 translate-x-40 md:block lg:translate-x-52 " aria-hidden="true">
                            <img loading="lazy" src="image/image363.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}




export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}


