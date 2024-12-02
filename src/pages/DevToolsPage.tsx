import React, { useState } from "react";
import documentation from "./documentation.json";
import { Documentation } from "../interface/IdevTool";

const DevToolsPage = () => {

  const [docData] = useState<Documentation[]>(documentation);

  const [selectedTopic , setTopic] = useState<Documentation>(documentation[0])

  if (!docData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-7xl px-4 lg:px-6 lg:px-8 lg:py-12 lg:py-2 mx-auto dark:bg-neutral-900 flex">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-9 dark:text-white">
        <div className="lg:col-span-2 flex lg:block flex flex-row flex-col overflow-x-auto overflow-x-visible">
          {/* <p className="lg:text-[20px]">Documents</p> */}
          {docData.map((topic:Documentation) =>
          <button
           onClick={() => setTopic(topic)}
          className={`p-4 border text-start border-2 w-full ${topic.id == selectedTopic.id ? "bg-green-800 text-white dark:bg-green-500" : ""} border-gray-50 dark:border-gray-500 dark:bg-gray-800 bg-gray-100 text-[#101828] dark:text-white text-sm rounded`}>
            {topic.title}
          </button> )}
        </div>

        <div className="lg:col-span-7">
          <header>
            <h1 className="lg:text-4xl font-bold">{selectedTopic?.title}</h1>
            <p className="lg:text-lg">{selectedTopic?.description}</p>
          </header>

          <main>
            {selectedTopic?.sections.map((section, index: number) => (
              <section key={index} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
                <p className="text-gray-700 dark:text-gray-200 mb-4">{section.content}</p>
                {section.code && (
                  <pre className="bg-gray-900 text-white p-4 dark:bg-green-700 rounded-b-lg overflow-auto max-w-full break-words font-mono text-sm">
                    <code>{section.code}</code>
                  </pre>
                )}
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DevToolsPage;
