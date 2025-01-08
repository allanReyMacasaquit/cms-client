'use client';

import { useState } from 'react';
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
import { MoreVertical, X } from 'lucide-react';

interface CategoryProps {
	data: Category[];
}

const NavbarLinks = ({ data }: CategoryProps) => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

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
						onClick={() => setIsOpen(!isOpen)} // Toggle state on click
					>
						{isOpen ? <X /> : <MoreVertical />}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className='w-screen border-none rounded-none p-2 mt-8 bg-gray-900/95'
					onOpenAutoFocus={() => setIsOpen(true)} // Set open state
					onCloseAutoFocus={() => setIsOpen(false)} // Reset on close
				>
					<nav className='flex flex-col space-y-2'>
						{routes.map((route) => (
							<Link
								key={route.href}
								href={route.href}
								className={cn(
									'block p-2 rounded-full w-fit text-gray-300',
									route.active && 'bg-blue-600/90 text-gray-300'
								)}
							>
								<p className='px-2'>{route.label}</p>
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
							'px-6 py-1 rounded-full hover:bg-blue-600 tracking-widest',
							route.active && 'bg-blue-600/90 text-white'
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
