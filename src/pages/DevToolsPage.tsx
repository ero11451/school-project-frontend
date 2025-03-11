import { useState } from "react";
import documentation from "./documentation.json";
import { IDocumentation } from "../interface/IdevTool";
import { CodeBlock } from "../components/ui/code-block";
import { Tabs } from "../components/ui/tabs";

const DevToolsPage = () => {

  const [docData] = useState<IDocumentation[]>(documentation);
  const tabs = docData.map((doc) => ({
    title: doc.title,
    value: doc.title,
    content: <DocumentationElement selectedTopic={doc} />,
  }));

  if (!docData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-hidden dark:bg-neutral-900 h-screen">
      <div className="max-w-7xl px-4 lg:px-6 lg:px-8 lg:py-12 lg:py-2 mx-auto dark:bg-neutral-900 flex overflow-scroll">
        <div className=" md:h-screen [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default DevToolsPage;


const DocumentationElement = ({ selectedTopic }: { selectedTopic: IDocumentation }) => {
  return <div className="mt-4 bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-lg overflow-scroll">
    <header>
      <h1 className="lg:text-4xl font-bold text-white">{selectedTopic?.title}</h1>
      <p className="lg:text-lg mb-5 dark:text-gray-200  text-gray-700">{selectedTopic?.description}</p>
    </header>



    <main>
      {selectedTopic?.sections.map((section, index: number) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">{section.heading}</h2>
          <p className="text-gray-700 dark:text-gray-200 mb-4">{section.content}</p>

          {section.code && <CodeBlock
            language={section.language || "javascript"}
            filename={"index." + section.language}
            highlightLines={[9, 13, 14, 18]}
            code={section.code}
          />}
        </section>
      ))}
    </main>
  </div>
}


