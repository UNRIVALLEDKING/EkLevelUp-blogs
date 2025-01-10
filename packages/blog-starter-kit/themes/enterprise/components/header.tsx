import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import HamburgerSVG from './icons/svgs/HamburgerSVG';
import { PublicationLogo } from './publication-logo';
import { Search } from './searchbar';
import PublicationSidebar from './sidebar';
import { SocialLinks } from './social-links';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
	const { publication } = useAppContext();
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const visibleItems = navbarItems.slice(0, 3);
	const hiddenItems = navbarItems.slice(3);

	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};

	const navList = (
		<ul className="flex flex-row items-center gap-4 text-white">
			{visibleItems.map((item) => (
				<li key={item.url}>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="block rounded-lg px-4 py-2 text-white transition-all duration-200 hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
					>
						{item.label}
					</a>
				</li>
			))}

			{hiddenItems.length > 0 && (
				<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button className="rounded-lg px-4 py-2 transition-all duration-200 hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
								More
							</button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="w-48 rounded border border-gray-300 bg-white text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
								align="end"
								sideOffset={5}
							>
								{hiddenItems.map((item) => (
									<DropdownMenu.Item asChild key={item.url}>
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="block px-4 py-2 text-black transition-all duration-200 hover:bg-slate-100 dark:hover:bg-neutral-800 dark:hover:text-white"
										>
											{item.label}
										</a>
									</DropdownMenu.Item>
								))}
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</li>
			)}
		</ul>
	);

	return (
		<header className="sticky left-0 top-0 z-50 border-b border-black/10 bg-black/50 py-6 backdrop-blur-md">
			<Container className="grid grid-cols-4 items-center gap-5 px-5">
				{/* Left Section: Logo and Sidebar */}
				<div className="items-between col-span-4 flex flex-row justify-between gap-2 lg:col-span-1">
					{/* Hamburger for mobile */}
					<div className="flex items-center lg:hidden">
						<Button
							type="outline"
							label=""
							icon={<HamburgerSVG className="h-5 w-5 stroke-current" />}
							className="rounded-xl border-transparent !px-3 !py-2 text-white hover:bg-white/10"
							onClick={toggleSidebar}
						/>
						{isSidebarVisible && (
							<PublicationSidebar navbarItems={navbarItems} toggleSidebar={toggleSidebar} />
						)}
					</div>
					{/* Logo for larger screens */}
					<div className="hidden items-center lg:flex">
						<PublicationLogo />
					</div>
					{/* Mobile Logo */}
					<div className="mt-5 flex justify-center lg:hidden">
						<PublicationLogo />
					</div>
				</div>
			</Container>

			<Container>
				<div className="hidden grid-cols-1 items-center gap-5 pt-5 text-sm md:grid md:grid-cols-2">
					<Search />
					<SocialLinks />
				</div>
			</Container>
		</header>
	);
};
