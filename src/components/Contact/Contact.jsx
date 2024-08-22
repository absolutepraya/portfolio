import TopBorder from './TopBorder';
import DesktopView from '../../DesktopView';
import Pin from '../../assets/creds/pin.webp';
import Hello from '../../assets/creds/hello.webp';
import { IconPointer, IconBrandLinkedin, IconMail, IconSend, IconCopy, IconBrandGithub, IconBrandInstagram, IconBrandSpotify } from '@tabler/icons-react';

const Contact = () => {
	const desktopView = DesktopView();

	const handleCopy = () => {
		const textToCopy = 'daffaabhiprayaputra@gmail.com';
		navigator.clipboard.writeText(textToCopy);
	};

	return (
		<section
			id='contactsec'
			className='relative flex w-[90vw] flex-col rounded-3xl border-[#666666] md:h-[28rem] md:w-[68rem] md:flex-row'
			style={{ background: 'linear-gradient(to bottom, rgba(54, 67, 252, 0.01) 20%, rgba(54, 67, 252, 0.2))' }}
		>
			<div
				id='contacts'
				className='absolute -top-24'
			/>
			<TopBorder />
			<div className='flex w-auto flex-col items-center justify-center space-y-4 p-8 md:p-12'>
				<h1 className='w-full text-start font-instrument text-5xl md:text-6xl'>I&apos;m always up for...</h1>
				<div className='flex w-full flex-col space-y-2 text-4xl font-semibold md:w-auto md:space-y-3 md:text-5xl'>
					<div className='flex items-center space-x-3 pl-0'>
						<IconPointer
							size={desktopView ? 20 : 16}
							stroke={2}
							className='fill-black text-white'
						/>
						<p className=''>a project</p>
					</div>
					<div className='flex items-center space-x-3 pl-6 md:pl-12'>
						<IconPointer
							size={desktopView ? 20 : 16}
							stroke={2}
							className='fill-black text-white'
						/>
						<p className=''>a collab</p>
					</div>
					<div className='flex items-center space-x-3 pl-12 md:pl-24'>
						<IconPointer
							size={desktopView ? 20 : 16}
							stroke={2}
							className='fill-black text-white'
						/>
						<p className=''>CTFs</p>
					</div>
					<div className='flex items-center space-x-3 pl-[4.5rem] md:pl-36'>
						<IconPointer
							size={desktopView ? 20 : 16}
							stroke={2}
							className='fill-black text-white'
						/>
						<p className=''>hackathons</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-center space-y-2 p-6 md:w-1/2'>
				<div className='relative flex h-fit w-full rotate-[-3deg] flex-col justify-center space-y-4 rounded-3xl border-2 border-b-0 border-r-0 border-[#2a2a2a] bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-6 !pt-2 pb-8 shadow-xl md:rotate-[-4deg] md:p-8'>
					<img
						src={Pin}
						alt='Pin'
						className='absolute -right-8 -top-10 w-16 scale-[85%] drop-shadow-md md:scale-90'
					/>
					<img
						src={Hello}
						alt='Hello'
						className='absolute -bottom-4 -left-6 w-12 drop-shadow-md'
					/>
					<p className='md:text-lg'>Feel free to reach out for collab purposes or just a friendly hello :D</p>
					<div className='flex h-auto w-fit flex-row items-center justify-center space-x-2 rounded-2xl md:h-10'>
						<div className='relative flex h-full items-center space-x-2 rounded-lg border border-customwhite px-3 py-2 transition-all duration-100 hover:border-blurple hover:text-blurple md:py-0'>
							<IconMail
								size={desktopView ? 20 : 16}
								stroke={2}
							/>
							<p className='break-all text-sm font-semibold'>daffaabhiprayaputra@gmail.com</p>
						</div>
						{desktopView && (
							<a
								className='flex h-full w-10 items-center justify-center rounded-lg bg-[#2c2c32] p-[0.5rem] transition-all duration-100 hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'
								href='mailto:daffaabhiprayaputra@gmail.com'
								target='_blank'
								rel='noreferrer'
								aria-label='Send me an email!'
								title='Send me an email!'
							>
								<IconSend
									size={desktopView ? 20 : 16}
									stroke={2}
								/>
							</a>
						)}
						{desktopView && (
							<div
								className='flex h-full w-10 items-center justify-center rounded-lg bg-[#2c2c32] p-[0.5rem] transition-all duration-100 hover:cursor-pointer hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'
								onClick={() => handleCopy()}
								title='Copy my email address!'
							>
								<IconCopy
									size={20}
									stroke={2}
								/>
							</div>
						)}
					</div>
					<a
						href='https://www.linkedin.com/in/daffaabhipraya/'
						target='_blank'
						rel='noreferrer'
						aria-label='Reach me out on LinkedIn!'
						title='Reach me out on LinkedIn!'
					>
						<div className='flex h-auto w-fit flex-row items-center justify-center space-x-2 rounded-lg bg-customwhite px-3 py-2 text-customblack transition-all duration-100 hover:bg-blurple hover:text-customwhite md:h-10 md:px-3 md:py-0'>
							<p className='text-sm font-semibold'>
								or hit me up on <span className='font-extrabold'>LinkedIn</span>
							</p>
							<IconBrandLinkedin
								size={20}
								stroke={2}
							/>
						</div>
					</a>
					<div className='!mt-6 h-0.5 w-full bg-customgray' />
					<p className=''>Follow my other socials!</p>
					<div className='flex w-full flex-col space-y-2 md:flex-row md:justify-between md:space-y-0'>
						<a
							href='https://github.com/absolutepraya'
							target='_blank'
							rel='noreferrer'
							aria-label='absolutepraya on GitHub'
							title='absolutepraya on GitHub'
						>
							<div className='flex flex-row items-center space-x-1'>
								<IconBrandGithub
									size={24}
									stroke={2}
								/>
								<p className='underline underline-offset-4'>absolutepraya</p>
							</div>
						</a>
						<a
							href='https://www.instagram.com/___abhipraya/'
							target='_blank'
							rel='noreferrer'
							aria-label='___abhipraya on Instagram'
							title='___abhipraya on Instagram'
						>
							<div className='flex flex-row items-center space-x-1'>
								<IconBrandInstagram
									size={24}
									stroke={2}
								/>
								<p className='underline underline-offset-4'>___abhipraya</p>
							</div>
						</a>
						<a
							href='https://open.spotify.com/user/daffaabhiprayaputra?si=b80aa3237c7440ed'
							target='_blank'
							rel='noreferrer'
							aria-label='Daffa Abhipraya on Spotify'
							title='Daffa Abhipraya on Spotify'
						>
							<div className='flex flex-row items-center space-x-1'>
								<IconBrandSpotify
									size={24}
									stroke={2}
								/>
								<p className='underline underline-offset-4'>Daffa Abhipraya</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
