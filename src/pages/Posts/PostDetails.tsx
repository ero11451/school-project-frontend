import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../../service/posts";
import { useParams } from "react-router-dom";
import { Ipost } from "../../interface/Ipost";
import useWindowWidth from "../../hooks/useWindowWidth";


export default function PostDetails() {

    const { postId } = useParams() || "";
    const id = Number(postId);

    const posts = useQuery({ 
        queryKey: ['posts_details', id],
        queryFn: () => getPostById(id) 
    });

    const width =  useWindowWidth();
    console.log(width);
    const postDetile = posts?.data?.data as Ipost;
  

    

    return (
        <div className="min-h-screen flex items-center justify-center dark:text-white">
        <div className="w-full lg:w-2/3 px-4">
            <div className="flex-1">
                <section id="introduction" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 da">  {postDetile?.title || ''}</h2>
                    <p className="text-gray-700 mb-4 dark:text-white">
                        {/* {postDetile.title} */}
                    </p>
                </section>
    
                <section id="content" className="mb-8">
                    {/* <img src="https://via.placeholder.com/800x400" alt="Placeholder" className="mb-4 rounded-lg shadow" /> */}

                    <iframe
                width={width < 300 ? 300 : 850}
                height={width < 300 ? 300 : 450}
                src={`https://www.youtube.com/embed/${postDetile?.videoUrl}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>


                    <h2 className="text-2xl font-semibold mb-4">Content</h2>
                    <p className="text-gray-700 mb-4 dark:text-white">
                        {postDetile?.content}
                    </p>

                   
                </section>
    
                <section id="examples" className="mb-8">
                    {/* 
                     <h2 className="text-2xl font-semibold mb-4">Examples</h2>
                     <p className="text-gray-700 mb-4 dark:text-white">
                        Here you can include code snippets and examples to illustrate the lesson content.
                     </p> */}
                    <pre className="bg-gray-800 text-white p-4 rounded-lg shadow">
                        <code>
                           {postDetile?.code}
                        </code>
                    </pre>
                </section>
    
                <section id="summary" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                    <p className="text-gray-700 mb-4 dark:text-white">
                        This is the summary of the lesson. Recap the key points covered and provide any final thoughts.
                    </p>
                </section>
            </div>
        </div>
    </div>
    
    );
}