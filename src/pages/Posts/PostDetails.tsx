// import { useQuery } from "@tanstack/react-query";
// import { getPostById } from "../../service/posts";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Detail from "./Detail";
import { Ipost } from "../../interface/Ipost";
import Task, { TaskProps } from "./Task";
import { postData } from "../../service/postDB";
import { RoutePath } from "../../router/routerPath";

export default function PostDetails() {
    const { postId } = useParams<{ postId: string }>();
    const id = Number(postId);
    const [showTest, setShowTest] = useState(true);

    const navigate = useNavigate();

    // const { data, error, isLoading } = useQuery({
    //     queryKey: ['posts_details', id],
    //     queryFn: () => getPostById(id),
    //     enabled: !!id // Ensures the query runs only if id is valid
    // });

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error loading post details</div>;

    const postDetail = postData.find((post: Ipost) => post.id === id) || postData[0];

    const postTest: TaskProps = {
        posts: {
            question: postDetail?.question || '',
            options: postDetail?.options || []
        }
    };

    return (
        <div className="min-h-screen flex justify-center dark:text-white">
            <div className="w-full lg:w-2/3 px-4">
            <div>
                <button 
                    onClick={() => navigate('/' + RoutePath.PostsList)} 
                    className={`py-2 px-3 btn`}
                >
                    Class list
                </button>
                <button 
                    onClick={() => setShowTest(!showTest)} 
                    className={`py-2 px-3 ${showTest ? 'bg-lime-400' : ''} dark:text-dark h-fit inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white`}
                >
                    {showTest ? 'Take Test' : 'Back'}
                </button>

            </div>

                {showTest ? <Detail posts={postDetail} /> : <Task posts={postTest.posts} />}
            </div>
        </div>
    );
}
