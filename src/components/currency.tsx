import React from 'react';

interface CurrencyProps {
	amount: string;
	currency?: string;
}

const Currency: React.FC<CurrencyProps> = ({ amount, currency = 'USD' }) => {
	const formattedAmount = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
	}).format(parseFloat(amount));

	return <span>{formattedAmount}</span>;
};

export default Currency;
