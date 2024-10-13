import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";
// import SideShow from "./SideShow";
// import Glowing from "./headerBG/Glowing";


export default function Header() {

  const navigate = useNavigate();
  // console.log('Header', navigate, RoutePath.login)
  return (
    <><div>


      <div className="overflow-hidden bg-[#FEFAF1]" style={{ backgroundImage: "url('image/yelloBG.svg')" }}>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
          <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">

            <div className=" text-left lg:text-center">

              <h1 className="text-3xl text-[#101828] font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200">
                Transform Your Vision <br /> into
                <span className="ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#163930] via-green-900 to-[#3D9F86] animate-gradient">
                  Reality</span>
              </h1>
              <p className="lg:py-1 lg-px-5 lg:w-1/2 lg:m-auto py-5"> Unlock your potential with our learning portal and expert development services.
                Master new skills, grow your expertise, and transform your future today.</p>
              <div className="lg:flex lg:justify-center lg:p-10 lg:gap-2">
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-[#163930] text-white hover:bg-[#163930] focus:outline-none focus:bg-[#163930] disabled:opacity-50 disabled:pointer-events-none">
                  Book a demo
                </button>
                <button type="button" onClick={() => navigate( '/' + RoutePath.PostsList) } className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  Learn a skill</button>
              </div>
            </div>

            <div className="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80" aria-hidden="true">
              <img src="image/yello_shape.svg" alt="" />
            </div>
            <div className="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-10" aria-hidden="true">
              <img src="image/circle-home.svg" alt="" />
            </div>

            <div className="hidden absolute top-2/4 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80 " aria-hidden="true">
              <img className="rounded-full animate-roll" src="image/greenball.svg" alt="" />
            </div>
          </div>
        </div>



        <div className="w-full h-100 overflow-x-scroll flex -space-x-4  scrollbar-hide">
        <div className="h-full w-100"  ></div>
          <img src="image/home_page_bander_1.svg" className="h-full w-full" alt="Image 1" />
          <img src="image/home_page_bander_1.svg" className="h-full w-full" alt="Image 2" />
          <img src="image/home_page_bander_1.svg" className="h-full w-full" alt="Image 3" />
          <img src="image/home_page_bander_1.svg" className="h-full w-full" alt="Image 4" />
        </div>


        <br />
      </div>
    </div>
      {/* <SideShow /> */}

    </>


  )
}
