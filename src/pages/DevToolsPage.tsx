const DevToolsPage = () => {
  return <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-2 mx-auto  dark:bg-neutral-900 flex">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 dark:text-white ">

      <div>
        <p>Documents</p>
        <button className="p-4 border text-start border-2 border-gray-200 text-[#101828] dark:text-white text-sm rounded">Understanding JavaScript Scope</button>
      </div>

      <div className="  col-span-3   ">

        <header className=" ">
          <h1 className="lg:text-4xl font-bold">jero Documentation</h1>
          <p className="lg:text-lg">A lightweight JavaScript library for creating custom components.</p>
        </header>

        <main className="">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700  dark:text-gray-200">
              <code>jero</code> is a lightweight JavaScript library that enables you to define custom components with an easy-to-use API.
              It is designed to be simple yet powerful, allowing you to create interactive components that can manage their own
              state, handle lifecycle events, and interact with the DOM effortlessly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              To get started with <code>jero</code>, include the library in your HTML file by adding the following script tag:
            </p>
            <pre className="bg-gray-900 text-blue-400 p-4 rounded-b-lg overflow-auto max-w-full break-words font-mono text-sm">

              <code>&lt;script src="https://unpkg.com/jero@1.0.25/dist/jero.js"&gt;&lt;/script&gt;</code>
            </pre>

            <p className="text-gray-700  dark:text-gray-200 mt-4">
              This will make the <code>jero</code> library available globally in your project, allowing you to define and use custom components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Creating a Custom Component</h2>
            <p className="text-gray-700  dark:text-gray-200 mb-4">
              You can create a custom component using the <code>jero.default</code> function. Below is an example that demonstrates how to
              define a component called <code className="bg-gray-300 dark:bg-gray-800 p-1 rounded">&lt;my-custom-component&gt;</code>:
            </p>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg shadow-lg max-w-full">
              <div className="bg-gray-900 text-gray-400 p-2 rounded-t-lg flex items-center justify-between">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
                </div>
                <div className="text-sm">jero.js - Visual Studio Code</div>
                <div className="flex-1"></div>
              </div>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-b-lg overflow-auto max-w-full break-words font-mono text-sm">
                <code>
                  {`
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>jero Example</title>
                <script src="https://unpkg.com/jero@1.0.25/dist/jero.js"></script>
              </head>
              <body>

              <my-custom-component data-message="Hello from Attribute"></my-custom-component>

              <script>

                jero.default('my-custom-component', function (component) {
                  component.state = { message: "Hello, World!" };

                  component.handlePageEnter = () => {
                    console.log("Page entered.");
                  };

                  component.handlePageLeave = () => {
                    console.log("Page left.");
                  };

                  component.handleUpdateButtonClick = function () {
                    this.setState({ message: "Hello from the updated state!" });
                  };

                  return () => \`
                    <div>
                      <h1>\${component.state.message}</h1>
                      <input type="text" data-bind="message" />
                      <button data-on="click: handleUpdateButtonClick">Update Message</button>
                      <p>Attribute value: \${component.getAttributeData("data-message") || "N/A"}</p>
                    </div>
                  \`;
                });

              </script>

              </body>
              </html>`}
                </code>
              </pre>
            </div>

          </section>
        </main>


      </div>


      <div>
        <p>On this page</p>
        <button className="p-4 border border-2 border-gray-200 text-[#101828] text-sm rounded dark:text-white">
        Introduction
        </button>
      </div>
    </div>
  </div>
  };

export default DevToolsPage;
