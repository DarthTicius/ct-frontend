import React from 'react';
import Description from './Description';

function DescriptionBlock({ selectedCar, formatedPrice }) {
	return (
		<div className="grid grid-cols-[minmax(0,1.5fr),minmax(0,1fr)]  lg:gap-8 mt-24 relative">
			<div className="block">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900">
					{selectedCar.yearOfProduction} |{selectedCar.car.specification}
				</h1>

				<div className="mt-3">
					<h2 className="sr-only">Product information</h2>
					<p className="text-3xl tracking-tight text-gray-900">{formatedPrice}</p>
				</div>

				<div className="mt-3 prose max-w-[80ch]">
					<Description description={selectedCar.description.fr_FR} />
				</div>
			</div>
			<div className="block relative">
				{/* Decorative image grid */}
				<div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full">
					<div className="absolute transform sm:left-0 sm:top-1/2 sm:translate-x-8 lg:left-0 lg:-top-1/4 lg:translate-y-1/2 lg:translate-x-0">
						<div className="flex items-center space-x-6 lg:space-x-8">
							<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
								<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
									<img
										src={selectedCar.standardImages[0].url}
										alt=""
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src={selectedCar.standardImages[1].url}
										alt=""
										className="h-full w-full object-cover object-center"
									/>
								</div>
							</div>
							<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src={selectedCar.standardImages[2].url}
										alt=""
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src={selectedCar.standardImages[3].url}
										alt=""
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src={selectedCar.standardImages[4].url}
										alt=""
										className="h-full w-full object-cover object-center"
									/>
								</div>
							</div>
							<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src={selectedCar.standardImages[5].url}
										alt=""
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="h-64 w-44 overflow-hidden rounded-lg">
									<img
										src={selectedCar.standardImages[6].url}
										alt=""
										className="h-full w-full object-cover object-center"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DescriptionBlock;
