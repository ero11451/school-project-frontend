// import React from 'react'
import { useSelector } from "react-redux";

interface Iitem {
    id: number,
    title: string,
    description: string,
    iconurl:string,
    activte:boolean
}

const data : Iitem[] = [{
    id: 1,
    title: 'Tailored Solutions for You',
    description: 'Get customized support for your unique needs – whether you need experts or learning tools, Neeboh is here for you.',
    iconurl: "serviceIcon/Frame 1618869654 (3).svg",
    activte: true
},
{
    id: 2,
    title: 'Trusted and skilled Professionals',
    description: 'Our experts are thoroughly vetted to ensure you receive top-quality services every time',
    iconurl: "serviceIcon/Frame 1618869654 (2).svg",
    activte: false
},
{
    id: 3,
    title: 'Learn at your own pace',
    description: 'Access a rich library of learning resources and interactive quizzes to boost your skills at your own pace.',
    iconurl: "serviceIcon/Frame 1618869654 (1).svg",
    activte: false
},
{
    id: 4,
    title: 'Comprehensive Platform', description: 'We offer a one-stop solution for hiring professionals and accessing top-quality learning content, making your growth journey seamless.',
    iconurl: "serviceIcon/Frame 1618869654.svg",
    activte: false
},
{
    id: 5,
    title: 'Secure and Reliable products', description: 'Trustworthy services with a focus on your security and satisfaction every step of the way.',
    iconurl: "serviceIcon/Frame 1618869654 (1).svg",
    activte: false
}]

export default function HomeService() {
    const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);
    const headerBG :string = theme !== 'dark' ? "url('image/yelloBG.svg')" : "url('image/headerDarkBG.svg')"

    return (
        <div>
            <div className="overflow-hidden bg-[#FEFAF1] dark:text-white"  style={{backgroundImage:headerBG }}>
                <div className="max-w-[85rem] mx-auto  sm:px-6 lg:px-1 ">
                    <div className="relative mx-auto max-w-5xl grid space-y-5 sm:space-y-10">

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 md:gap-10 lg:my-20 mt-10">

                            <div className="size-full   p-5 lg:p-5 lg:pt-14 ">

                                <div className="shrink-0">
                                    <h3 className="block text-[22px] font-[600]  ">Our Service</h3>
                                </div>

                                <p className="font-[100] text-[16px] my-5">Expert solutions from market research to launch, designed to elevate your projects and drive success</p>
                                <button type="button" className="btn btn-primary-rounded">Get started</button>
                            </div>

                            {data.map((item) =>
                                <div key={item.id} className={`size-full  ${!item.activte ? 'bg-white dark:bg-white/10 ': 'bg-[#163930] text-white'} dark:backdrop-blur-lg   rounded-lg p-8 lg:rounded-[20px]`}>
                                    <div className="flex items-center gap-x-4 mb-3">
                                        <div className={`inline-flex justify-center items-center size-[62px] bg-[#E8EBEA] rounded-full border-2 border-white  bg-none`}>
                                            <img loading="lazy"  src={item.iconurl} alt="" />
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <h3 className="block text-[22px] font-[600] ">{item.title} </h3>
                                    </div>
                                    <br />
                                    <p className="font-[100] text-[18px]">{item.description}</p>
                                </div>
                            )
                            }
                        </div>


                        <div className="hidden absolute top-1/4 start-0 transform -translate-y-3/4 -translate-x-40 md:block lg:-translate-x-52" aria-hidden="true">
                            <img loading="lazy"  src="image/purpul_angule.svg" alt="" />
                        </div>
                        <div className="hidden absolute top-1/2 end-0 transform -translate-y-4/4 translate-x-42 md:block lg:translate-x-52 " aria-hidden="true">
                            <img loading="lazy"  src="image/yellow_bg_splash.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
