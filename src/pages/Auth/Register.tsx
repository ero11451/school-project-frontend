import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";
import { RegisterService } from "../../service/auth/login.service";
import { Iuser } from "../../interface/Iuser";

export default function Register() {
 
  const navigate = useNavigate();

  const { register, handleSubmit,  formState: { errors, isValid , isLoading }, } = useForm<Iuser>();

  const mutation = useMutation({
    mutationFn: (event:Iuser) =>  RegisterService(event)
    
  })

  const onSubmit: SubmitHandler<Iuser> = (data) => {
    mutation.mutate(data)
  }

  // const loading = useSelector((state: { auth:{loading:boolean} }) => {
  //   console.log(state)
  //  return state.auth.loading})
  // const dispatch = useDispatch();



  return (
    <div className='flex justify-center flex-1 dark:bg-neutral-900 h-screen'>



      <div className=" lg:w-2/5 bg-white border border-gray-200 backdrop-blur-lg  rounded-xl h-fit shadow-sm dark:bg-neutral-900 backdrop-blur-lg dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Don't have an account yet?
              <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" 
               onClick={() => navigate(`/${RoutePath.login}`)}>
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-5">
       
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>

              <p>{isLoading && "loading"}</p>
              <div className="grid gap-y-4">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="block text-sm font-medium mb-2 dark:text-white" >
                      Username
                 </label>
                  <input className="input mb-3" type='text'  {...register("username", { required: true })} />
                <label className="block text-sm font-medium mb-2 dark:text-white" >
                      Email
                 </label>
                  <input className="input mb-3" type='email'  {...register("email", { required: true })} />
                  <label className="block text-sm font-medium mb-2 dark:text-white" >
                      Password
                 </label>
                  <input type='password' className='input' {...register("password", { required: true })} />
                  {errors.email && <span className='text-sm text-red-600 '>This field is required</span>}
                  <input disabled = {!isValid} className ="btn-primary mt-3" type="submit" />
                </form>
              </div>
      

          </div>
        </div>
      </div>
    </div>
  )
}