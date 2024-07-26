
export default function PostDetails() {
    return (
        <div className="min-h-screen flex items-center justify-center dark:text-white">
        <div className="w-full lg:w-2/3 px-4">
            <div className="flex-1">
                <section id="introduction" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 da">Introduction</h2>
                    <p className="text-gray-700 mb-4 dark:text-white">
                        This is the introduction section of the lesson. Here, you will get an overview of what the lesson will cover.
                    </p>
                </section>
    
                <section id="content" className="mb-8">
                    <img src="https://via.placeholder.com/800x400" alt="Placeholder" className="mb-4 rounded-lg shadow" />
                    <h2 className="text-2xl font-semibold mb-4">Content</h2>
                    <p className="text-gray-700 mb-4 dark:text-white">
                        This is the main content of the lesson. You can add text, images, and other elements here to explain the topic in detail.
                    </p>
                </section>
    
                <section id="examples" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Examples</h2>
                    <p className="text-gray-700 mb-4 dark:text-white">
                        Here you can include code snippets and examples to illustrate the lesson content.
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg shadow">
                        <code>
                            {`const example = () => { console.log('This is an example'); };`}
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