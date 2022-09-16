import Head from 'next/head';
// import Navigation from 'Navigation';

const GuestLayout = ({ children }) => (
	<div className="bg-gray-100">
		<div className="mx-auto container">
			<Head>
				<title>CT Trader</title>
			</Head>

			<div className="font-sans text-gray-900 antialiased">{children}</div>
		</div>
	</div>
);

export default GuestLayout;
