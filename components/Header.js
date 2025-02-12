import React, { useState, Fragment } from 'react';

import { XIcon, MenuAlt1Icon, SearchIcon } from '@heroicons/react/solid/index';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';

import CtLogo from './svg/CtLogo';

const navigation = {
	categories: [
		{
			id: 'buy',
			name: 'Buy',
			featured: [
				{
					name: 'Cars',
					href: '#',
					imageSrc: '/images/car_1.jpeg',
					imageAlt: 'Buy Cars',
				},
				{
					name: 'Motorcycles',
					href: '#',
					imageSrc: '/images/moto_1.jpeg',
					imageAlt: 'Buy Motorcycles',
				},
			],
			sections: [
				{
					id: 'cars',
					name: 'Cars',
					items: [
						{ name: 'Buy Cars', href: '#' },
						{ name: 'Cars Dealers', href: '#' },
						{ name: 'Browse All Car Makes', href: '#' },
					],
				},
				{
					id: 'motorcycles',
					name: 'Motorcycles',
					items: [
						{ name: 'Buy Motorcycles', href: '#' },
						{ name: 'Motorcycles Dealers', href: '#' },
						{ name: 'Browse All Motorcycles Makes', href: '#' },
					],
				},
				{
					id: 'makes',
					name: 'Selected Makes',
					items: [
						{ name: 'Aston Martin', href: '#' },
						{ name: 'Audi', href: '#' },
						{ name: 'Bentley', href: '#' },
						{ name: 'Chevy', href: '#' },
						{ name: 'Ferrari', href: '#' },
						{ name: 'Ford', href: '#' },
						{ name: 'Mercedes', href: '#' },
						{ name: 'MG', href: '#' },
						{ name: 'Browse All Makes', href: '#' },
					],
				},
			],
		},
		{
			id: 'sell',
			name: 'Sell',
			featured: [
				{
					name: 'Cars',
					href: '#',
					imageSrc: '/images/car_1.jpeg',
					imageAlt: 'Buy Cars',
				},
				{
					name: 'Motorcycles',
					href: '#',
					imageSrc: '/images/moto_1.jpeg',
					imageAlt: 'Buy Motorcycles',
				},
			],
			sections: [
				{
					id: 'cars',
					name: 'Cars',
					items: [
						{ name: 'Buy Cars', href: '#' },
						{ name: 'Cars Dealers', href: '#' },
						{ name: 'Browse All Car Makes', href: '#' },
					],
				},
				{
					id: 'motorcycles',
					name: 'Motorcycles',
					items: [
						{ name: 'Buy Motorcycles', href: '#' },
						{ name: 'Motorcycles Dealers', href: '#' },
						{ name: 'Browse All Motorcycles Makes', href: '#' },
					],
				},
				{
					id: 'makes',
					name: 'Selected Makes',
					items: [
						{ name: 'Aston Martin', href: '#' },
						{ name: 'Audi', href: '#' },
						{ name: 'Bentley', href: '#' },
						{ name: 'Chevy', href: '#' },
						{ name: 'Ferrari', href: '#' },
						{ name: 'Ford', href: '#' },
						{ name: 'Mercedes', href: '#' },
						{ name: 'MG', href: '#' },
						{ name: 'Browse All Makes', href: '#' },
					],
				},
			],
		},
	],
	pages: [
		{ name: 'Magazine', href: '#' },
		{ name: 'More', href: '#' },
	],
};
const Header = ({ userisloggedin }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="bg-white">
			{/* Mobile menu */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
								<div className="flex px-4 pt-5 pb-2">
									<button
										type="button"
										className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">Close menu</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>

								{/* Links */}
								<Tab.Group as="div" className="mt-2">
									<div className="border-b border-gray-200">
										<Tab.List className="-mb-px flex space-x-8 px-4">
											{navigation.categories.map((category) => (
												<Tab
													key={category.name}
													className="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
												>
													{category.name}
												</Tab>
											))}
										</Tab.List>
									</div>
									<Tab.Panels as={Fragment}>
										{navigation.categories.map((category) => (
											<Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
												<div className="grid grid-cols-2 gap-x-4">
													{category.featured.map((item) => (
														<div key={item.name} className="group relative text-base">
															<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
																<img
																	src={item.imageSrc}
																	alt={item.imageAlt}
																	className="object-cover object-center"
																/>
															</div>
															<a
																href={item.href}
																className="mt-6 block font-medium text-gray-900"
															>
																<span
																	className="absolute inset-0 z-10"
																	aria-hidden="true"
																/>
																{item.name}
															</a>
															<p aria-hidden="true" className="mt-1">
																Shop now
															</p>
														</div>
													))}
												</div>
												{category.sections.map((section) => (
													<div key={section.name}>
														<p
															id={`${category.id}-${section.id}-heading-mobile`}
															className="font-medium text-gray-900"
														>
															{section.name}
														</p>
														<ul
															aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
															className="mt-6 flex flex-col space-y-6"
														>
															{section.items.map((item) => (
																<li key={item.name} className="flow-root">
																	<a
																		href={item.href}
																		className="-m-2 block p-2 text-gray-500"
																	>
																		{item.name}
																	</a>
																</li>
															))}
														</ul>
													</div>
												))}
											</Tab.Panel>
										))}
									</Tab.Panels>
								</Tab.Group>

								<div className="space-y-6 border-t border-gray-200 py-6 px-4">
									{navigation.pages.map((page) => (
										<div key={page.name} className="flow-root">
											<a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
												{page.name}
											</a>
										</div>
									))}
								</div>

								<div className="space-y-6 border-t border-gray-200 py-6 px-4">
									<div className="flow-root">
										<a href="#" className="-m-2 block p-2 font-medium text-gray-900">
											Sign in
										</a>
									</div>
									<div className="flow-root">
										<a href="#" className="-m-2 block p-2 font-medium text-gray-900">
											Create account
										</a>
									</div>
								</div>

								<div className="border-t border-gray-200 py-6 px-4">
									<a href="#" className="-m-2 flex items-center p-2">
										<img
											src="https://tailwindui.com/img/flags/flag-uk.svg"
											alt=""
											className="block h-auto w-5 flex-shrink-0"
										/>
										<span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
										<span className="sr-only">, change currency</span>
									</a>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<header className="relative bg-white">
				<nav aria-label="Top" className="mx-auto max-w-full px-4 sm:px-0">
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center justify-between">
							<button
								type="button"
								className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
								onClick={() => setOpen(true)}
							>
								<span className="sr-only">Open menu</span>
								<MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
							</button>

							{/* Flyout menus */}
							<Popover.Group className="hidden  lg:block lg:self-stretch">
								<div className="flex h-full space-x-8 items-center">
									{navigation.categories.map((category) => (
										<Popover key={category.name} className="flex">
											{({ open }) => (
												<div>
													<div className="relative flex">
														<Popover.Button
															className={` relative z-10 -mb-px flex items-center border-b-2 pt-px text-base font-medium transition-colors duration-200 ease-out border-transparent text-gray-700 hover:text-gray-800`}
														>
															{category.name}
														</Popover.Button>
													</div>

													<Transition
														as={Fragment}
														enter="transition ease-out duration-200"
														enterFrom="opacity-0 z-0"
														enterTo="opacity-100 z-10"
														leave="transition ease-in duration-150"
														leaveFrom="opacity-100 z-10"
														leaveTo="opacity-0 z-0"
													>
														<Popover.Panel className="absolute inset-x-0 top-full z-10 text-base text-gray-500">
															<div
																className="absolute inset-0 top-1/2 bg-white shadow"
																aria-hidden="true"
															/>

															<div className="relative bg-white">
																<div className="mx-auto ">
																	<div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
																		<div className="col-start-2 grid grid-cols-2 gap-x-8">
																			{category.featured.map((item) => (
																				<div
																					key={item.name}
																					className="group relative text-base sm:text-base"
																				>
																					<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
																						<img
																							src={item.imageSrc}
																							alt={item.imageAlt}
																							className="object-cover object-center"
																						/>
																					</div>
																					<a
																						href={item.href}
																						className="mt-6 block font-medium text-gray-900"
																					>
																						<span
																							className="absolute inset-0 z-10"
																							aria-hidden="true"
																						/>
																						{item.name}
																					</a>
																				</div>
																			))}
																		</div>
																		<div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm px-4">
																			{category.sections.map((section) => (
																				<div key={section.name}>
																					<p
																						id={`${section.name}-heading`}
																						className="font-normal text-gray-900"
																					>
																						{section.name}
																					</p>
																					<ul
																						aria-labelledby={`${section.name}-heading`}
																						className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																					>
																						{section.items.map((item) => (
																							<li
																								key={item.name}
																								className="flex"
																							>
																								<a
																									href={item.href}
																									className="hover:text-gray-800"
																								>
																									{item.name}
																								</a>
																							</li>
																						))}
																					</ul>
																				</div>
																			))}
																		</div>
																	</div>
																</div>
															</div>
														</Popover.Panel>
													</Transition>
												</div>
											)}
										</Popover>
									))}

									{navigation.pages.map((page) => (
										<a
											key={page.name}
											href={page.href}
											className="flex items-center text-base font-medium text-gray-700 hover:text-gray-800"
										>
											{page.name}
										</a>
									))}
								</div>
							</Popover.Group>

							{/* Logo */}
							<div className="ml-4 flex lg:ml-auto">
								<a href="#">
									<span className="sr-only">Your Company</span>
									<CtLogo className="w-full h-3" />
								</a>
							</div>

							<div className="ml-auto flex items-center">
								<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
									<a
										href="/login"
										className="text-base font-medium text-gray-700 hover:text-gray-800"
									>
										Sign in
									</a>
									<span className="h-6 w-px bg-gray-200" aria-hidden="true" />
									<a
										href="/register"
										className="text-base font-medium text-gray-700 hover:text-gray-800"
									>
										Create account
									</a>
								</div>

								<div className="hidden lg:ml-8 lg:flex">
									<a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
										<img
											src="https://tailwindui.com/img/flags/flag-canada.svg"
											alt=""
											className="block h-auto w-5 flex-shrink-0"
										/>
										<span className="ml-3 block text-base font-medium">CAD</span>
										<span className="sr-only">, change currency</span>
									</a>
								</div>

								{/* Search */}
								<div className="flex lg:ml-6">
									<a href="#" className="p-2 text-gray-400 hover:text-gray-500">
										<span className="sr-only">Search</span>
										<SearchIcon className="h-6 w-6" aria-hidden="true" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Header;
