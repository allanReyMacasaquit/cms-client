import Container from './container';

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-gray-300 p-5'>
			<Container>
				<div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* About Section */}
					<div>
						<h2 className='text-white text-lg font-semibold mb-4'>About Us</h2>
						<p className='text-sm'>
							Welcome to [Your Store Name], your one-stop destination for
							high-quality products at unbeatable prices. We pride ourselves on
							excellent customer service and fast delivery.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h2 className='text-white text-lg font-semibold mb-4'>
							Quick Links
						</h2>
						<ul className='space-y-2'>
							<li>
								<a href='/shop' className='hover:text-white'>
									Shop
								</a>
							</li>
							<li>
								<a href='/about' className='hover:text-white'>
									About Us
								</a>
							</li>
							<li>
								<a href='/contact' className='hover:text-white'>
									Contact
								</a>
							</li>
							<li>
								<a href='/faq' className='hover:text-white'>
									FAQs
								</a>
							</li>
						</ul>
					</div>

					{/* Customer Support */}
					<div>
						<h2 className='text-white text-lg font-semibold mb-4'>
							Customer Support
						</h2>
						<ul className='space-y-2'>
							<li>
								<a href='/shipping' className='hover:text-white'>
									Shipping Policy
								</a>
							</li>
							<li>
								<a href='/returns' className='hover:text-white'>
									Return Policy
								</a>
							</li>
							<li>
								<a href='/privacy' className='hover:text-white'>
									Privacy Policy
								</a>
							</li>
							<li>
								<a href='/terms' className='hover:text-white'>
									Terms of Service
								</a>
							</li>
						</ul>
					</div>

					{/* Subscribe and Socials */}
					<div>
						<h2 className='text-white text-lg font-semibold mb-4'>
							Stay Connected
						</h2>
						<form className='mb-4'>
							<input
								type='email'
								placeholder='Enter your email'
								className='w-full p-2 rounded-md text-gray-900'
							/>
							<button className='w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md'>
								Subscribe
							</button>
						</form>
						<div className='flex space-x-4'>
							<a
								href='https://facebook.com'
								aria-label='Facebook'
								className='text-gray-400 hover:text-white'
							>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a
								href='https://twitter.com'
								aria-label='Twitter'
								className='text-gray-400 hover:text-white'
							>
								<i className='fab fa-twitter'></i>
							</a>
							<a
								href='https://instagram.com'
								aria-label='Instagram'
								className='text-gray-400 hover:text-white'
							>
								<i className='fab fa-instagram'></i>
							</a>
							<a
								href='https://linkedin.com'
								aria-label='LinkedIn'
								className='text-gray-400 hover:text-white'
							>
								<i className='fab fa-linkedin'></i>
							</a>
						</div>
					</div>
				</div>
				<div className='mt-8 border-t border-gray-700 pt-4 text-center text-sm'>
					<p>
						&copy; {new Date().getFullYear()} [Your Store Name]. All rights
						reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
};
export default Footer;
