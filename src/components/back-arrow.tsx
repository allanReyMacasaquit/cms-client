'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

const BackArrow = () => {
	const router = useRouter();
	return (
		<div className='mx-4'>
			<Button
				onClick={() => router.push('/')}
				variant={'outline'}
				className='rounded-full bg-blue-200 hover:bg-blue-200/80'
			>
				<ArrowLeft />
			</Button>
		</div>
	);
};
export default BackArrow;
