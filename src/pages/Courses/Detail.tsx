import useWindowWidth from '../../hooks/useWindowWidth';
import { IClass } from '../../interface/IClass';

export default function Detail({ posts }: { posts?: IClass }) {

    const width = useWindowWidth();
    const postDetile = posts || {title:'',content:'', videoUrl:'', summary:'', code:'' };
    return (
        <div>
            <div className="flex-1 dark:text-white">

                <section id="content" className="flex flex-col gap-4">
                
                    <iframe
                        width={width < 400 ? width- 50 : 850}
                        height={width < 300 ? width- 50 : 450}
                        src={`https://www.youtube.com/embed/${postDetile.videoUrl && postDetile.videoUrl.replace('&', '?')}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
               
                    <h2 className="text-2xl font-semibold ">  {postDetile?.title || ''}</h2>
          
                    <p className="text-gray-700  dark:text-white">
                        {postDetile?.content}
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg shadow">
                        <code>
                            {postDetile?.code}
                        </code>
                    </pre>
        
                    <p className="text-gray-700 dark:text-white">
                    {postDetile?.summary}
                    </p>
                </section>
            </div>
        </div>
    )
}
