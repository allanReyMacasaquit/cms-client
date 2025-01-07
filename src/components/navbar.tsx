import React from 'react';
import Container from './container';
import Link from 'next/link';
import NavbarLinks from './navbar-links';

const Navbar = () => {
	return (
		<div className='bg-gray-900 text-gray-300 py-8'>
			<Container>
				<Link href='/'>
					<p>LOGO</p>
				</Link>
				<NavbarLinks data={[]} />
			</Container>
		</div>
	);
};
export default Navbar;
