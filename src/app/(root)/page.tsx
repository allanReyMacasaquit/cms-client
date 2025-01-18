import getDashboard from '@/actions/get-dashboard';
import { getProductsWithCategory } from '@/actions/getProductsWithCategory';
import Dashboard from '@/components/dashboard';
import ProductList from '@/components/product-list';

export default async function Home() {
	const productsWithCategory = await getProductsWithCategory(true);
	const dashboard = await getDashboard(process.env.NEXT_PUBLIC_DASHBOARD_ID!);

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
