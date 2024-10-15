// import React from 'react'
import { useSelector } from "react-redux";

export default function HomeService() {
    const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);
    const headerBG :string = theme !== 'dark' ? "url('image/yelloBG.svg')" : "url('image/headerDarkBG.svg')"

    return (
        <div>
            <div className="overflow-hidden bg-[#FEFAF1] dark:text-white"  style={{backgroundImage:headerBG }}>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-1 ">
                    <div className="relative mx-auto max-w-5xl grid space-y-5 sm:space-y-10">

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10 lg:m-12">

                            <div className="size-full   p-5 ">

                                <div className="shrink-0">
                                    <h3 className="block text-[22px] font-[600]  ">Our Service</h3>
                                </div>

                                <p className="font-[100] text-[18px] my-5">Expert solutions from market research to launch, designed to elevate your projects and drive success</p>
                                <button type="button" className="btn btn-primary-rounded">Get started</button>
                            </div>

                            {[1, 1, 1, 1, 1].map(() =>
                                <div className="size-full bg-white/30 backdrop-blur-lg   rounded-lg p-5 ">
                                    <div className="flex items-center gap-x-4 mb-3">
                                        <div className="inline-flex justify-center items-center size-[62px] bg-[#E8EBEA] rounded-full border-2 border-white  bg-none">
                                            <img src="icon/code_icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <h3 className="block text-[22px] font-[600] ">Product Development </h3>
                                    </div>
                                    <br />
                                    <p className="font-[100] text-[18px]">Get customized support for your unique needs – whether you need experts or learning tools, Neeboh is here for you..</p>
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
    )
}
