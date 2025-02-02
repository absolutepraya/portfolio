import TopBorder from './TopBorder';
import DesktopView from '../../lib/DesktopView';
import Pin from '../../assets/creds/pin.webp';
import Hello from '../../assets/creds/hello.webp';
import { IconPointer, IconBrandLinkedin, IconMail, IconSend, IconCopy, IconBrandGithub, IconBrandInstagram, IconBrandSpotify, IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
import BlurFade from '../../blocks/Animations/BlurFade/BlurFade';
import BlurText from '../../blocks/TextAnimations/BlurText/BlurText';
import SplitText from '../../blocks/TextAnimations/SplitText/SplitText';

const Contact = () => {
	const desktopView = DesktopView();
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		const textToCopy = 'daffa@abhipraya.dev';
		navigator.clipboard.writeText(textToCopy);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<BlurFade
			className='relative flex w-[90vw] flex-col rounded-3xl border-[#666666] bg-gradient-to-b from-[rgba(54,67,252,0.01)] from-20% to-[rgba(54,67,252,0.2)] md:h-[28rem] md:w-[68rem] md:flex-row'
			delay={0.3}
			inView
			inViewMargin='-200px'
			offset={20}
		>
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
						<SplitText
							animateBy='letters'
							text='projects'
						/>
					</div>
					<div className='flex items-center space-x-3 pl-6 md:pl-12'>
						<IconPointer
							size={desktopView ? 20 : 16}
							stroke={2}
							className='fill-black text-white'
						/>
						<SplitText
							animateBy='letters'
							text='works'
						/>
					</div>
					<div className='flex items-center space-x-3 pl-12 md:pl-24'>
						<IconPointer
							size={desktopView ? 20 : 16}
							stroke={2}
							className='fill-black text-white'
						/>
						<SplitText
							animateBy='letters'
							text='collabs'
						/>
					</div>
					<div className='flex items-center space-x-3 pl-[4.5rem] md:pl-36'>
						<IconPointer
							size={desktopView ? 20 : 16}
							stroke={2}
							className='fill-black text-white'
						/>
						<SplitText
							animateBy='letters'
							text='hackathons'
						/>
					</div>
				</div>
			</div>
			<BlurFade
				className='flex flex-col justify-center space-y-2 p-6 md:w-1/2'
				delay={0.8}
				duration={0.6}
				inView
				inViewMargin='-200px'
				offset={30}
			>
				<div className='relative flex h-fit w-full rotate-[-3deg] flex-col justify-center space-y-4 rounded-3xl bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-6 !pt-2 pb-8 shadow-xl md:rotate-[-4deg] md:p-8'>
					<div className='absolute left-0 top-0 h-full w-full rounded-3xl border-2 border-b-0 border-r-0 border-[#2a2a2a] !z-[-1]' />
					<img
						src={Pin}
						alt='Pin'
						className='absolute -right-8 -top-10 w-16 scale-[85%] drop-shadow-md md:scale-90'
						draggable='false'
					/>
					<img
						src={Hello}
						alt='Hello'
						className='absolute -bottom-4 -left-6 w-12 drop-shadow-md'
						draggable='false'
					/>
					<p className='md:text-lg'>Feel free to reach out for collab purposes or just a friendly hello :D</p>
					<div className='flex h-auto w-fit flex-row items-center justify-center space-x-2 rounded-2xl md:h-10'>
						<div className='relative flex h-full items-center space-x-2 rounded-lg border border-customwhite px-3 py-2 transition-all duration-100 md:py-0'>
							<IconMail
								size={desktopView ? 20 : 16}
								stroke={2}
							/>
							<p className='break-all font-jetbrainsmono text-sm font-semibold tracking-wider'>daffa@abhipraya.dev</p>
						</div>
						{desktopView && (
							<a
								className='flex h-full w-10 items-center justify-center rounded-lg bg-[#2c2c32] p-[0.5rem] transition-all duration-100 hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'
								href='mailto:daffa@abhipraya.dev'
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
								className='clickable flex h-full w-10 items-center justify-center rounded-lg bg-[#2c2c32] p-[0.5rem] transition-all duration-100 hover:cursor-pointer hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'
								onClick={() => handleCopy()}
								title='Copy my email address!'
							>
								{copied ? (
									<IconCheck
										size={desktopView ? 20 : 16}
										stroke={2}
									/>
								) : (
									<IconCopy
										size={desktopView ? 20 : 16}
										stroke={2}
									/>
								)}
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
					<div className='flex w-full flex-col space-y-2 font-jetbrainsmono text-[0.850rem] md:flex-row md:justify-between md:space-y-0'>
						<a
							href='https://github.com/absolutepraya'
							target='_blank'
							rel='noreferrer'
							aria-label='absolutepraya on GitHub'
							title='absolutepraya on GitHub'
						>
							<div className='flex flex-row items-center space-x-1 transition-all duration-100 hover:text-blurple'>
								<IconBrandGithub
									size={21}
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
							<div className='flex flex-row items-center space-x-1 transition-all duration-100 hover:text-blurple'>
								<IconBrandInstagram
									size={21}
									stroke={2}
								/>
								<p className='underline underline-offset-4'>___abhipraya</p>
							</div>
						</a>
						<a
							href='https://open.spotify.com/user/daffaabhiprayaputra'
							target='_blank'
							rel='noreferrer'
							aria-label='Daffa Abhipraya on Spotify'
							title='Daffa Abhipraya on Spotify'
						>
							<div className='flex flex-row items-center space-x-1 transition-all duration-100 hover:text-blurple'>
								<IconBrandSpotify
									size={21}
									stroke={2}
								/>
								<p className='underline underline-offset-4'>Daffa Abhipraya</p>
							</div>
						</a>
					</div>
				</div>
			</BlurFade>
		</BlurFade>
	);
};

export default Contact;
