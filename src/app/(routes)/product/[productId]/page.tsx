import getDashboard from '@/actions/get-dashboard';
import { getProductsWithCategory } from '@/actions/getProductsWithCategory';
import Container from '@/components/container';
import Currency from '@/components/currency';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
	CardDescription,
} from '@/components/ui/card';
import Image from 'next/image';

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
		// Fetch the products and categories
		const productsWithCategory = await getProductsWithCategory(true);
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

		const productImages = product.images || [];

		return (
			<div className='bg-gray-50 min-h-screen py-10'>
				<Container>
					<Card className='max-w-4xl mx-auto md:shadow-lg border-none md:rounded-lg'>
						<CardHeader className='p-6'>
							<CardTitle className='text-3xl font-semibold text-gray-800'>
								{product.name}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='mb-8'>
								{productImages.length > 0 ? (
									productImages.map((image, index) => (
										<div
											key={index}
											className='h-96 justify-center items-center flex md:rounded-lg overflow-hidden border-none shadow-lg'
										>
											<Image
												src={image.url}
												alt={`Product Image ${index + 1}`}
												height={400}
												width={400}
												className='object-cover'
											/>
										</div>
									))
								) : (
									<p className='text-gray-500 col-span-full'>
										No images available for this product.
									</p>
								)}
							</div>
							<div className='text-lg text-gray-800'>
								<p className='mb-2'>
									<strong>Category:</strong> {product.categoryName || 'N/A'}
								</p>
								<p className='mb-4'>
									<strong>Price:</strong> <Currency amount={product.price} />
								</p>
							</div>
						</CardContent>

						{/* Display the description fetched from the dashboard */}
						<CardDescription className='px-6 pb-6'>
							<p className='text-gray-600'>
								{description
									? description.description
									: 'No description available.'}
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
