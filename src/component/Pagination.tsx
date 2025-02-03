import React from "react";

const Pagination = ({ page,  totalPages, onPageChange }:
    {
        page:number , 
        pageSize:number, 
        totalCount?:number, 
        totalPages:number, 
        onPageChange:(page:number) => void
}) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-10">
      <nav className="flex items-center gap-x-1" aria-label="Pagination">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg 
          text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none 
          dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          aria-label="Previous"
        >
          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-x-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => onPageChange(index + 1)}
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg 
              focus:outline-none ${
                page === index + 1
                  ? "bg-gray-200 text-gray-800 dark:bg-neutral-600 dark:text-white"
                  : "text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10"
              }`}
              aria-current={page === index + 1 ? "page" : undefined}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg 
          text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none 
          dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          aria-label="Next"
        >
          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
