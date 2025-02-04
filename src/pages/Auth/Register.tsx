import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";
import { RegisterService } from "../../service/auth/login.service";
import { IUser } from "../../interface/IUser";
import { useEffect, useState } from "react";
import { setUserData, setToken } from "../../redux-store/slice/authSlice";
import { useDispatch } from "react-redux";
// import HeardBg from "../../component/HeardBg";
// import { showNotification } from "../../redux-store/slice/notificationSlice";
import { showToast } from "../../component/ToastNotifications";

export default function Register() {
  const navigate = useNavigate();
  const [showPAssword, setShowPAssword] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IUser>({
    mode: "onChange", // Enables real-time form validation
  });
  
  // const mutation = useMutation({
  //   mutationFn: (data: IUser) => RegisterService(data),
  // });

  const mutation = useMutation({
    mutationFn: (user:IUser) =>  RegisterService(user) ,
    onSuccess: (res:{data:{accessToken:string, user:IUser}}) => {
    showToast({show:true, message:"Registration successful", type:'successful'})
     dispatch(setUserData(res.data.user))
     dispatch(setToken(res.data.accessToken));
     return navigate(`/${RoutePath.login}`);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error:any, variables) {
      console.log(variables, error);
      if (error?.response?.data.errors)  
            error?.response?.data.errors.map((errorItem:string )=> showToast({show:true, message:errorItem, type:'error'}))
      else
        showToast({show:true, message:error.message, type:'error'})
        
    },
});

  const onSubmit: SubmitHandler<IUser> = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div>
      {/* <HeardBg title={'Get started on Neeboh'} description={''} label={'Sign up'} labelIcon={'icon/profile.svg'} /> */}
    <div className='flex justify-center flex-1 dark:bg-neutral-900 h-scree p-5'>
    <div className=" lg:w-2/5 w-full bg-white border- border-gray-20 backdrop-blur-lg    h-fit dark:bg-neutral-900 backdrop-blur-lg dark:border-neutral-700">
    <div className=" sm:p-7">
          {/* <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Don't have an account yet?
              <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                 onClick={() => navigate(`/${RoutePath.login}`)}>
                Sign in here
              </a>
            </p>
          </div> */}

          <div className="">
            {/* <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div> */}

         

            <div className="grid gap-y-4">
                <h1 className="text-3xl font-bold">Get started on Neeboh</h1>
                <p className='lg:w-3/4 text-sm text-gray-500'>By Sign add get access too our courses and save course you have taking in the past add so on </p>
              <form onSubmit={handleSubmit(onSubmit)}>
             <label className="block text-sm font-medium mb-2 dark:text-white">
                Username
              </label>
              <input className="input mb-3" type='text' {...register("userName", { required: "Username is required" })} />
              {errors.userName && <span className='text-sm text-red-600'>{errors.userName.message}</span>}
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Email
                </label>
                <input className="input mb-3" type='email' {...register("email", { required: "Email is required" })} />
                {errors.email && <span className='text-sm text-red-600'>{errors.email.message}</span>}

                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Password
                </label>
                {/* <div className="flex"> */}
                <div className="relative">
                    <input id="hs-toggle-password" {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long"
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])/,
                    message: "Password must contain an uppercase letter, a lowercase letter, a number, and a special character"
                  }
                })} type={showPAssword ? "password" : "text"} className="py-3 ps-4 bg-gray-100 pe-10 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter password" />
                    <button onClick={() => setShowPAssword(!showPAssword)} type="button" data-hs-toggle-password='{ "target": "#hs-toggle-password" }' className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
                      <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                        <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                  </div>
             
                {/* <input type={showPAssword ? 'password' : 'text'} className='input ' {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long"
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])/,
                    message: "Password must contain an uppercase letter, a lowercase letter, a number, and a special character"
                  }
                })} />
                <button className="bg-lime-300 ml-2 px-2  rounded text-sm" onClick={() => setShowPAssword(!showPAssword)}>{showPAssword ? "Hide": "Show"}</button>   */}
                 {/* </div> */}
                {errors.password && <span className='text-sm text-red-600'>{errors.password.message}</span>}

                <input disabled={!isValid} className="btn-primary mt-3 flex justify-center w-full" type="submit" />
              </form>
            </div>
          </div>


          <div className="text- lg:py-5 flex flex-col gap-4 ">
              <p className="text-sm mt-3  dark:text-neutral-400">
                Already have an account?
                <button className="decoration-2 hover:underline font-medium text-blue-600 ml-2 dark:text-blue-500"
                  onClick={() => navigate(`/${RoutePath.login}`)} >
                  Login here
                </button>
              </p>
              <p className="text-xs text-gray-800 dark:text-white">By Signing Up, you agree to our terms of services and that you have read our privacy policy</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}
