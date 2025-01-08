'use client';

import { Product } from '@/app/types';
import Image from 'next/image';

interface ProductCardProps {
	data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
	return (
		<div className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
			{/* Product Image */}
			<div className='aspect-video rounded-xl bg-gray-500 relative'>
				<Image
					src={data.images?.[0].url}
					alt={data.name}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					priority
					className='object-cover rounded-md shadow-xl'
				/>
			</div>

			{/* Product Info */}
			<div className='text-center'>
				<h3 className='text-lg font-semibold truncate'>{data.name}</h3>
				<p className='text-gray-500'>${data.price}</p>
			</div>
		</div>
	);
};

export default ProductCard;
