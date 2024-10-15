// import React from 'react'

// interface dataInter {
//     title: string,
//     description: string
// }

const data  = [{
    title: 'Tailored Solutions for You',
    description: 'Get customized support for your unique needs – whether you need experts or learning tools, Neeboh is here for you.'
},
{
    title: 'Trusted and skilled Professionals',
    description: 'Our experts are thoroughly vetted to ensure you receive top-quality services every time'
},
{
    title: 'Learn at your own pace',
    description: 'Access a rich library of learning resources and interactive quizzes to boost your skills at your own pace.'
},
{
    title: 'Comprehensive Platform', description: ''
},
{
    title: 'Comprehensive Learning Resources', description: ''
},
{
    title: 'Secure and Reliable products', description: ''
}]

export default function HomePageService() {
    return (
        <div className=' bg-gradient-to-r from-[#14342C] via-[#0D7D61] to-[#14342C] text-white' style={{ backgroundImage: "url('image/green_bg.svg')" }}>

            <div className='text-center lg:pt-10 pt-5 '>
                <p className='lg:font-[600] lg:text-[32px] font-bold text-lg lg:text-center text-left px-5'>Your Top Choice for Expert Services and Learning</p>
                <p className='lg:font-[100] lg:text-[15px] lg:px-[400px] lg:text-center text-left text-sm font-[100] p-4'>chieve Your Goals with Expert Support and Comprehensive Learning Resources for Personal and Professional Growth</p>
            </div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">

                    {data.map(() =>
                        <div className="size-full bg-white/30 backdrop-blur-lg  shadow-lg rounded-lg lg:p-10 p-5 ">
                            <div className="flex items-center gap-x-4 mb-3">
                                <div className="inline-flex justify-center items-center size-[62px] rounded-full border-2 border-white dark:border-blue-900 bg-none">
                                    <img src="image/home_service_icon.svg" alt="" />
                                </div>
                            </div>
                            <div className="shrink-0 lg:my-10 my-3">
                                <h3 className="block lg:text-[32px] font-[600] 0 dark:text-white ">Trusted and skilled Professionals</h3>
                            </div>
                            <p className="font-[100] text-sm ">Get customized support for your unique needs – whether you need experts or learning tools, Neeboh is here for you..</p>
                        </div>
                    )
                    }
                </div>
            </div>

        </div>
    )
}