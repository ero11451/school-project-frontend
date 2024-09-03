import React from 'react';

const DevToolsPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-black dark:text-white font-sans leading-relaxed min-w-screen  min-h-screen  lg:px-64 lg:p-10">
      
      <header className=" ">
        <h1 className="text-4xl font-bold">jero Documentation</h1>
        <p className="text-lg">A lightweight JavaScript library for creating custom components.</p>
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
          <pre className="bg-gray-900 text-green-400 p-4 rounded">
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
          <pre className="bg-gray-900 text-blue-400 p-4  rounded mb-6">
            <code>
              {`<!DOCTYPE html>
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
        </section>
      </main>


    </div>
  );
};

export default DevToolsPage;
