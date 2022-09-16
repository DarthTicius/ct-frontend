import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const GallerySingle = ({ galleryImages }) => {
	const images = [];
	galleryImages.forEach((element) => {
		images.push(element.url);
	});

	const [nav1, setNav1] = useState(null);
	const [isOpen, setIsOpen] = useState(0);
	const [photoIndex, setPhotoIndex] = useState(0);

	const slider1 = [];

	useEffect(() => {
		setNav1(slider1);
	}, [slider1]);
	return (
		<>
			<div className=" block w-full max-w-full">
				<div className="block w-full max-w-full">
					<div className="max-w-full w-full roounded ">
						<Slider ref={(slider) => (slider1 = slider)}>
							{galleryImages &&
								galleryImages.map((item, i) => (
									<div
										key={i}
										className="sliderImgWrapper sm:rounded-2xl responsive max-h-[75vh] h-[75vh] !w-full overflow-hidden relative"
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

export default GallerySingle;
