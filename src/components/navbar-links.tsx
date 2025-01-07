'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Category } from '@/app/types';

interface CategoryProps {
	data: Category[];
}

const NavbarLinks = ({ data }: CategoryProps) => {
	const pathname = usePathname();

	// Generate routes dynamically
	const routes = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`,
	}));

	return (
		<nav className='flex space-x-4 text-gray-300'>
			{routes.map((route) => (
				<Link
					key={route.href}
					href={route.href}
					className={cn(
						'px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white',
						route.active && 'bg-blue-600 text-white'
					)}
				>
					{route.label}
					<p>sample</p>
				</Link>
			))}
		</nav>
	);
};

export default NavbarLinks;
