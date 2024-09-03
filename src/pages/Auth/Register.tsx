import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/routerPath";
import { RegisterService } from "../../service/auth/login.service";
import { Iuser } from "../../interface/Iuser";
import { useEffect, useState } from "react";
import { showNotification, setUserData, setToken } from "../../redux-store/slice/authSlice";
import { useDispatch } from "react-redux";

export default function Register() {
  const navigate = useNavigate();
  const [showPAssword, setShowPAssword] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<Iuser>({
    mode: "onChange", // Enables real-time form validation
  });
  
  // const mutation = useMutation({
  //   mutationFn: (data: Iuser) => RegisterService(data),
  // });

  const mutation = useMutation({
    mutationFn: (user:Iuser) =>  RegisterService(user) ,
    onSuccess: (res:{data:{accessToken:string, user:Iuser}}) => {
     dispatch(showNotification({show:true, message:"Registration successful", type:'successful'}))
     dispatch(setUserData(res.data.user))
     dispatch(setToken(res.data.accessToken));
     return navigate(`/${RoutePath.home}`);
    },
    onError(error, variables, context) {
      console.log(variables, context);
      dispatch(showNotification({show:true, message:error.message, type:'error'}))
        
    },
});

  const onSubmit: SubmitHandler<Iuser> = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className='flex justify-center flex-1 dark:bg-neutral-900 h-screen'>
      <div className="lg:w-2/5 w-full bg-white border border-gray-200 backdrop-blur-lg rounded-xl h-fit shadow-sm dark:bg-neutral-900 backdrop-blur-lg dark:border-neutral-700">
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

         

            <div className="grid gap-y-4">
              <form onSubmit={handleSubmit(onSubmit)}>
              {/* <label className="block text-sm font-medium mb-2 dark:text-white">
                Username
              </label>
              <input className="input mb-3" type='text' {...register("userName", { required: "Username is required" })} />
              {errors.userName && <span className='text-sm text-red-600'>{errors.userName.message}</span>} */}
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Email
                </label>
                <input className="input mb-3" type='email' {...register("email", { required: "Email is required" })} />
                {errors.email && <span className='text-sm text-red-600'>{errors.email.message}</span>}

                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Password
                </label>
                <div className="flex">

             
                <input type={showPAssword ? 'password' : 'text'} className='input ' {...register("password", {
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
                <button className="bg-lime-300 ml-2 px-2  rounded text-sm" onClick={() => setShowPAssword(!showPAssword)}>{showPAssword ? "Hide": "Show"}</button>  
                 </div>
                {errors.password && <span className='text-sm text-red-600'>{errors.password.message}</span>}

                <input disabled={!isValid} className="btn-primary mt-3" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
