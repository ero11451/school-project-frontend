
import { Props } from "../../interface/PostComponent";

export default function PostsCategory({ categories, setParams, params }: Props) {
  return (
    <div>
      <div className="flex gap-2 max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-2 mx-auto  dark:bg-neutral-900">
        <button
          onClick={() => setParams({ page: 1, pageSize: 4, categoryId: null })}
          className={`${
            params.categoryId === null ? 'bg-lime-400' : 'dark:text-white'
          }  py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 dark:text-black focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white  dark:hover:text-neutral-300 dark:hover:border-neutral-300`}
        >
          All
        </button>
        {categories?.map((category) => (
          <button
            key={category.id}
            onClick={() => setParams({ page: 1, pageSize: 4, categoryId: category.id })}
            className={`${
              params.categoryId === category.id ?  'bg-lime-400' : 'dark:text-white'
            }  py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 dark:text-black focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white  dark:hover:text-neutral-300 dark:hover:border-neutral-300`}
          >
            {category.category}
          </button>
        ))}
      </div>
    </div>
  );
}
