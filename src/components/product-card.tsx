'use client';

import { Product } from '@/app/types';
import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import Currency from './currency';
import { useRouter } from 'next/navigation';

interface ProductWithCategory extends Product {
	categoryName: string;
}

interface ProductCardProps {
	data: ProductWithCategory;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
	const router = useRouter();
	console.log(data);
	return (
		<div className='group cursor-pointer md:rounded-xl shadow-2xl p-3 space-y-4'>
			{/* Product Images */}
			<div className='flex flex-wrap gap-2 justify-center'>
				{data.images.map((image) => (
					<div
						key={image.url}
						className='aspect-video w-full rounded-xl relative'
					>
						<Image
							src={image.url}
							alt={data.name}
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							priority
							className='object-cover shadow-xl rounded-md'
						/>

						{/* Action Buttons */}
						<div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 -bottom-16'>
							<div className='flex gap-x-6 justify-between'>
								<Button
									variant='outline'
									className='flex items-center gap-2 bg-slate-300 hover:bg-slate-200'
									onClick={() => router.push(`/product/${data.id}`)}
								>
									<Expand size={20} className='text-gray-600' />
								</Button>
								<Button
									variant='outline'
									className='flex items-center gap-2 bg-slate-300 hover:bg-slate-200'
									onClick={() => console.log('Add to cart clicked')}
								>
									<ShoppingCart size={20} className='text-gray-600' />
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Product Info */}
			<div className='text-center'>
				<h3 className='text-lg font-semibold truncate'>{data.name}</h3>
				<Currency amount={data.price} currency='CAD' />
				<p className='text-sm text-gray-400'>
					{data.categoryName || 'Uncategorized'}
				</p>
			</div>
		</div>
	);
};

export default ProductCard;
