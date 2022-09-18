import React from 'react';

function Details({ passedData }) {
	return (
		<div>
			<div className="bg-white">
				<div aria-hidden="true" className="relative rounded sm:rounded-2xl">
					<img
						src={passedData.standardImages[2].url}
						alt=""
						className="h-48 w-full object-cover object-center rounded sm:rounded-t-2xl"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-white" />
				</div>
				<div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
					<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Vehicle Specifications
						</h2>
						<p className="mt-4 text-gray-700">Vehicle data</p>
					</div>

					<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
						{/* {/* {passedData.car.map((feature) => ( */}
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Make</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.car.make}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Model</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.car.model}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Name</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.car.specification}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Body</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.car.body}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Body Detailed</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.car.bodyDetailed}</dd>
						</div>
						{/* ))} */}
					</dl>
				</div>
				<div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
					<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
						<p className="mt-4 text-gray-700">Technical details</p>
					</div>

					<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Body style</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.car.body}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Body detail</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.car.bodyDetailed}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Power (kw/hp)</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.horsepower}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Cubic capacity (ccm)</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.cubicCapacity}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Cylinders</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.cylinder}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Steering</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.steering}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Front Brakes</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.frontBrakes}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Rear Brakes</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.rearBrakes}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Doors</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.doors}</dd>
						</div>
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Fuel</dt>
							<dd className="mt-2 text-sm text-gray-500">{passedData.fuel}</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	);
}

export default Details;
