import { useForm } from 'react-hook-form';
import { Ipost } from '../../interface/Ipost';
import { createPost } from '../../service/posts';
import { showNotification } from '../../redux-store/slice/authSlice';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

export default function FormComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm<Ipost>();
  // const [uploading, setUploading] = useState(false);
  // const store = useSelector((storeData:{}) => )
//   const [imagePreview, setImagePreview] = useState('')
const dispatch = useDispatch();

const mutation = useMutation({
  mutationFn: (user:Ipost) =>  createPost(user) ,
  onSuccess: (res:{data:{token:string, user:Ipost}}) => {
    console.log(res);
   dispatch(showNotification({show:true, message:"content created successful", type:'successful'}))
   return []
  }
});


  const onSubmit = (data: Ipost) => {
   mutation.mutate(data)
  };

  // const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;

  //   setUploading(true);
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const response = await fileService(formData)
  //     const imageUrl = response.data.filePath;
  //     console.log(imageUrl, response)
  //   //   setImagePreview(imageUrl)
  //     setValue('imgUrl', imageUrl);
  //     setUploading(false);
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     setUploading(false);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white rounded-xl shadow dark:bg-neutral-900">
        {/* <div className={`relative h-40 rounded-t-xl bg-[url('/Users/user/Desktop/school-project/backend-app/uploads/american-express.png')] bg-no-repeat bg-cover bg-center`}></div> */}
        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
          <div className="space-y-4 sm:space-y-6">
             <div className="space-y-2">
              <label htmlFor="title" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Title
              </label>
              <input
                id="title"
                type="text"
                {...register('title', { required: true })}
                className="input"
                placeholder="Enter title"
              />
              {errors.title && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Content
              </label>
              <textarea
                id="content"
                {...register('content', { required: true })}
                className="input"
                placeholder="Enter content"
              ></textarea>
              {errors.content && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Code
              </label>
              <textarea
                id="code"
                {...register('code', { required: true })}
                className="input"
                placeholder="Enter code"
              ></textarea>
              {errors.content && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label htmlFor="imgUrl" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Image URL
              </label>
              <input
                id="imgUrl"
                type="text"
                {...register('imgUrl')}
                className='input'
                placeholder="Enter image URL"
                readOnly
              />
              {/* <label
                htmlFor="uploadImage"
                className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-neutral-700"
              >
                <input
                  id="uploadImage"
                  type="file"
                  className="sr-only"
                  onChange={handleImageUpload}
                />
                {uploading ? (
                  <span className="text-gray-800 dark:text-neutral-200">Uploading...</span>
                ) : (
                  <>
                    <svg
                      className="size-10 mx-auto text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                      />
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                    </svg>
                    <span className="mt-2 block text-sm text-gray-800 dark:text-neutral-200">
                      Browse your device or <span className="group-hover:text-blue-700 text-blue-600">drag 'n drop'</span>
                    </span>
                    <span className="mt-1 block text-xs text-gray-500 dark:text-neutral-500">
                      Maximum file size is 2 MB
                    </span>
                  </>
                )}
              </label> */}
            </div>

            <div className="space-y-2">
              <label htmlFor="videoUrl" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Video URL
              </label>
              <input
                id="videoUrl"
                type="text"
                {...register('videoUrl')}
               className='input'
                placeholder="https://example.so"
              />
            </div>

       {/*
            <div className="space-y-2">
              <label htmlFor="status" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Status
              </label>
              <input
                id="status"
                type="text"
                {...register('status')}
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter status"
              />
            </div>
 <div className="space-y-2">
              <label htmlFor="paid" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Paid
              </label>
              <input
                id="paid"
                type="checkbox"
                {...register('paid')}
                className='input'
              />
            </div>
               <div className="space-y-2">
              <label htmlFor="categoryId" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Category ID
              </label>
              <input
                id="categoryId"
                type="number"
                {...register('categoryId')}
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter category ID"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="locationId" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Location ID
              </label>
              <input
                id="locationId"
                type="number"
                {...register('locationId')}
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter location ID"
              />
            </div>

          <div className="space-y-2">
              <label htmlFor="teacherId" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Teacher ID
              </label>
              <input
                id="teacherId"
                type="number"
                {...register('teacherId')}
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter teacher ID"
              />
            </div> */}

          </div>

          <div className="mt-5 flex justify-center gap-x-2">
            <button
              type="submit"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Submit your project
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}


