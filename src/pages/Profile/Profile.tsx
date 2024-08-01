import TableComponent from "../../component/TableComponent";


export default function Profile() {

  return (
    <div>

      <div className=" pt-5 flex flex-col dark:bg-neutral-700  bg-gray-900  backdrop-filter backdrop-blur-md  rounded bg-wave-svg bg-cover bg-center bg-no-repeat">
        <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
          <span className="block text-white">Nike React</span>
          <span className="block text-white text-xl md:text-3xl">Rewriting sport's playbook for billions of athletes</span>
          <div className="mt-5">
            <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Read Case Studies
            </a>
          </div>
        </div>
      </div>
      


<TableComponent title={""} data={[]} headers={[]} changePage={() => {} } deleteItem={undefined} currentPage={0} totalPages={0} />





    </div>
  )
}





