import Link from 'next/link';
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaRss, FaTwitter } from 'react-icons/fa';
import { useAppContext } from './contexts/appContext';
import { HashnodeSVG } from './icons';
export const SocialLinks = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const hasSocialLinks = publication?.links
		? !Object.values(publication.links!).every((val) => val === '')
		: false;

	return (
		<div
			className={`col-span-1 flex flex-row flex-wrap gap-2 text-slate-600 md:flex-nowrap dark:text-neutral-300 ${
				isSidebar ? 'justify-start' : 'justify-end'
			}`}
		>
			{hasSocialLinks && (
				<>
					{publication.links?.twitter && (
						<a
							href={publication.links.twitter}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Find us on Twitter, external website, opens in new tab"
							className="flex items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
						>
							<FaTwitter className="h-5 w-5" />
						</a>
					)}
					{publication.links?.github && (
						<a
							href={publication.links.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Find us on Github, external website, opens in new tab"
							className="flex items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
						>
							<FaGithub className="h-5 w-5" />
						</a>
					)}
					{publication.links?.linkedin && (
						<a
							href={publication.links.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Find us on Linkedin, external website, opens in new tab"
							className="flex items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
						>
							<FaLinkedin className="h-5 w-5" />
						</a>
					)}
					{publication.links?.hashnode && (
						<a
							href={publication.links.hashnode}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Find us on Hashnode, external website, opens in new tab"
							className="flex items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
						>
							<HashnodeSVG className="h-5 w-5" />
						</a>
					)}
					{publication.links?.instagram && (
						<a
							href={publication.links.instagram}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Find us on Instagram, external website, opens in new tab"
							className="flex items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
						>
							<FaInstagram className="h-5 w-5" />
						</a>
					)}
					{publication.links?.website && (
						<a
							href={publication.links.website}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Visit our website, external website, opens in new tab"
							className="flex items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
						>
							<FaGlobe className="h-5 w-5" />
						</a>
					)}
				</>
			)}

			<Link
				prefetch={false}
				href={`/rss.xml`}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Open blog XML Feed, opens in new tab"
				className="flex items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
			>
				<FaRss className="h-5 w-5" />
			</Link>
		</div>
	);
};
