import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";
import { useSelector } from "react-redux";
import { FlipWords } from "../../components/ui/flip-words";
// import SideShow from "./SideShow";
// import Glowing from "./headerBG/Glowing";


export default function Header() {


  const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);
  const navigate = useNavigate();
  const headerBG :string = theme !== 'dark' ? "url('image/yelloBG.svg')" : "url('image/headerDarkBG.svg')"
  // console.log('Header', navigate, RoutePath.login)
  return (
    <><div>


      <div className="overflow-hidden bg-[#FEFAF1]" style={{ backgroundImage: headerBG }}>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
          <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">

            <div className=" text-left lg:text-center ">

              <h1 className="text-3xl text-[#101828] font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200 lg:pt-20">
                Transform Your <FlipWords words={["Vision" , "Idea", "Dream website"]} />  <br /> into
                <span className="ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#163930] via-green-900 to-[#3D9F86] animate-gradient dark:text-white">
                  Reality</span>
              </h1>
              <p className="lg:py-1 lg:pt-5 lg:font-[200] lg:w-3/4 lg:text-lg lg:m-auto py-5 dark:text-white"> Unlock your potential with our learning portal and expert development services.
                Master new skills, grow your expertise, and transform your future today.</p>
              <div className="lg:flex lg:justify-center lg:p-10 lg:gap-2">
                <button type="button" className="py-3 px-5 inline-flex items-center lg:w-fit lg:mb-2 mb-5 w-full text-center justify-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-[#163930] text-white hover:bg-[#163930] focus:outline-none focus:bg-[#163930] disabled:opacity-50 disabled:pointer-events-none">
                  Book a demo
                </button>
                <button type="button" onClick={() => navigate( '/' + RoutePath.courseList) } className="py-3 px-5 inline-flex lg:w-fit w-full h-fit items-center justify-center gap-x-2 text-sm font-medium rounded-full border border-gray-700  text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  Learn a skill</button>
              </div>
            </div>

            <div className="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80" aria-hidden="true">
              <img loading="lazy"  src="image/yello_shape.svg" alt="" />
            </div>
            <div className="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-10" aria-hidden="true">
              <img loading="lazy"  src="image/circle-home.svg" alt="" />
            </div>

            <div className="hidden absolute top-2/4 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80 " aria-hidden="true">
              <img loading="lazy"  className="rounded-full animate-roll" src="image/greenball.svg" alt="" />
            </div>
          </div>
        </div>



        {/* <div className="w-full h-100 overflow-x-scroll flex -space-x-4  scrollbar-hide">
        <div className="h-full w-100"  ></div>
          <div  className="h-full w-100" ></div>
          <img loading="lazy"  src="image/home_page_bander_1.svg" className="h-full w-full cover-full" alt="Image 1" />
          <img loading="lazy"  src="image/home_page_bander_2.svg" className="h-full w-full" alt="Image 2" />
          <img loading="lazy"  src="image/home_page_bander_3.svg" className="h-full w-full" alt="Image 3" />
        </div> */}


        <br />
      </div>
    </div>
      {/* <SideShow /> */}

    </>


  )
}
