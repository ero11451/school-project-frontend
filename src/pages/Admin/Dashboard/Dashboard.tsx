import CoursesComponent from "./Component/CoursesComponent";
import UsersComponent from "./Component/UsersComponent";


export default function Dashboard() {



  // if (isLoading) {
  //   return <p className="text-center">Loading...</p>;
  // }
  // if (!postsData?.data?.data) {
  //   return <p className="text-center">No data</p>;
  // }

  return (
    <div>
      {/* <div className=" pt-5 flex flex-col dark:bg-neutral-700 bg-gradient-to-r from-lime-900  to-lime-600  backdrop-filter backdrop-blur-md  rounded bg-wave-svg bg-cover bg-center bg-no-repeat">
        <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
          <span className="block text-white">Nike React</span>
          <span className="block text-white text-xl md:text-3xl">Rewriting sport's playbook for billions of athletes</span>
          <div className="mt-5">
            <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Read Case Studies
            </a>
          </div>
        </div>
      </div> */}

      <div className="border-b border-gray-200 dark:border-neutral-700">
        <nav
          className="flex gap-x-1"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-lime-600 hs-tab-active:text-lime-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
            id="tabs-with-underline-item-1"
            aria-selected="true"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
            role="tab"
          >
            Users
          </button>
        
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-lime-600 hs-tab-active:text-lime-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-3"
            aria-selected="false"
            data-hs-tab="#tabs-with-underline-3"
            aria-controls="tabs-with-underline-3"
            role="tab"
          >
            Courses
          </button>
        </nav>
      </div>

      <div className="">
        <div
          id="tabs-with-underline-1"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-1"
        >
       <UsersComponent />
        </div>
        <div
          id="tabs-with-underline-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-3"
        >
          <CoursesComponent />
        </div>
      </div>
    </div>
  );
}
