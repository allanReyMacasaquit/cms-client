'use client';

import { Product } from '@/app/types';
import ProductCard from './product-card';
import Container from './container';

interface ProductWithCategory extends Product {
	categoryName: string;
}

interface ProductListProps {
	data: ProductWithCategory[];
	title: string;
}

const ProductList: React.FC<ProductListProps> = ({ data = [], title }) => {
	return (
		<Container>
			<div className='space-y-6 py-10'>
				{/* Title */}
				<h2 className='text-2xl font-bold p-5'>{title}</h2>

				{/* Product Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{data.map((product) => (
						<ProductCard key={product.id} data={product} />
					))}
				</div>
			</div>
		</Container>
	);
};

export default ProductList;
