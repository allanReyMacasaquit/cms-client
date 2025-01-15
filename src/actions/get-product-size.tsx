export const getProductSize = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_API_URL;

	if (!baseUrl) {
		console.error('Base URL is not defined in environment variables');
		return null;
	}

	const url = `${baseUrl}/size/`;

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			const errorDetails = await response.text();
			console.error(
				`Failed to fetch product size: ${response.status} - ${errorDetails}`
			);
			return null;
		}

		const productSize = await response.json();

		if (!productSize) {
			console.warn('Product size data is empty or undefined.');
			return null;
		}

		return productSize; // Explicitly return the product size data
	} catch (error) {
		console.error(
			'An unexpected error occurred while fetching product size:',
			error
		);
		return null; // Return null if an error occurs
	}
};
