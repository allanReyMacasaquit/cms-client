export const getProduct = async (productId: string) => {
	const baseUrl = process.env.NEXT_PUBLIC_API_URL;

	if (!baseUrl) {
		console.error('Base URL is not defined in environment variables');
		return null;
	}

	const url = `${baseUrl}/product/${productId}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const product = await response.json();

		return product; // Explicitly return the product data
	} catch (error) {
		console.error('Failed to fetch product:', error);
		return null; // Return null if an error occurs
	}
};
