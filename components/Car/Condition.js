import React from 'react';

function Condition({ starsEngine, starsTechnik, starsPaint, starsInterior, licensed, readyToRide, accidentFree, id }) {
	return (
		<div>
			<div className="relative mx-auto mt-24  max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 ">
				<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
					<h3 className="mt-4 text-gray-700">Technical details</h3>
				</div>
				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-900">Technique(Seller assessment)</dt>
						<dd className="mt-2 text-sm text-gray-500">{starsTechnik} from 5</dd>
					</div>
					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-900">Paint (Seller assessment)</dt>
						<dd className="mt-2 text-sm text-gray-500">{starsPaint} from 5</dd>
					</div>
					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-900">Interior (Seller assessment)</dt>
						<dd className="mt-2 text-sm text-gray-500">{starsInterior} from 5</dd>
					</div>
					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-900">Historic license plate</dt>
						<dd className="mt-2 text-sm text-gray-500">{licensed}</dd>
					</div>
					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-900">Ready to drive</dt>
						<dd className="mt-2 text-sm text-gray-500">{readyToRide}</dd>
					</div>
					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-900">Accident-free</dt>
						<dd className="mt-2 text-sm text-gray-500">{accidentFree}</dd>
					</div>
					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-900">Vehicle-ID</dt>
						<dd className="mt-2 text-sm text-gray-500">{id}</dd>
					</div>
				</dl>
			</div>
		</div>
	);
}

export default Condition;
