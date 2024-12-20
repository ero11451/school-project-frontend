import useWindowWidth from '../../hooks/useWindowWidth';
import { Ipost } from '../../interface/Ipost';

export default function Detail({ posts }: { posts?: Ipost }) {

    const width = useWindowWidth();
    const postDetile = posts || {title:'',content:'', videoUrl:'', summary:'', code:'' };
    return (
        <div>
            <div className="flex-1 dark:text-white">
                <section id="introduction" className="mb-8 lg:flex">
                    <h2 className="text-2xl font-semibold mb-4 da">  {postDetile?.title || ''}</h2>
                    {/* <p className="text-gray-700 mb-4 dark:text-white">
                            {postDetile.title}
                        </p> */}

                </section>

                <section id="content" className="mb-8">
                
                    <iframe
                        width={width < 300 ? 300 : 850}
                        height={width < 300 ? 300 : 450}
                        src={`https://www.youtube.com/embed/${postDetile.videoUrl && postDetile.videoUrl.replace('&', '?')}`}
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

                    <h2 className="text-2xl font-semibold mb-4">Examples</h2>
                    {/*   <p className="text-gray-700 mb-4 dark:text-white">
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
                    {postDetile?.summary}
                    </p>
                </section>
            </div>
        </div>
    )
}
