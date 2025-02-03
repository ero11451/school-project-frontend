import { ReactNode } from "react"

export default function CustomModel({title, children}:{title:string, children:ReactNode}) {
  return (
    <div>


      <div id="hs-static-backdrop-modal" className="hs-overlay [--overlay-backdrop:static] hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabIndex={-1} aria-labelledby="hs-static-backdrop-modal-label" data-hs-overlay-keyboard="false">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 id="hs-static-backdrop-modal-label" className="font-bold text-gray-800 dark:text-white">
                {title}
              </h3>
              <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-static-backdrop-modal">
                <span className="sr-only">Close</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              {children}
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-static-backdrop-modal">
                Close
              </button>
              {/* <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// React.ButtonHTMLAttributes<HTMLButtonElement>

export function CustomCloseButtonModel(
  { 
    text, 
    disabled, 
    className, 
    type,   
    ...rest}:
  {
    text:string,
    disabled ?:boolean,
    type?: "submit" | "reset" | "button" | undefined, 
    className?:string,
    rest? : React.ButtonHTMLAttributes<HTMLButtonElement>
  })
  {
  return (
    <button {...rest} disabled = {disabled} className ={className} type={type}  >
    {text}
  </button>)
}


export function CustomButtonOpenModel({ className, text, onClick, ...rest }: { className: string, text: string , onClick?:() => void }) {
  return (
    <button type="button" onClick ={()=> onClick} className={className} {...rest} aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-static-backdrop-modal" data-hs-overlay="#hs-static-backdrop-modal">
      {text}
    </button>)
}