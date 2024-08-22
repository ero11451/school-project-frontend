/* eslint-disable @typescript-eslint/no-explicit-any */


import LoadingIndicator from './LoadingIndicator'

interface Icolumns {
	title:string,
	key:any,
	render? :any
}
const Table = ({
	columns,
	data,
	showHeaderIcon,
	tableStyle,
	isLoading,
	// onSelectedRowsChange,
	// hasCheckBox,
}: {
	columns: Array<Icolumns> ,
	data: any,
	showHeaderIcon?: boolean
	tableStyle?: string
	isLoading?: boolean
	// onSelectedRowsChange?: any
	// hasCheckBox?: any
}) => {



	return (
		<div>
			<div className='flex flex-col m-1'>
				<div className='-m-1.5 overflow-x-auto'>
					<div className='p-1.5 min-w-full inline-block align-middle'>
						<div className={`  overflow-hidden  ${tableStyle}`}>
							<table className='min-w-full   '>
								<thead className={`text-xs text-white bg-black  `}>
									<tr>
										
										{columns?.map((column: any, i: number) => (
											<th
												key={i}
												scope='col'
												className='px-6 py-3 text-start text-xs font-medium text-white capitalize'
											>
												<div className='flex'>
													{!showHeaderIcon && !column.excludeSort && ('')}
													<span> {column.title} </span>
												</div>
											</th>
										))}
									</tr>
								</thead>
								<tbody className=' '>
									{isLoading ? (
										<tr>
											<td colSpan={columns.length}>
												<LoadingIndicator />
											</td>
										</tr>
									) : (
										data?.map((row: any, rowIndex: any) => (
											<tr key={rowIndex}>
												
												{columns?.map((column: any, i: number) => (
													<td
														key={i}
														className='px-6 py-4 whitespace-nowrap border-dotted border-b-2  dark:text-white text-sm font-medium text-gray-800 '
													>
														{column.render
															? column.render(row[column.key], row)
															: row[column.key]}
													</td>
												))}
											</tr>
										))
									)}
								</tbody>
							</table>
						</div>
						{data?.length < 1 && (
							<div className='w-full text-center'>
								<h2 className='mt-5 font-semibold text-gray-800 dark:text-white'>
									There is no data in this table
								</h2>
								{/* <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Draft an invoice and send it to a customer.
            </p> */}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Table
