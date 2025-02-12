import React from 'react';

function RelatedCars({ cars }) {
	return (
		<div className="flex justify-between gap-8">
			<div className="max-w-sm w-full lg:w-sm  relative bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div className="relative max-h-[200px] h-[200px] overflow-hidden ">
					<img
						className="h-full w-full object-cover object-center absolute"
						src={cars.standardImages[0].url}
						alt=""
					/>
				</div>
				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Related car #1
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-white">EUR 69,420</p>
					<a
						href="#"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						Read more
						<svg
							aria-hidden="true"
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div className="max-w-sm w-full lg:w-sm  relative bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div className="relative max-h-[200px] h-[200px] overflow-hidden ">
					<img
						className="h-full w-full object-cover object-center absolute"
						src={cars.standardImages[0].url}
						alt=""
					/>
				</div>
				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Related car #1
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-white">EUR 69,420</p>
					<a
						href="#"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						Read more
						<svg
							aria-hidden="true"
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div className="max-w-sm w-full lg:w-sm  relative bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div className="relative max-h-[200px] h-[200px] overflow-hidden ">
					<img
						className="h-full w-full object-cover object-center absolute"
						src={cars.standardImages[0].url}
						alt=""
					/>
				</div>
				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Related car #1
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-white">EUR 69,420</p>
					<a
						href="#"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						Read more
						<svg
							aria-hidden="true"
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div className="max-w-sm w-full lg:w-sm  relative bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div className="relative max-h-[200px] h-[200px] overflow-hidden ">
					<img
						className="h-full w-full object-cover object-center absolute"
						src={cars.standardImages[0].url}
						alt=""
					/>
				</div>
				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Related car #1
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-white">EUR 69,420</p>
					<a
						href="#"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						Read more
						<svg
							aria-hidden="true"
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}

export default RelatedCars;
