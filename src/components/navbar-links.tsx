'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Category } from '@/app/types';
import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

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
		<div className='relative'>
			{/* Mobile Navigation (Popover for Small Screens) */}
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant='ghost'
						className='md:hidden text-gray-300 hover:bg-gray-900 hover:text-white'
					>
						Menu
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-screen border-none  p-2 mt-10 bg-gray-900/95'>
					<nav className='flex flex-col space-y-2'>
						{routes.map((route) => (
							<Link
								key={route.href}
								href={route.href}
								className={cn(
									'block px-4 py-2 rounded-md hover:bg-gray-900 text-gray-500 hover:text-gray-300',
									route.active && 'bg-blue-600 text-gray-300'
								)}
							>
								{route.label}
							</Link>
						))}
					</nav>
				</PopoverContent>
			</Popover>

			{/* Desktop Navigation */}
			<nav className='hidden md:flex space-x-4 text-gray-300'>
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
					</Link>
				))}
			</nav>
		</div>
	);
};

export default NavbarLinks;
