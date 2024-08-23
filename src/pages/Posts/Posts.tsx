// import { getPost } from '../../service/posts'
import { useQuery } from '@tanstack/react-query'
import { useState, } from 'react'
import { categoryGetAll } from '../../service/category'
import PostsList from '../../component/PostList'
import PostsCategory from './PostsCategory'
// import { Ipost } from '../../interface/Ipost'
import { postData } from '../../service/postDB'
// import { LoadingIndicator } from '../../component'



export default function Posts() {
  const { data: categories } = useQuery({
    queryKey: ['category'],
    queryFn: () => categoryGetAll(),
  })
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
      <PostsCategory categories={categories?.data} setParams={setParams} params={params} />
      <PostsList posts={posts} params={params} setParams={setParams} />
      {/* {isLoading && <LoadingIndicator />} */}
    </div>
  )
}
