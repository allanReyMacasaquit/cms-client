'use client';

import { Color, Size } from '@/app/types';
import { useSearchParams, useRouter } from 'next/navigation';
import qs from 'query-string';
import { Button } from './ui/button';

interface FilterProps {
	data: (Size | Color)[];
	name: string;
	valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, valueKey, name }) => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const selectedValue = searchParams.get(valueKey);

	const onClick = (id: string) => {
		const current = qs.parse(searchParams.toString());

		const query = {
			...current,
			[valueKey]: id,
		};

		if (current[valueKey] === id) {
			query[valueKey] = null; // Remove the filter if it's already selected
		}

		const url = qs.stringifyUrl(
			{
				url: window.location.href,
				query,
			},
			{ skipNull: true }
		);

		router.push(url); // Update the URL to reflect the new filter
	};

	const clearFilter = () => {
		const current = qs.parse(searchParams.toString());

		const query = {
			...current,
		};

		if (current[valueKey]) {
			query[valueKey] = null; // Remove the filter if it's already selected
		}

		const url = qs.stringifyUrl(
			{
				url: window.location.href,
				query,
			},
			{ skipNull: true }
		);

		router.push(url); // Update the URL after clearing the filter
	};

	return (
		<div className='p-4 bg-white shadow rounded-lg'>
			<h3 className='text-lg font-semibold mb-4 text-gray-800'>{name}</h3>
			<div className='flex flex-wrap gap-2'>
				{data.map((option) => (
					<Button
						key={option.id}
						onClick={() => onClick(option.id)}
						className={`px-4 py-2 border rounded-md transition-colors ${
							selectedValue === option.id
								? 'bg-blue-500 text-white border-blue-500'
								: 'bg-white text-gray-800 border-gray-300 hover:bg-blue-500 hover:text-white'
						}`}
					>
						{option.name}
					</Button>
				))}
			</div>

			{/* Clear filter button */}
			{selectedValue && (
				<div className='mt-4'>
					<Button
						onClick={clearFilter}
						className='w-full py-2 text-sm border-gray-300 hover:bg-red-500 hover:text-white border text-gray-200'
					>
						Clear {name}
					</Button>
				</div>
			)}
		</div>
	);
};

export default Filter;
