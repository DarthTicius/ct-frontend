import Head from 'next/head';

import React from 'react';
import { useAuth } from '../hooks/auth';
import Header from '../components/Header';

import Footer from '../components/Footer';
import RelatedCars from '../components/Car/RelatedCars';
import GallerySingle from '../components/Car/GallerySingle';
import Details from '../components/Car/Details';
import InfoCard from '../components/Car/InfoCard';
import Description from '../components/Car/Description';
import Condition from '../components/Car/Condition';

// import { getCarsList } from '../../lib/api';

const Home = ({ allCars }) => {
	const { user } = useAuth({ middleware: 'guest' });

	const selectedCar = allCars.cars[0];
	const { price } = allCars.cars[0];
	const formatedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);

	return (
		<>
			<Head>
				<title>CT Trader</title>
			</Head>
			<div className="bg-white">
				<div className="container mx-auto sm:px-6 lg:px-0">
					<div className="relative py-4 sm:py-6">
						<Header userisloggedin={user} />
					</div>
				</div>
				<div className="container mx-auto sm:px-6 lg:px-0 pb-10">
					<div className="relative min-h-screen ">
						<div>
							{/* hero */}
							<div className="relative">
								<div className="absolute inset-x-0 bottom-0 h-1/2 " />
								<div className="mx-auto max-w-full sm:px-6 lg:px-0">
									<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
										<div className="absolute inset-0">
											<img
												className="h-full w-full object-cover saturate-[-50] "
												src={allCars.cars[0].standardImages[0].url}
												alt=""
											/>
											<div className="absolute inset-0 bg-gray-700 mix-blend-multiply" />
										</div>
										<div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
											<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
												<span className=" text-gray-200">
													{allCars.cars[0].yearOfProduction}
												</span>{' '}
												<span className=" text-white">{allCars.cars[0].car.specification}</span>
											</h1>
											<h2 className="text-center text-3xl mt-4 font-bold tracking-tight sm:text-4xl lg:text-5xl">
												<span className=" text-gray-200">{formatedPrice}</span>{' '}
											</h2>
											<p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-200 sm:max-w-3xl">
												La voiture est une Ford Mustang fastback 67 d'origine avec un moteur
												Windsor 351 Construite sur une réplique d'Eleanor en 2002 par la société
												Shelby.
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
							<div className="mt-3 prose mx-auto max-w-full">
								<Details passedData={selectedCar} />
							</div>
							<div className="block w-full max-w-full">
								<GallerySingle galleryImages={allCars.cars[0].standardImages} />
							</div>
							<div className="grid grid-cols-[minmax(0,1.5fr),minmax(0,1fr)]  lg:gap-8 mt-24 relative">
								<div className="block">
									<h1 className="text-4xl font-bold tracking-tight text-gray-900">
										{allCars.cars[0].yearOfProduction} |{allCars.cars[0].car.specification}
									</h1>

									<div className="mt-3">
										<h2 className="sr-only">Product information</h2>
										<p className="text-3xl tracking-tight text-gray-900">{formatedPrice}</p>
									</div>

									<div className="mt-3 prose max-w-[80ch]">
										<Description description={allCars.cars[0].description.fr_FR} />
									</div>
								</div>
								<div className="block relative">
									{/* Decorative image grid */}
									<div
										aria-hidden="true"
										className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full"
									>
										<div className="absolute transform sm:left-0 sm:top-1/2 sm:translate-x-8 lg:left-0 lg:-top-1/4 lg:translate-y-1/2 lg:translate-x-0">
											<div className="flex items-center space-x-6 lg:space-x-8">
												<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
													<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
														<img
															src={allCars.cars[0].standardImages[0].url}
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src={allCars.cars[0].standardImages[1].url}
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
												</div>
												<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src={allCars.cars[0].standardImages[2].url}
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src={allCars.cars[0].standardImages[3].url}
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src={allCars.cars[0].standardImages[4].url}
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
												</div>
												<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src={allCars.cars[0].standardImages[5].url}
															alt=""
															className="h-full w-full object-cover object-center"
														/>
													</div>
													<div className="h-64 w-44 overflow-hidden rounded-lg">
														<img
															src={allCars.cars[0].standardImages[6].url}
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
							<InfoCard
								location={allCars.cars[0].location}
								manufacturerCode={allCars.cars[0].manufacturerCode}
								yearOfProduction={allCars.cars[0].yearOfProduction}
								car={allCars.cars[0].car}
								horsepower={allCars.cars[0].horsepower}
								cubicCapacity={allCars.cars[0].cubicCapacity}
								price={formatedPrice}
								cylinder={allCars.cars[0].cylinder}
								mileageByUnit={allCars.cars[0].mileageByUnit}
								mileageUnit={allCars.cars[0].mileageUnit}
							/>
							<Condition
								starsEngine={allCars.cars[0].starsEngine}
								starsTechnik={allCars.cars[0].starsTechnik}
								starsPaint={allCars.cars[0].starsPaint}
								starsInterior={allCars.cars[0].starsInterior}
								licensed={allCars.cars[0].licensed}
								readyToRide={allCars.cars[0].readyToRide}
								accidentFree={allCars.cars[0].accidentFree}
								id={allCars.cars[0].id}
							/>

							<RelatedCars cars={allCars.cars[0]} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;

export async function getStaticProps() {
	const carsData = (await fetch('http://127.0.0.1:8000/api/car')) || [];
	const allCars = await carsData.json();

	return {
		props: {
			allCars,
		},
		revalidate: 1,
	};
}
