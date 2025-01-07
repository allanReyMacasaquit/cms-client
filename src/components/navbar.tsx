import React from 'react';
import Container from './container';
import Link from 'next/link';
import NavbarLinks from './navbar-links';
import getCategories from '@/actions/get-categories';

const Navbar = async () => {
	const categories = await getCategories();
	return (
		<div className='bg-gray-900 text-gray-300 py-8'>
			<Container>
				<div className='flex items-center'>
					<Link className='flex-1' href='/'>
						<p>LOGO</p>
					</Link>
					<NavbarLinks data={categories} />
				</div>
			</Container>
		</div>
	);
};
export default Navbar;
