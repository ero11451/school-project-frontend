import { useMutation, useQuery } from "@tanstack/react-query";
import TableComponent from "../../component/TableComponent";
import {  deletePost, getPost } from "../../service/posts";
import { useState } from "react";
import { ICourse } from "../../interface/ICourse";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux-store/slice/notificationSlice";

export default function ProfilePosts() {
    const dispatch = useDispatch();
    const mutate =  useMutation({
        mutationFn:  deletePost ,
        onSuccess: () => {
           dispatch(showNotification({show:true, message:"content created successful", type:'successful'}))
           
        }
      });
     const [params, setParams]  = useState({page:1, pageSize: 10});
   
    const {data, isLoading} = useQuery({ 
        queryKey: ['posts', params],
        queryFn: () => getPost(params)
    })

    console.log(isLoading, setParams, mutate)
    const posts = data?.data?.data;

    return (
        <div>
          <TableComponent
           title={"Posts"} 
           data={posts} 
           headers={['title', 'content', 'imgUrl']}
           changePage={() => console.log}
           currentPage={0} totalPages={0} 
           deleteItem={(item:ICourse) =>   console.log(item)} />
        </div>
    )
}

