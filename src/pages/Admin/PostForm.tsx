import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../redux-store/slice/authSlice';
import { createPost } from '../../service/posts';
import { Ipost } from '../../interface/Ipost';

const PostForm: React.FC = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      content: '',
      imgUrl: '',
      videoUrl: '',
      code: '',
      status: 'draft',
      question: '',
      options: [
        {
          option: '',
          isCorrect: false,
        },
      ],
      categoryId: 0,
    },
  });

  const [uploading, setUploading] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>('');

  const mutation = useMutation({
    mutationFn: (data:Ipost) => createPost(data), 
    onSuccess:  (data: { response: string }) => {
      dispatch(showNotification({ show: true, message: "Post successful: " + data.response, type: 'successful' }));
    },
    onError: (error: {message:string}) => {
      dispatch(showNotification({ show: true, message: "Post failed: " + error.message, type: 'error' }));
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    return mutation.mutate(data);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white rounded-xl shadow dark:bg-neutral-900">
        {imagePreview && <img loading="lazy"  className='h-20' src={imagePreview} alt="Preview" />}
        <div className={`relative h-40 rounded-t-xl bg-[url(https://neebohfileserver.blob.core.windows.net/neebohfilecontainer/WhatsApp Image 2024-08-09 at 12.27.45 PM.jpeg)] bg-no-repeat bg-cover bg-center`}></div>
        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
          <div className="space-y-4 sm:space-y-6">
            
            {/* Title */}
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

            {/* Content */}
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

            {/* Code */}
            <div className="space-y-2">
              <label htmlFor="code" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Code
              </label>
              <textarea
                id="code"
                {...register('code', { required: true })}
                className="input"
                placeholder="Enter code"
              ></textarea>
              {errors.code && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            {/* Image URL and Upload */}
            <div className="space-y-2">
              <label htmlFor="imgUrl" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                Image URL
              </label>
              <input
                id="imgUrl"
                type="hidden"
                {...register('imgUrl')}
                value={imagePreview}
              />
              <label
                htmlFor="uploadImage"
                className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-neutral-700"
              >
                <input
                  id="uploadImage"
                  type="file"
                  accept="image/*"
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
              </label>
            </div>

            {/* Video URL */}
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

          </div>

          <div className="mt-5 flex justify-center gap-x-2">
            <button
              type="submit"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Submit your post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
