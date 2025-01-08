import React from 'react';
import Container from './container';
import Link from 'next/link';
import NavbarLinks from './navbar-links';
import getCategories from '@/actions/get-categories';
import NavbarActions from './navbar-actions';

const Navbar = async () => {
	const categories = await getCategories();
	return (
		<div className='bg-gray-900 text-gray-300 py-8 px-5'>
			<Container>
				<div className='flex items-center'>
					<Link className='flex-1' href='/'>
						<p>LOGO</p>
					</Link>
					<div className='sm:hidden flex'>
						<NavbarActions />
					</div>

					<NavbarLinks data={categories} />
					<div className='hidden sm:flex ml-4'>
						<NavbarActions />
					</div>
				</div>
			</Container>
		</div>
	);
};
export default Navbar;
