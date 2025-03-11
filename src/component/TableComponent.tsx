import  { FC, useState } from 'react';
import { IUser } from '../interface/IUser';
import { ICourse } from '../interface/ICourse';
import { limitText } from '../utility/limitText';

interface TableComponentProps {
    title: string;
    data: Array<ICourse | IUser>;
    headers: Array<string | number>;
    changePage: (pageNumber: number) => void;
    deleteItem: unknown ;
    currentPage: number;
    totalPages: number;
}

const TableComponent: FC<TableComponentProps> = ({
    title,
    data = [],
    headers = [],
    changePage,
    deleteItem,
    currentPage,
    totalPages
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Handle search input change
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredData = data.filter(item => {
        const itemString = JSON.stringify(item).toLowerCase();
        return itemString.includes(searchTerm);
    });

    return (
        <div className="max-w-[85rem]  sm:px-6 lg:p-8  mx-auto">
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                <div className="sm:col-span-1">
                                    <label htmlFor="table-search" className="sr-only">Search {title}</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="table-search"
                                            name="table-search"
                                            className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            placeholder="Search"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                                            <svg className="shrink-0 size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="11" cy="11" r="8" />
                                                <path d="m21 21-4.3-4.3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className="bg-gray-50 dark:bg-neutral-800">
                                    <tr>
                                        {headers.map((header, index) => (
                                            <th key={index} scope="col" className="px-3 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        {header}
                                                    </span>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item, index) => (
                                            <tr key={index} className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                                {headers.map((header, i) => (
                                                    <td key={i} className="px-3 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-white">
                                                        {header in item ? (
                                                            limitText(item[header as keyof typeof item] as string, 30)
                                                        ) : (
                                                            'N/A'
                                                        )}
                                                    </td>
                                                ))}
                                                <td>
                                                    <button type="button" onClick={() => deleteItem} className="flex shrink-0 justify-center items-center gap-2 size-[38px] text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">

                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={headers.length} className="text-center py-4">No data found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 dark:border-neutral-700">
                                <div className="text-sm text-gray-600 dark:text-neutral-400">
                                    Page {currentPage} of {totalPages}
                                </div>
                                <div>
                                    <button
                                        onClick={() => currentPage > 1 && changePage(currentPage - 1)}
                                        disabled={currentPage <= 1}
                                        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 bg-blue-700 dark:hover:bg-blue-800"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => currentPage < totalPages && changePage(currentPage + 1)}
                                        disabled={currentPage >= totalPages}
                                        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 bg-blue-700 dark:hover:bg-blue-800"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableComponent;
