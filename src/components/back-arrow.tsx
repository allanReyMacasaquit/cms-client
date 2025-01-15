'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

const BackArrow = () => {
	const router = useRouter();
	return (
		<Button
			onClick={() => router.push('/')}
			variant={'outline'}
			className='rounded-full bg-blue-200 hover:bg-blue-200/80 ml-4 md:ml-0'
		>
			<ArrowLeft className='max-w-2xl' />
		</Button>
	);
};
export default BackArrow;
