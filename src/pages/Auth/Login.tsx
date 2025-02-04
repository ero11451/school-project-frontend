import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginService } from '../../service/auth/login.service';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/routerPath';
import { IUser } from '../../interface/IUser';
import { setToken, setUser } from '../../redux-store/slice/authSlice';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../../service/users-service';
import { useState } from 'react';
import { showToast } from '../../component/ToastNotifications';


export default function Login() {

  const navigate = useNavigate();
  const [showPassword, setShowPAssword] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid, isLoading } } = useForm<IUser>();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn:  LoginService,
    onSuccess: (res:{data:{token:string}}) => {
      showToast({ show: true, message: "login successful", type: 'successful' });
      dispatch(setToken(res.data.token));
      getUserProfile().then((user: {data:IUser}) => dispatch(setUser(user.data)))
    },
    onError(error:{response:{data:{message:string  }}  }, errorVar, context) {
      console.log("error message ", error.response.data .message, errorVar, context) ;
      showToast({ show: true, message: error.response.data .message, type: 'error' })
    },

  });

  const onSubmit: SubmitHandler<IUser> = (data) => {
    mutation.mutate(data)
  }


  return (
    <div className=' justify-center dark:bg-neutral-900 h-scree'>
      {/* <HeardBg title={'Get started on Neeboh'} description={''} label={'Sign up'} labelIcon={'icon/profile.svg'} /> */}

      <div className='flex justify-center'>

        <div className=" lg:w-2/5 w-full bg-white border- border-gray-20 backdrop-blur-lg   rounded-xl h-fit shadow-sm dark:bg-neutral-900 backdrop-blur-lg dark:border-neutral-700">
          <div className="p-4 sm:p-7">
            <div className="">

              {/* <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div> */}
              <p>{isLoading && "loading"}</p>
              <div className="grid gap-y-4">
                <h1 className="text-3xl font-bold dark:text-white">Welcome back Neeboh</h1>
                <p className='lg:w-3/4 text-sm text-gray-500'>By Sign add get access too our courses and save course you have taking in yhe past add so on </p>
                {/* <button className=' p-2 inline-flex items-center gap-x-1 text-xs font-medium text-[#E5951A] rounded-full bg-white/30 backdrop-blur-lg '>
                  <img loading="lazy" src={'icon/profile.svg'} alt="" />
                </button> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="block text-sm font-medium mb-2 dark:text-white" >
                    Email
                  </label>
                  <input className="input mb-3" type='email'  placeholder="you@site.com"  {...register("email", { required: true })} />
                  <label className="block text-sm font-medium mb-2 dark:text-white" >
                    Password
                  </label>
                  {/* <input type='password' className='input' {...register("password", { required: true })} /> */}

                  <div className="relative">
                    <input id="hs-toggle-password" {...register("password", { required: true })} type={showPassword ? "password" : "text"} className="py-3 ps-4 bg-gray-100 pe-10 block w-full input border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter password" />
                    <button onClick={() => setShowPAssword(!showPassword)} type="button" data-hs-toggle-password='{ "target": "#hs-toggle-password" }' className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
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

                  {errors.email && <span className='text-sm text-red-600 '>This field is required</span>}
                  <input disabled={!isValid} className="btn-primary mt-3 flex justify-center w-full" type="submit" />
                </form>
              </div>
            </div>
            <div className="text-xs lg:py-5 flex flex-col gap-2 ">
              <p className="mt-2   dark:text-neutral-400">
                Already have an account?
                <button className="decoration-2 hover:underline font-medium text-blue-600 ml-2 dark:text-blue-500"
                  onClick={() => navigate(`/${RoutePath.register}`)} >
                  Register here
                </button>
              </p>
              <p className=" lg:-24 text-gray-800 dark:text-white">By Signing Up, you agree to our terms of services and that you have read our privacy policy</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
