import TopBorder from './TopBorder';

import Pin from '../../assets/creds/pin2.png';
import Hello from '../../assets/creds/hello.png';

import { IconPointer, IconBrandLinkedin, IconMail, IconSend, IconCopy, IconBrandGithub, IconBrandInstagram, IconBrandSpotify } from '@tabler/icons-react';

const Contact = () => {
	return (
		<section
			id='contactsec'
			className='relative flex h-[28rem] w-[68rem] flex-row rounded-3xl border-[#666666]'
			style={{ background: 'linear-gradient(to bottom, rgba(54, 67, 252, 0.01) 20%, rgba(54, 67, 252, 0.2))' }}
		>
			<div
				id='contacts'
				className='absolute -top-24'
			/>
			<TopBorder />
			<div className='flex w-auto flex-col items-center justify-center space-y-4 p-12'>
				<h1 className='w-full text-start font-instrument text-6xl'>I&apos;m always up for...</h1>
				<div className='flex flex-col space-y-3 text-5xl font-semibold'>
					<div className='flex items-center space-x-3 pl-0'>
						<IconPointer
							size={20}
							stroke={2}
							className='fill-black text-white'
						/>
						<p className=''>a project</p>
					</div>
					<div className='flex items-center space-x-3 pl-12'>
						<IconPointer
							size={20}
							stroke={2}
							className='fill-black text-white'
						/>
						<p className=''>a collab</p>
					</div>
					<div className='flex items-center space-x-3 pl-24'>
						<IconPointer
							size={20}
							stroke={2}
							className='fill-black text-white'
						/>
						<p className=''>CTFs</p>
					</div>
					<div className='flex items-center space-x-3 pl-36'>
						<IconPointer
							size={20}
							stroke={2}
							className='fill-black text-white'
						/>
						<p className=''>hackathons</p>
					</div>
				</div>
			</div>
			<div className='flex w-1/2 flex-col justify-center space-y-2 p-6'>
				<div className='relative flex h-fit w-full rotate-[-4deg] flex-col justify-center space-y-4 rounded-3xl border-2 border-b-0 border-r-0 border-[#2a2a2a] bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-8 shadow-xl'>
					<img
						src={Pin}
						alt='pin'
						className='absolute -right-8 -top-10 w-16 drop-shadow-md'
					/>
					<img
						src={Hello}
						alt='hello'
						className='absolute -bottom-4 -left-6 w-12 drop-shadow-md'
					/>
					<p className='text-lg'>Feel free to reach out for collab purposes or just a friendly hello :D</p>
					<div className='flex h-10 w-fit flex-row items-center justify-center space-x-2 rounded-2xl'>
						<div className='flex h-full items-center space-x-2 rounded-lg border border-customwhite px-3 hover:border-blurple hover:text-blurple transition-all duration-100'>
							<IconMail
								size={20}
								stroke={2}
							/>
							<p className='font-semibold'>daffaabhiprayaputra@gmail.com</p>
						</div>
						<div className='flex h-full w-10 items-center justify-center rounded-lg bg-[#2c2c32] p-[0.5rem] hover:bg-blurple hover:bg-opacity-30 hover:text-blurple transition-all duration-100'>
							<IconSend
								size={20}
								stroke={2}
							/>
						</div>
						<div className='flex h-full w-10 items-center justify-center rounded-lg bg-[#2c2c32] p-[0.5rem] hover:bg-blurple hover:bg-opacity-30 hover:text-blurple transition-all duration-100'>
							<IconCopy
								size={20}
								stroke={2}
							/>
						</div>
					</div>
					<a href='https://www.linkedin.com/in/daffaabhipraya/'>
						<div className='flex h-10 w-fit flex-row items-center justify-center space-x-2 rounded-lg bg-customwhite px-4 text-customblack hover:bg-blurple hover:text-customwhite transition-all duration-100'>
							<p className='font-semibold'>
								or hit me up on <a className='font-extrabold'>LinkedIn</a>
							</p>
							<IconBrandLinkedin
								size={20}
								stroke={2}
							/>
						</div>
					</a>
					<div className='!mt-6 h-0.5 w-full bg-customgray' />
					<p className=''>Follow my other socials!</p>
					<div className='flex flex-row items-center justify-between'>
						<a href='https://github.com/absolutepraya'>
							<div className='flex flex-row items-center space-x-1'>
								<IconBrandGithub
									size={24}
									stroke={2}
								/>
								<p className='underline underline-offset-4'>absolutepraya</p>
							</div>
						</a>
						<a href='https://www.instagram.com/___abhipraya/'>
							<div className='flex flex-row items-center space-x-1'>
								<IconBrandInstagram
									size={24}
									stroke={2}
								/>
								<p className='underline underline-offset-4'>___abhipraya</p>
							</div>
						</a>
						<a href='https://open.spotify.com/user/daffaabhiprayaputra?si=b80aa3237c7440ed'>
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
