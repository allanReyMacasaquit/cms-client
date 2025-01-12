import getProducts from '@/actions/get-products';
import getCategories from '@/actions/get-categories';

export const getProductsWithCategory = async (isFeatured: boolean) => {
	const [products, categories] = await Promise.all([
		getProducts({ isFeatured }),
		getCategories(),
	]);

	const categoryMap = new Map(
		categories.map((category) => [category.id, category.name])
	);

	const productsWithCategory = products.map((product) => ({
		...product,
		categoryName: categoryMap.get(product.categoryId) || 'Uncategorized',
	}));

	return productsWithCategory;
};
