// import React from 'react'

export default function ProfilePage() {
  return (
    <div>
      <div className={`container mx-auto grid grid-cols-11 gap-4" `}>
        <div className=" col-span-2">
          <button className="dark:text-white w-full ">Personal info</button>
        </div>
        <div className=" col-span-9 ">
          <div>
            <div data-hs-file-upload='{"url": "/upload",  "acceptedFiles": "image/*",  "maxFiles": 1,  "singleton": true}'>
              <template data-hs-file-upload-preview="">
                <div className="size-20">
                  <img className="w-full object-contain rounded-full" data-dz-thumbnail="" />
                </div>
              </template>

              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                <div className="group" data-hs-file-upload-previews="" data-hs-file-upload-pseudo-trigger="">
                  <span className="group-has-[div]:hidden flex shrink-0 justify-center items-center size-20 border-2 border-dotted border-gray-300 text-gray-400 cursor-pointer rounded-full hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-600 dark:hover:bg-neutral-700/50">
                    <svg className="shrink-0 size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="10" r="3"></circle>
                      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                    </svg>
                  </span>
                </div>

                <div className="grow  ">
                  <div className="flex items-center justify-between gap-x-2">
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 dark:bg-black font-medium rounded-full border border-transparent bg-gray-100 dark:text-white hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" data-hs-file-upload-trigger="">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line>
                      </svg>
                      Upload photo
                    </button>
                    <div className="gap-4">
                    <button type="button" className="btn-outline mr-2" data-hs-file-upload-clear="">Cancel</button>
                    <button type="button" className="btn-primary-rounded" data-hs-file-upload-clear="">Save changes</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-full">
                  <label className="label" htmlFor="profileSettingsFirstName">First Name</label>
                  <input type="text" className="input" id="profileSettingsFirstName" placeholder="First Name" />
                </div>
                <div className="w-full">
                  <label className="label" htmlFor="profileSettingsLastName">Email address</label>
                  <input type="text" className="input" id="profileSettingsLastName" placeholder="Last Name" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
