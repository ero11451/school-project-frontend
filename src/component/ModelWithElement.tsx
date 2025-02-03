import { ReactNode, useState } from 'react'

export default function ModelWithElement({ children, title, btnStyle, btnText , onSave}: {
   title: string, 
   btnStyle: string, 
   btnText: string, 
   onSave:() => void,
   children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Button to open the modal */}
      <button
        type="button"
        className={btnStyle}
        onClick={ handleOpen}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="modal"
      >
         {btnText}
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          id="modal"
          className="fixed inset-0 z-[80]  flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-labelledby="modal-label"
          aria-hidden={!isOpen}
        >
          <div className="bg-white overflow-scroll  border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70 sm:max-w-lg sm:w-full">
            {/* Modal header */}
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 id="modal-label" className="font-bold text-gray-800 w-96 text-wrap  overflow-auto dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>

            {/* Modal content */}
            <div className=" w-full block overflow-auto max-w-2xl">
              {children}
            </div>

            {/* Modal footer */}
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                onClick={() => {
                  onSave && onSave();
                  handleClose();
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
