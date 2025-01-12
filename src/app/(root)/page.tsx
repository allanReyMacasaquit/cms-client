import getDashboard from '@/actions/get-dashboard';
import { getProductsWithCategory } from '@/actions/getProductsWithCategory';
import Dashboard from '@/components/dashboard';
import ProductList from '@/components/product-list';

export default async function Home() {
	const productsWithCategory = await getProductsWithCategory(true);
	const dashboard = await getDashboard('d3ac5144-1ca6-4e01-a6f3-a0667b9e0d67');

	return (
		<div>
			<div>
				<Dashboard data={dashboard} />
			</div>
			<div>
				<ProductList title='Featured Products' data={productsWithCategory} />
			</div>
		</div>
	);
}
