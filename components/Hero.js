import React from 'react';

function Hero({ selectedCar, formatedPrice }) {
	return (
		<div className="relative">
			<div className="absolute inset-x-0 bottom-0 h-1/2 " />
			<div className="mx-auto max-w-full sm:px-6 lg:px-0">
				<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
					<div className="absolute inset-0">
						<img
							className="h-full w-full object-cover saturate-[-50] "
							src={selectedCar.standardImages[0].url}
							alt=""
						/>
						<div className="absolute inset-0 bg-gray-700 mix-blend-multiply" />
					</div>
					<div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
						<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
							<span className=" text-gray-200">{selectedCar.yearOfProduction}</span>{' '}
							<span className=" text-white">{selectedCar.car.specification}</span>
						</h1>
						<h2 className="text-center text-3xl mt-4 font-bold tracking-tight sm:text-4xl lg:text-5xl">
							<span className=" text-gray-200">{formatedPrice}</span>{' '}
						</h2>
						<p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-200 sm:max-w-3xl">
							La voiture est une Ford Mustang fastback 67 d'origine avec un moteur Windsor 351 Construite
							sur une réplique d'Eleanor en 2002 par la société Shelby.
						</p>
						<div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
							<div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
								<a
									href="#"
									className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8"
								>
									Call
								</a>
								<a
									href="#"
									className="flex items-center justify-center rounded-md border border-transparent bg-green-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
								>
									Message
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
