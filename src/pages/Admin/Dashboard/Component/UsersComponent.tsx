import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Table from "../../../../component/Table";
import { IUser } from "../../../../interface/IUser";
import { deleteUser, getUsers, updateUserById } from "../../../../service/users-service";
import { showNotification } from "../../../../redux-store/slice/notificationSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import CustomModel, { CustomButtonOpenModel, CustomCloseButtonModel } from "../../../../component/CustomModel";

export default function UsersComponent() {

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isValid, isLoading: isLoadingForm } } = useForm<IUser>();
  const [modelState, setModelState] = useState<{ type: string, data?: IUser  }>();

  const [params, setParams] = useState({
    page: 1,
    pageSize: 4,
    categoryId: null,
  });

  const { data: users, isLoading } = useQuery({
    queryKey: ["users", params],
    queryFn: () => getUsers(params),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: (res: { data: unknown }) => {
      dispatch(showNotification({ show: true, message: "Deleted successful", type: 'successful' }))
      console.log(res);
    }
  });


  const updateUser = useMutation({
    mutationFn: (data: IUser) => updateUserById(data),
    onSuccess: (res: { data: unknown }) => {
      dispatch(showNotification({ show: true, message: "Edited successful", type: 'successful' }))
      //  dispatch(setUserData(res.data.user))
      console.log(res);
    }
  });

 
  console.log(setParams, users?.data, isLoading, isLoadingForm, isValid);
  console.log(setParams)
  return (
    <div>
     <CustomButtonOpenModel text={modelState?.type || 'Create'} onClick={() => setModelState({type:"Create"})} className={""}  />
      <CustomModel title={modelState?.type || 'Create'}  >
        <form onSubmit={handleSubmit((data) => updateUser.mutate(data))}  >
          <div className="p-3">

            <label className="block text-sm font-medium mb-2 dark:text-white" >
              Email
            </label>
            <input className="input mb-3" type='email'   {...register("email", { required: true })} />
            <label className="block text-sm font-medium mb-2 dark:text-white" >
              Username
            </label>
            <input type='username' className='input' {...register("username", { required: true })} />
            {errors.email && <span className='text-sm text-red-600 '>This field is required</span>}
          </div>
          <CustomCloseButtonModel disabled={!isValid} className="btn-primary mt-3 flex justify-center w-full" type="submit" text={"Save"} />
    
        </form>
      </CustomModel>
      <Table
        isLoading={isLoading}
        columns={[
          {
            title: "user name",
            key: "userName",
          },
          {
            title: "email",
            key: "email",
          },
          {
            title: "phoneNumber",
            key: "phoneNumber",
          },

          {
            title: "action",
            key: () => (<>delete </>),
            render: (value: IUser, row: IUser) => {
              console.log(value)
              return <div className="flex gap-3">
                <button className="btn-primary btn" onClick={() => deleteMutation.mutate(row.id)}>Delete </button>
                <CustomButtonOpenModel className={""} text={"Edit"} />
              </div>
            },

          },
        ]}
        data={users?.data}
      />
    </div>
  )
}
