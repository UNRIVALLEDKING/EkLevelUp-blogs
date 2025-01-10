import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="min-h-screen overflow-hidden bg-black text-white md:py-20">
			<div className="container relative mx-auto px-4">
				<div className="grid grid-cols-1 items-center px-4 py-20 xl:py-10">
					<div>
						<img
							className="mx-auto"
							src="https://cdn.hashnode.com/res/hashnode/image/upload/v1736364723187/94aa89b5-e2b9-4101-a38c-857a1c5c8f1f.png?w=640&h=160&auto=compress,format&format=webp"
						/>
						<h2 className="relative z-10 text-center text-6xl font-bold xl:text-9xl">
							Oops! <br /> Page Not Found
						</h2>
						<p className="mx-auto text-center text-base md:p-4 xl:w-2/3 xl:text-xl">
							Don&apos;t worry, though! Our team of skilled developers is constantly working to
							enhance your browsing experience. In the meantime, feel free to explore our other
							amazing content and discover exciting insights.
						</p>

						<div className="mt-8 text-center">
							<p className="text-xl font-bold">Content Navigation Guide:</p>
							<ul className="mt-4 text-lg">
								<li>
									<Link className="text-secondary text-xl font-bold" href="/">
										Blogs
									</Link>{' '}
									page.
								</li>
								<li>
									<Link
										className="text-secondary text-xl font-bold"
										href="https://eklevelup.com/team"
									>
										Team
									</Link>{' '}
									page.
								</li>
								<li>
									<Link className="text-secondary text-xl font-bold" href="https://eklevelup.com/">
										Home
									</Link>{' '}
									page.
								</li>
								<li>
									<Link
										className="text-secondary text-xl font-bold"
										href="https://eklevelup.com/contacts"
									>
										Contacts
									</Link>{' '}
									page.
								</li>

								<li>
									<Link
										className="text-secondary text-xl font-bold"
										href="https://eklevelup.com/services"
									>
										Services
									</Link>{' '}
									page.
								</li>
								<li>
									<Link
										className="text-secondary text-xl font-bold"
										href="https://eklevelup.com/clients"
									>
										Clients
									</Link>{' '}
									page.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
