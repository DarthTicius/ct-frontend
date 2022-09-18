import Head from 'next/head';

import React from 'react';
import { useAuth } from '../hooks/auth';
import Header from '../components/Header';

import Footer from '../components/Footer';
import RelatedCars from '../components/Car/RelatedCars';
import GallerySingle from '../components/Car/GallerySingle';
import DescriptionBlock from '../components/Car/DescriptionBlock';

import InfoCard from '../components/Car/InfoCard';
import Details from '../components/Car/Details';
import Condition from '../components/Car/Condition';
import Hero from '../components/Hero';

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
							<Hero selectedCar={selectedCar} formatedPrice={formatedPrice} />

							<div className="mt-3 prose mx-auto max-w-full">
								<Details passedData={selectedCar} />
							</div>
							<div className="block w-full max-w-full">
								<GallerySingle galleryImages={selectedCar.standardImages} />
							</div>
							<DescriptionBlock selectedCar={selectedCar} />

							<InfoCard selectedCar={selectedCar} formatedPrice={formatedPrice} />
							<Condition carData={selectedCar} />

							<RelatedCars cars={selectedCar} />
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
