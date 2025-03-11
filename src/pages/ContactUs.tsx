import { useSelector } from "react-redux";
import HeardBg from "../component/HeardBg";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { IContact } from "../interface/IContact";
import { createContact } from "../service/contactus-service";
import { showToast } from "../component/ToastNotifications";

export default function ContactUs() {
    const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);

    const bgImageURl = theme !== 'dark' ? "url('image/yelloBG.svg')" : "url('image/headerDarkBG.svg')";


    const { register, handleSubmit, formState: { errors, isValid, isLoading } } = useForm<IContact>();

    const mutation = useMutation({
        mutationFn:  createContact,
        onSuccess: (res: { data: unknown }) => {
         showToast({ show: true, message: "Message sent successful", type: 'successful' })
          console.log(res);
        },
        onError: (error) => { 
          showToast({ show: true, message: "There was an error with you message", type: 'error' })
          console.log(error)
        }
      });

    return (
        <div className='bg-[#F8F8F8] dark:bg-neutral-900' >
            
            <HeardBg 
                title={" Get in Touch and Start Your Journey with Us Today"}
                // description=" Get in Touch and Start Your Journey with Us Today"
                // description={"We’re Here to Help – Reach Out for Questions, Support, or Collaboration Opportunities"} 
                label={"Contact us"} 
                labelIcon={"icon/category-2.svg"} />
      

            <div className="container mx-auto flex justify-center lg:-mt-12">
                <div className='rounded-lg m-5 bg-white lg:p-5 py-3 w-fit dark:bg-white/10 dark:backdrop-blur-lg '>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:p-10 dark:">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 ">
                            <div style={{background: bgImageURl}} className="space-y-4 bg-[#FEFAF1] flex flex-col p-4 lg:p-6 justify-between rounded-lg">
                                <div>
                                    <h2 className="lg:text-2xl text-lg font-[500] text-[#101828] dark:text-neutral-200">
                                        Your Questions Matter – <span className='text-[#FEBE3F]'>  We’re Here to Assist You!</span>
                                    </h2>
                                    <div className="my-4">
                                        <div className="flex gap-x-5">
                                            <div className="inline-flex justify-center items-center size-[42px] rounded-full bg-[#E5951A1F] ">
                                                <img loading="lazy"  src="icon/sms.svg" alt="" />
                                            </div>

                                            <div className="grow">
                                                <p className="text-sm text-gray-500 dark:text-neutral-300">
                                                    Our Email
                                                </p>
                                                <h3 className="group-hover:text-blue-600 font-[500] text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                                    neeboh.io@gmail.com
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <div className="flex gap-x-5">
                                            <div className="inline-flex justify-center items-center size-[42px] rounded-full bg-[#E5951A1F] ">

                                                <img loading="lazy"  src="icon/call-calling.svg" alt="" />
                                            </div>

                                            <div className="grow">
                                                <p className="text-sm text-gray-500 dark:text-neutral-300">
                                                    Our Telephone
                                                </p>
                                                <h3 className="group-hover:text-blue-600 font-[500] text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                                    neeboh.io@gmail.com
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <p className="dark:text-white">
                                        You can also reach out to us on our social media
                                    </p>
                                    <div className="flex gap-3 mt-4 text-[#E5951A]">
                                        <div className="inline-flex justify-center items-center size-[42px] rounded-full bg-[#E5951A1F] ">
                                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                        </div>
                                        <div className="inline-flex justify-center items-center size-[42px] rounded-full bg-[#E5951A1F] ">
                                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                                            </svg>            </div>
                                        <div className="inline-flex justify-center items-center size-[42px] rounded-full bg-[#E5951A1F] ">
                                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                            </svg>       </div>
                                    </div>

                                </div>
                            </div>
                            <form onSubmit={handleSubmit((data:IContact) =>  mutation.mutate(data))}  className="space-y-4 flex text-[12px] flex-col gap-1 dark:text-white font-[100]">
                                <div>
                                    <label htmlFor="text-sm" >Full name</label>
                                    <input  className='input' {...register("fullname", { required: true })} type="text"  />
                                </div>
                                <div>
                                    <label htmlFor="">Email</label>
                                    <input type='email' {...register("email", { required: true })}   className='input' />
                                </div>
                                <div>
                                    <label htmlFor="">Subject</label>
                                    <input type="text" className='input'  {...register("subject", { required: true })} />
                                </div>
                                <div>
                                    <label htmlFor="">Message</label>
                                    <textarea className='input' {...register("message", { required: true })} ></textarea>
                                </div>

                                {errors.email && <span className='text-sm text-red-600 '>This field is required</span>}
                                {isLoading && "loading..."}
                                <button disabled={!isValid} className=' btn-primary-rounded flex justify-center'>
                                    Shoot us a mail
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

