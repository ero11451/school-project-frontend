import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Table from "../../../../component/Table";
import { showNotification } from "../../../../redux-store/slice/notificationSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createCourses, deleteCourses, getCourses, updateCourses } from "../../../../service/courses-service";
import { ICourse, ICourseURLParams } from "../../../../interface/ICourse";
import CustomModel, { CustomButtonOpenModel } from "../../../../component/CustomModel";

export default function CoursesComponent() {

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isValid, isLoading: isLoadingForm }, setValue } = useForm<ICourse>();
  const [modelState, setModelState] = useState<{ type: string, data: ICourse }>();

  const [params, setParams] = useState<ICourseURLParams>({
    pageNumber: 1,
    pageSize: 4,
    categoryId: null,
    search: null,
    sortBy: null
  });

  const { data: response, isLoading } = useQuery({
    queryKey: ["course", params],
    queryFn:() => getCourses,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCourses,
    onSuccess: (res: { data: unknown }) => {
      dispatch(showNotification({ show: true, message: "Deleted successful" + res.data, type: 'successful' }))
    }
  });

  const createMutation = useMutation({
    mutationFn: createCourses,
    onSuccess: (res: { data: unknown }) => {
      dispatch(showNotification({ show: true, message: "Create successful " + res.data, type: 'successful' }))
    }
  });

  const updateMutation = useMutation({
    mutationFn: updateCourses,
    onSuccess: (res: { data: unknown }) => {
      dispatch(showNotification({ show: true, message: "Edited successful" + res.data, type: 'successful' }))
    }
  });



  console.log(response, isLoading, isLoadingForm, isValid, setValue, setModelState);
  return (
    <div>


      <CustomButtonOpenModel className={""} text={"Create"} />

      <CustomModel title={modelState?.type || ''}  >

        <form onSubmit={handleSubmit((data) => modelState?.type == "edit" ? updateMutation.mutate(data) : createMutation.mutate(data))} >

          <div className="p-3">

            <label className="block text-sm font-medium mb-2 dark:text-white" >
              Title
            </label>
            <input className="input mb-3" type='title' value={modelState?.data.courseName} {...register("courseName", { required: true })} />
            <label className="block text-sm font-medium mb-2 dark:text-white" >
              content
            </label>
            <input type='content' className='input' {...register("description", { required: true })} value={modelState?.data.description} />
            {errors.description && <span className='text-sm text-red-600 '>This field is required</span>}
          </div>
          <input disabled={!isValid} className="btn-primary mt-3 flex justify-center w-full" type="submit" />

        </form>

      </CustomModel>
      {/* {data} */}

      <Table
        isLoading={isLoading}
        columns={[

          {
            title: "title",
            key: "title",
          },
          {
            title: "content",
            key: "content",
          },

          {
            title: "action",
            key: () => (<>delete </>),
            render: (value: ICourse, row: ICourse) => {
              console.log(value)
              return <div className="flex gap-3">
                <button className="btn-primary btn" onClick={() => deleteMutation.mutate(row?.id || '')}>Delete </button>

                <CustomButtonOpenModel className={""} text={"Edit"} />
              </div>
            },

          },
        ]}
        data={response}
      />
      <button onClick={() => setParams({ pageSize: 10, categoryId: null, pageNumber: 2 })}></button>
    </div>
  )
}
