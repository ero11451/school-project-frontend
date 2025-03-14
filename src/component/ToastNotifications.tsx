import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";



//   const toastMarkup1 = `
//     <div class="max-w-xs relative bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert">
//       <div class="flex p-4">
//         <div class="shrink-0">
//           <img class="inline-block size-8 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar">
//         </div>
//         <div class="ms-4 me-5">
//           <h3 class="text-gray-800 font-medium text-sm dark:text-white">
//             <span class="font-semibold">James</span> mentioned you in a comment
//           </h3>
//           <div class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
//             Nice work! Keep it up!
//           </div>
//           <div class="mt-3">
//             <button class="text-blue-600 decoration-2 hover:underline font-medium text-sm dark:text-blue-500">
//               Mark as read
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const toastMarkup2 = `
//     <div class="flex">
//       <p class="text-sm text-gray-700 dark:text-neutral-400">Your email has been sent</p>
//       <div class="ms-auto">
//         <button class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 dark:text-white" aria-label="Close">
//           <span class="sr-only">Close</span>
//           <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
//         </button>
//       </div>
//     </div>
//   `;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// function tostifyCustomClose(el: any) {
//     const parent = el.closest('.toastify');
//     const close = parent.querySelector('.toast-close');

//     close.click();
//   }

export const showToast = ({ message, type, show = true }: { message: string, type?: "successful" | 'error' | 'info', show: boolean }) => {
  Toastify({
    text:
      `
      <div class="flex">
        <p class="text-sm">${message}</p>
        <div class="ms-auto">
          <button  class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 dark:text-white" aria-label="Close" >
            <span class="sr-only">Close</span>
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          </button>
        </div>
      </div>
    `
    ,
    duration: 3000,
    close: show,
    escapeMarkup: false,
    gravity: "top",
    position: "right",
    // stopOnfocus:true,
    backgroundColor: type == 'error' && 'red' || type == 'info' && 'skyblue' || type == 'successful' && '#3D9F86' || 'white',
    className: "bg-red-200 fixed -top-[150px]  right-[20px] z-[90] rounded-xl transition-all duration-300 w-[320px]  rounded-xl shadow-lg [&>.toast-close]:hidden ",


  }).showToast();
  // setCount(count + 1);
};




