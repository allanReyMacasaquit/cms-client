'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

interface ProductGalleryProps {
	images: { url: string; color: string }[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState(images[0]?.url || '');

	const handleImageClick = (image: { url: string }) => {
		setSelectedImage(image.url);
	};

	return (
		<div className='flex flex-col justify-center items-center mb-6'>
			{/* Main Image */}
			<div className='overflow-hidden border-none mb-6 shadow-md'>
				{selectedImage ? (
					<Image
						src={selectedImage}
						alt='Selected Product Image'
						height={500}
						width={500}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						priority
						className='object-cover'
					/>
				) : (
					<p className='text-gray-500 text-center'>No image available.</p>
				)}
			</div>

			{/* Thumbnails */}
			<div className='mt-0 md:mt-4 flex gap-x-2'>
				{images.map((image, index) => (
					<Button
						variant='outline'
						key={index}
						onClick={() => handleImageClick(image)}
						className={`h-20 md:w-36 rounded-lg overflow-hidden shadow-md ${
							selectedImage === image.url
								? 'border-blue-500'
								: 'border-gray-200'
						}`}
					>
						<Image
							src={image.url}
							alt={`Thumbnail ${index + 1}`}
							height={100}
							width={100}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							priority
							className='object-cover rounded-md'
						/>
					</Button>
				))}
			</div>
		</div>
	);
};

export default ProductGallery;
