'use client';

// import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const NavbarActions = () => {
	// const [isMounted, setIsMounted] = useState(false);

	// useEffect(() => {
	// 	setIsMounted(true);
	// }, []);

	// if (!isMounted) {
	// 	return null;
	// }

	return (
		<div className='ml-auto flex items-center gap-x-4'>
			<Button className='flex items-center rounded-full bg-blue-600/90 px-4 text-white hover:bg-blue-600'>
				<span className='tracking-widest'>CART</span>
				<ShoppingCart size={20} className='text-white' />
				<span className='ml-2 text-sm font-medium'>0</span>
			</Button>
		</div>
	);
};

export default NavbarActions;
