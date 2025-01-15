export const getProductColor = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_API_URL;

	if (!baseUrl) {
		console.error('Base URL is not defined in environment variables');
		return null;
	}

	const url = `${baseUrl}/color/`;

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
				`Failed to fetch product color: ${response.status} - ${errorDetails}`
			);
			return null;
		}

		const productColor = await response.json();

		if (!productColor) {
			console.warn('Product color data is empty or undefined.');
			return null;
		}

		return productColor;
	} catch (error) {
		console.error(
			'An unexpected error occurred while fetching product color:',
			error
		);
		return null;
	}
};
