import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.darkMode?.logo;
	return (
		<footer className="border-t py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 md:text-4xl dark:text-slate-50">
						{publication.title}
					</p>
				)}
				{/* Links Section */}
				<div className="col-span-full grid grid-cols-1 gap-5 md:col-span-4 lg:grid-cols-3">
					{/* Stay in Touch Section */}
					<div className="col-span-full md:col-span-2 lg:col-span-1">
						<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Stay in Touch</p>
						<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
							<li>
								<a href="https://eklevelup.com/" className="hover:underline">
									EkLevelUp
								</a>
							</li>
							<li>
								<a href="https://eklevelup.com/contacts" className="hover:underline">
									Contact Us
								</a>
							</li>
							<li>
								<a href="https://eklevelup.com/services" className="hover:underline">
									Our Services
								</a>
							</li>
							<li>
								<a href="https://eklevelup.com/clients" className="hover:underline">
									Our Clients
								</a>
							</li>
							<li>
								<a href="https://eklevelup.com/get-quotation" className="hover:underline">
									Get Free Consultation
								</a>
							</li>
							<li>
								<a
									href="https://eklevelup.com/special-offer-for-startups"
									className="hover:underline"
								>
									Are You a Startup?
								</a>
							</li>
							<li>
								<a href="https://eklevelup.com/startups-with-us" className="hover:underline">
									Startups with Us
								</a>
							</li>
						</ul>
					</div>

					{/* Explore More Section */}
					<div className="col-span-full md:col-span-2 lg:col-span-1">
						<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Explore More</p>
						<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
							<li>
								<a href="https://eklevelup.com/career" className="hover:underline">
									Careers
								</a>
							</li>
							<li>
								<a href="https://eklevelup.com/learn-skill" className="hover:underline">
									Learn a Skill
								</a>
							</li>
							<li>
								<a href="https://eklevelup.com/campaigns" className="hover:underline">
									Our Campaigns
								</a>
							</li>
							<li>
								<a href="https://eklevelup.com/support-for-a-cause" className="hover:underline">
									Support for a Cause
								</a>
							</li>
							<li>
								<a href="https://eklevelup.com/about-us" className="hover:underline">
									About Us
								</a>
							</li>
						</ul>
					</div>
					{/* Social Links and Footer Section */}
					<div className="col-span-full flex flex-col items-end gap-5 text-right text-slate-600 md:col-span-2 md:items-start md:text-left lg:col-span-1 dark:text-neutral-300">
						<SocialLinks />
						<p>&copy; 2023 Company Inc.</p>
						<p>
							<a href="#" className="hover:underline">
								Privacy Policy
							</a>{' '}
							·{' '}
							<a href="#" className="hover:underline">
								Terms
							</a>
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};
