import React from 'react';
import ProductCard from '@/components/product-card';
import Filter from '@/components/filter';
import { getProductSize } from '@/actions/get-product-size';
import { getProductColor } from '@/actions/get-product-color';
import getProducts from '@/actions/get-products';
import { getProductsWithCategory } from '@/actions/getProductsWithCategory';

const CategoryPage = async ({
	params,
	searchParams,
}: {
	params: { categoryId: string };
	searchParams: { sizeId?: string; colorId?: string };
}) => {
	// Fetch products with filters
	const products =
		(await getProducts({
			categoryId: params.categoryId,
			sizeId: searchParams.sizeId,
			colorId: searchParams.colorId, // Include both sizeId and colorId in the API call
		})) || [];

	// Filter products by colorId and sizeId if they're provided in searchParams
	const filteredProducts = products.filter((product) => {
		const matchesColor = searchParams.colorId
			? product.colorId === searchParams.colorId
			: true;
		const matchesSize = searchParams.sizeId
			? product.sizeId === searchParams.sizeId
			: true;

		return matchesColor && matchesSize;
	});

	// Fetch filter options (e.g., sizes, colors)
	const sizes = await getProductSize();
	const colors = await getProductColor();

	// Fetch category names
	const categoryNameData = await getProductsWithCategory(true);
	const currentCategory = categoryNameData.find(
		(item) => item.categoryId === params.categoryId
	);

	// If the category doesn't exist, fallback to a default message
	const categoryName = currentCategory
		? currentCategory.categoryName
		: 'Category not found';

	return (
		<div className='my-10 p-6 max-w-7xl mx-auto rounded-lg'>
			<div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
				{/* Sidebar Filters */}
				<div className='hidden lg:block'>
					<Filter valueKey='sizeId' name='Sizes' data={sizes} />
					<Filter valueKey='colorId' name='Colors' data={colors} />
				</div>

				{/* Product Grid */}
				<div className='mt-6 lg:col-span-4 lg:mt-0'>
					{/* Category Name Display */}
					<div className='lg:col-span-4'>
						<h2 className='text-2xl font-bold'>{categoryName}</h2>
					</div>
					{filteredProducts.length === 0 ? (
						<div className='flex items-center justify-center min-h-96'>
							<div className='flex flex-col items-center'>No Results</div>
						</div>
					) : (
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
							{filteredProducts.map((product) => (
								<ProductCard key={product.id} data={product} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CategoryPage;
