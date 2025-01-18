import getDashboard from '@/actions/get-dashboard';
import { getProductColor } from '@/actions/get-product-color';
import { getProductSize } from '@/actions/get-product-size';
import { getProductsWithCategory } from '@/actions/getProductsWithCategory';
import { Color, Size } from '@/app/types';
import BackArrow from '@/components/back-arrow';
import Container from '@/components/container';
import Currency from '@/components/currency';
import ProductGallery from '@/components/product-gallery';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
	CardDescription,
} from '@/components/ui/card';

interface ProductPageProps {
	params: {
		productId: string;
	};
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
	const { productId } = await params;

	// Fetch the product description from the dashboard (assuming you fetch it by ID)
	const description = await getDashboard(
		'd3ac5144-1ca6-4e01-a6f3-a0667b9e0d67'
	); // Adjust this if needed

	try {
		// Fetch the products, categories, and sizes
		const productsWithCategory = await getProductsWithCategory(true);
		const sizes = await getProductSize();
		const colors = await getProductColor();

		const product = productsWithCategory.find((p) => p.id === productId);
		if (!product) {
			return (
				<div className='bg-white'>
					<Container>
						<div className='px-4 py-10 sm:px-6 lg:px-8'>
							<div className='text-center text-red-500'>Product not found.</div>
						</div>
					</Container>
				</div>
			);
		}

		const size =
			sizes.find((s: Size) => s.id === product.sizeId)?.value || 'Unknown';
		const color =
			colors.find((c: Color) => c.id === product.colorId)?.value || 'Unknown';

		const productImages = product.images.map((image) => {
			return { url: image.url };
		});

		return (
			<div className='bg-gray-50 min-h-screen py-10'>
				<Container>
					<BackArrow />
					<Card className='max-w-4xl mx-auto md:shadow-lg border-none md:rounded-lg'>
						<CardHeader className='p-6'>
							<CardTitle className='text-3xl font-semibold text-gray-800'>
								{product.name}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ProductGallery images={productImages} />
							<div className='text-lg text-gray-800'>
								<p className='mb-2'>
									<strong>Category:</strong> {product.categoryName || 'N/A'}
								</p>
								<p className='mb-2'>
									<strong>Price:</strong> <Currency amount={product.price} />
								</p>
								<p className='mb-2'>
									<strong>Size:</strong> {size}
								</p>
								<div className='flex items-center gap-x-4'>
									<strong className=' text-black'>Color:</strong>
									<div
										className='h-6 w-6 rounded-full border border-gray-600'
										style={{ backgroundColor: color }}
									/>
								</div>
							</div>
						</CardContent>

						<CardDescription className='px-6 pb-6'>
							<p className='text-gray-600'>
								{description.description || 'No description available.'}
							</p>
						</CardDescription>

						<CardFooter className='p-6'>
							<Button className='w-full'>Add to Cart</Button>
						</CardFooter>
					</Card>
				</Container>
			</div>
		);
	} catch (error) {
		console.error('Failed to fetch product:', error);
		return (
			<div className='bg-white'>
				<Container>
					<div className='px-4 py-10 sm:px-6 lg:px-8'>
						<div className='text-center text-red-500'>
							Failed to fetch product details.
						</div>
					</div>
				</Container>
			</div>
		);
	}
};

export default ProductPage;
