import { useState } from "react";
import HeardBg from "../../component/HeardBg";
import PostsList from "./PostList";
import { postData } from "../../service/postDB";

export default function CourseList() {

  const posts = postData;
  const [params, setParams] = useState({
    page: 1,
    pageSize: 4,
    categoryId: null,
  })

  return (
    <div >
      <HeardBg
        title={"Explore classes from Neeboh"}
        description={"Lorem ipsum dolor sit amet consectetur. Mauris id viverra adipiscing odio leo integer."}
        label={"Courses"}
        labelIcon={"category-1.svg"}
      />
      <div className=" dark:bg-neutral-900">

        <PostsList posts={posts} params={params} setParams={setParams} />
      </div>
    </div>
  )
}
