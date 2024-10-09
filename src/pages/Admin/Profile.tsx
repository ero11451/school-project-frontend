import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { deleteUser, getUsers } from "../../service/users";
import { getPost } from "../../service/posts";
import Table from "../../component/Table";
import { Iuser } from "../../interface/Iuser";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux-store/slice/authSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    page: 1,
    pageSize: 4,
    categoryId: null,
  });
  const { data: postsData, isLoading } = useQuery({
    queryKey: ["posts", params],
    queryFn: () => getPost(params),
  });
  const { data: users } = useQuery({
    queryKey: ["users", params],
    queryFn: () => getUsers(params),
  });



  const mutation = useMutation({
    mutationFn: (id:string) =>  deleteUser(id),
    onSuccess: (res:{data:unknown}) => {
     dispatch(showNotification({show:true, message:"Deleted successful", type:'successful'}))
    //  dispatch(setUserData(res.data.user))
     console.log(res);
    }
});

  const deleteUserClick = (data:Iuser) => {
    mutation.mutate(data.id)
  }

  console.log(setParams, users?.data?.data);
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  // if (!postsData?.data?.data) {
  //   return <p className="text-center">No data</p>;
  // }

  return (
    <div>
      {/* <div className=" pt-5 flex flex-col dark:bg-neutral-700 bg-gradient-to-r from-lime-900  to-lime-600  backdrop-filter backdrop-blur-md  rounded bg-wave-svg bg-cover bg-center bg-no-repeat">
        <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
          <span className="block text-white">Nike React</span>
          <span className="block text-white text-xl md:text-3xl">Rewriting sport's playbook for billions of athletes</span>
          <div className="mt-5">
            <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Read Case Studies
            </a>
          </div>
        </div>
      </div> */}

      <div className="border-b border-gray-200 dark:border-neutral-700">
        <nav
          className="flex gap-x-1"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-lime-600 hs-tab-active:text-lime-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
            id="tabs-with-underline-item-1"
            aria-selected="true"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
            role="tab"
          >
            Users
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-lime-600 hs-tab-active:text-lime-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-2"
            aria-selected="false"
            data-hs-tab="#tabs-with-underline-2"
            aria-controls="tabs-with-underline-2"
            role="tab"
          >
            Posts
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-lime-600 hs-tab-active:text-lime-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-3"
            aria-selected="false"
            data-hs-tab="#tabs-with-underline-3"
            aria-controls="tabs-with-underline-3"
            role="tab"
          >
            Contact
          </button>
        </nav>
      </div>

      <div className="">
        <div
          id="tabs-with-underline-1"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-1"
        >
          <Table
            isLoading={isLoading}
            columns={[
              {
                title: "user_name",
                key: "user_name",
              },
              {
                title: "email",
                key: "email",
              },
              {
                title: "phoneNumber",
                key: "phoneNumber",
              }, {
                title: "action",
                key: () => (<>delete</>),
                render: (value: Iuser, row: Iuser) => {
                  console.log(value)
                  return <button onClick = {() => deleteUserClick(row)}>Delete</button>
                }
              },
            ]}
            data={users?.data?.data}
          />
        </div>
        <div
          id="tabs-with-underline-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-2"
        >
          <Table
            columns={[
              { title: "title", key: "title" },
              { title: "Content", key: "title" },
            ]}
            data={postsData?.data.data}
            isLoading={isLoading}
          />
        </div>
        <div
          id="tabs-with-underline-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-3"
        >
          <p className="text-gray-500 dark:text-neutral-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-neutral-200">
              third
            </em>{" "}
            item's tab body.
          </p>
        </div>
      </div>
    </div>
  );
}
