import React from "react";
import {
  //   IconArrowWaveRightUp,
  //   IconBoxAlignRightFilled,
  //   IconBoxAlignTopLeft,
  //   IconClipboardCopy,
  IconFileBroken,
  //   IconSignature,
  //   IconTableColumn,
} from "@tabler/icons-react";
import { cn } from "../../lib/utils";
// import { Link } from "react-router-dom";
// import { RoutePath } from "../../router/routerPath";
import { ExpandableCardDemo } from "./ExpandableCardDemo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BentoGridDemo({ itemsList }: { itemsList: any[] }) {
  return (
    <BentoGrid className=" mx-auto">
      {itemsList?.map((item, i) => (
        <>
          <ExpandableCardDemo cards={item}>
            <BentoGridItem
              key={i}
              title={item?.title || item?.courseName}
              description={item?.description}
              header={<Skeleton thumbnailUrl={item.thumbnailUrl} />}
              icon={<IconFileBroken className="h-4 w-4 text-neutral-500" />}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          </ExpandableCardDemo>

        </>
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ thumbnailUrl }: { thumbnailUrl: string }) => (
  !thumbnailUrl ? <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    : <img alt="" src={thumbnailUrl} className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />);
// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: <Skeleton />,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embark on exciting journeys and thrilling discoveries.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
// ];



export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-9xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  console.log("header", icon);
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento text-left hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">

        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white text-sm flex justify-center mt-3 group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center  transition duration-500">
            Start Learning
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center bg-green-500 absolute inset-0 transition duration-500 text-white z-20">
            Now ✈️
          </div>
        </ModalTrigger>
      </div>
    </div>
  );
};


export const ModalTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
        className
      )}
    >
      {children}
    </button>
  );
};