// import { getPost } from '../../service/posts'
// import { useQuery } from '@tanstack/react-query'
import { useState, } from 'react'
// import { categoryGetAll } from '../../service/category'
import PostsList from './PostList'
// import PostsCategory from './PostsCategory'
// import { Ipost } from '../../interface/Ipost'
import { postData } from '../../service/postDB'
// import { LoadingIndicator } from '../../component'



export default function Posts() {
  // const { data: categories } = useQuery({
  //   queryKey: ['category'],
  //   queryFn: () => categoryGetAll(),
  // })
  const [params, setParams] = useState({
    page: 1,
    pageSize: 4,
    categoryId: null,
  })
  // const { data, isLoading } = useQuery({
  //   queryKey: ['posts', params],
  //   queryFn: () => getPost(params),
  // })


  const posts = postData

  // useEffect(() => {
  //   postData.map((post) => post.categoryId ==  params.categoryId ));
  // }, [params])


  return (
    <div className=" dark:bg-neutral-900">
      <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-2 mx-auto  dark:bg-neutral-900 flex">
        <div className="relative">
          <input type="email" className="peer py-3 px-4 ps-11 block w-full bg-gray-100 rounded-full border-transparent  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter name" />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <img src="icon/search.svg" alt=""  />
          </div>
        </div>
        <select className="py-3 px-4 pe-9 block w-full border border-2 border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
          <option >Open this select menu</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>

      {/* <PostsCategory categories={categories?.data} setParams={setParams} params={params} /> */}
      <PostsList posts={posts} params={params} setParams={setParams} />
      {/* {isLoading && <LoadingIndicator />} */}
    </div>
  )
}
