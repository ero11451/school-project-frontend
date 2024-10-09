import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginService } from '../../service/auth/login.service';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/routerPath';
import { Iuser } from '../../interface/Iuser';
import { setToken, setUserData, showNotification } from '../../redux-store/slice/authSlice';
import { useDispatch } from 'react-redux';
import HeardBg from '../../component/HeardBg';


export default function Login() {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isValid, isLoading } } = useForm<Iuser>();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: (user: Iuser) => LoginService(user),
    onSuccess: (res: { data: { accessToken: string, user: Iuser } }) => {
      dispatch(showNotification({ show: true, message: "login successful", type: 'successful' }))
      dispatch(setUserData(res.data.user))
      dispatch(setToken(res.data.accessToken));
      return navigate(`/${RoutePath.home}`);
    },
    onError(error, variables, context) {
      console.log(variables, context);
      dispatch(showNotification({ show: true, message: error.message, type: 'error' }))

    },
  });

  const onSubmit: SubmitHandler<Iuser> = (data) => {
    mutation.mutate(data)
  }


  return (
    <div className=' justify-center dark:bg-neutral-900 h-screen'>
      <HeardBg title={'Get started on Neeboh'} description={''} label={'Sign up'} labelIcon={'icon/profile.svg'} />

      <div className='flex justify-center'>

      <div className=" lg:w-2/5 w-full bg-white border border-gray-200 backdrop-blur-lg   rounded-xl h-fit shadow-sm dark:bg-neutral-900 backdrop-blur-lg dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="mt-5">

            {/* <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div> */}
            <p>{isLoading && "loading"}</p>
            <div className="grid gap-y-4">

              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="block text-sm font-medium mb-2 dark:text-white" >
                  Email
                </label>
                <input className="input mb-3" type='email'  {...register("email", { required: true })} />
                <label className="block text-sm font-medium mb-2 dark:text-white" >
                  Password
                </label>
                <input type='password' className='input' {...register("password", { required: true })} />
                {errors.email && <span className='text-sm text-red-600 '>This field is required</span>}
                <input disabled={!isValid} className="btn-primary-rounded mt-3 flex justify-center w-full" type="submit" />
              </form>
            </div>
          </div>
          <div className="text-center lg:p-5 flex flex-col gap-4 ">
            <p className="mt-2  text-gray-600 dark:text-neutral-400">
               Already have an account?
              <a className="decoration-2 hover:underline font-medium dark:text-blue-500"
                onClick={() => navigate(`/${RoutePath.register}`)}>
                Log in
              </a>
            </p>
            <p className=" lg:px-24 text-gray-800 dark:text-white">By Signing In, you agree to our terms of services and that you have read our privacy policy</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
