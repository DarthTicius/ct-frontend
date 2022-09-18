import React from 'react';

const InfoCard = ({ selectedCar, formatedPrice }) => (
	<div>
		<div className="container mx-auto px-20 mt-24">
			<div className="bg-white">
				<div className="relative px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
					<div className="max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
						<div className="flex-1 px-6 py-8 bg-white lg:p-12">
							<h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
								{selectedCar.yearOfProduction} | {selectedCar.car.specification}
							</h3>
							<div className="flex justify-between flex-col lg:flex-row">
								<p className="mt-6 text-base text-gray-500">City: {selectedCar.location.city}</p>
								<p className="mt-6 text-base text-gray-500">
									Country: {selectedCar.location.countryCode}
								</p>
							</div>
							<div className="mt-8">
								<div className="flex items-center">
									<h4 className="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-white">
										Quick details
									</h4>
									<div className="flex-1 border-t-2 border-gray-200" />
								</div>
								<ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
									<li className="flex items-start lg:col-span-1">
										<div className="flex-shrink-0">
											<svg
												className="w-5 h-5 text-green-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<p className="ml-3 text-sm text-gray-700">
											Manufacturer: {selectedCar.manufacturerCode}
										</p>
									</li>
									<li className="flex items-start lg:col-span-1">
										<div className="flex-shrink-0">
											<svg
												className="w-5 h-5 text-green-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<p className="ml-3 text-sm text-gray-700">
											Body: {selectedCar.car.body} / {selectedCar.car.bodyDetailed}
										</p>
									</li>
									<li className="flex items-start lg:col-span-1">
										<div className="flex-shrink-0">
											<svg
												className="w-5 h-5 text-green-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<p className="ml-3 text-sm text-gray-700">
											Horsepower: {selectedCar.horsepower}{' '}
										</p>
									</li>
									<li className="flex items-start lg:col-span-1">
										<div className="flex-shrink-0">
											<svg
												className="w-5 h-5 text-green-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<p className="ml-3 text-sm text-gray-700">CC: {selectedCar.cubicCapacity}</p>
									</li>
									<li className="flex items-start lg:col-span-1">
										<div className="flex-shrink-0">
											<svg
												className="w-5 h-5 text-green-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<p className="ml-3 text-sm text-gray-700">Cylinder: {selectedCar.cylinder}</p>
									</li>
									<li className="flex items-start lg:col-span-1">
										<div className="flex-shrink-0">
											<svg
												className="w-5 h-5 text-green-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<p className="ml-3 text-sm text-gray-700">
											Mileage: {selectedCar.mileageByUnit} ({selectedCar.mileageUnit})
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
							<div className="flex items-center justify-center mt-4 text-3xl font-extrabold text-gray-900">
								<span>{formatedPrice}</span>
							</div>
							<div className="mt-6">
								<div className="rounded-md shadow">
									<a
										href="#"
										className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-900"
									>
										Call
									</a>
								</div>
							</div>
							<div className="mt-6">
								<div className="rounded-md shadow">
									<a
										href="#"
										className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-900"
									>
										Message
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default InfoCard;
