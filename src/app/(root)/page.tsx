import getDashboard from '@/actions/get-dashboard';
import getProducts from '@/actions/get-products';
import Dashboard from '@/components/dashboard';
import ProductList from '@/components/product-list';

export default async function Home() {
	const products = await getProducts({ isFeatured: true });
	const dashboard = await getDashboard('113f85c4-e46e-4dda-9b94-2b8fba94ad30');
	return (
		<div>
			<div>
				<Dashboard data={dashboard} />
			</div>
			<div>
				<ProductList title='Featured Products' data={products} />
			</div>
		</div>
	);
}
