import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = ({ galleryImages }) => {
	const images = [];
	galleryImages.forEach((element) => {
		images.push(element.url);
	});

	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);
	const [isOpen, setIsOpen] = useState(0);
	const [photoIndex, setPhotoIndex] = useState(0);

	let slider1 = [];
	let slider2 = [];

	useEffect(() => {
		setNav1(slider1);
		setNav2(slider2);
	}, [slider1, slider2]);

	return (
		<>
			<div className=" block w-full max-w-full">
				<div className="block w-full max-w-full">
					<div className="max-w-full w-full">
						<Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
							{galleryImages &&
								galleryImages.map((item, i) => (
									<div
										key={i}
										className="sliderImgWrapper responsive max-h-[66.667vh] h-[66.667vh] !w-full overflow-hidden relative"
									>
										<img
											src={item.url}
											alt=""
											onClick={() => setIsOpen(item)}
											className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-fill object-center"
										/>
									</div>
								))}
						</Slider>
					</div>

					<div className="max-w-full w-full mt-2">
						<Slider
							asNavFor={nav1}
							ref={(slider) => (slider2 = slider)}
							slidesToShow={3}
							swipeToSlide
							focusOnSelect
						>
							{galleryImages &&
								galleryImages.map((item, i) => (
									<div className="px-2 -mx-2">
										<img
											key={i}
											src={item.url}
											alt=""
											className="max-h-[100px] h-auto w-full object-cover"
										/>
									</div>
								))}
						</Slider>
					</div>
				</div>
			</div>
			{!!isOpen && (
				<Lightbox
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
					onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
				/>
			)}
		</>
	);
};

export default Gallery;
