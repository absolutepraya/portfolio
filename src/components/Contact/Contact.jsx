import TopBorder from './TopBorder';

import Pin from '../../assets/creds/pin.png';
import Hello from '../../assets/creds/hello.png';

import { IconPointer, IconBrandLinkedin, IconMail, IconSend, IconCopy } from '@tabler/icons-react';

const Contact = () => {
	return (
		<section
			id='contactsec'
			className='relative flex h-[50vh] w-[68rem] flex-row rounded-3xl border-[#666666]'
			style={{ background: 'linear-gradient(to bottom, rgba(54, 67, 252, 0.01) 20%, rgba(54, 67, 252, 0.2))' }}
		>
			<div
				id='contacts'
				className='absolute -top-24'
			/>
			<TopBorder />
			<div className='flex w-1/2 flex-col items-center justify-center space-y-4 p-12'>
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
				<div className='relative flex h-fit w-full flex-col justify-center space-y-4 rounded-3xl border-2 border-b-0 border-r-0 border-[#2a2a2a] bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-8 shadow-xl'>
					<p className='text-lg'>Feel free to reach out for collab purposes or just a friendly hello :D</p>
					<div className='flex h-10 w-fit flex-row items-start justify-center space-x-2 rounded-2xl'>
						{/* <IconMail
							size={20}
							stroke={2}
							className='text-white'
						/> */}
						<div className='flex h-full items-center rounded-lg border border-customwhite px-3'>
							<p className=''>daffaabhiprayaputra@gmail.com</p>
						</div>
						<div className='flex h-full w-10 items-center justify-center rounded-lg bg-[#2c2c32] p-[0.5rem]'>
							<IconSend
								size={20}
								stroke={2}
							/>
						</div>
						<div className='flex h-full w-10 items-center justify-center rounded-lg bg-[#2c2c32] p-[0.5rem]'>
							<IconCopy
								size={20}
								stroke={2}
							/>
						</div>
					</div>
					<button className='flex h-10 w-fit flex-row items-center justify-center space-x-2 rounded-lg border border-customwhite px-4'>
						<p>Hit me on LinkedIn</p>
						<IconBrandLinkedin
							size={20}
							stroke={2}
						/>
					</button>
					<div className='h-0.5 w-full bg-customgray !mt-6' />
					<p className=''>Follow my socials!</p>
					{/* TODO: Social medias */}
				</div>
			</div>
		</section>
	);
};

/*
			<div className='flex w-[30rem] flex-col space-y-2'>
				<h1 className='font-instrument text-6xl'>I&apos;m always up for...</h1>
				<Marquee
					speed='50'
					gradient={true}
					gradientColor='#0d0d0d'
					gradientWidth={50}
					autoFill={true}
					direction='right'
					style={{ height: '5rem' }}
				>
					<p className='!ml-20 text-6xl font-bold'>Hackathon</p>
					<p className='!ml-20 text-6xl font-bold'>CTF</p>
					<p className='!ml-20 text-6xl font-bold'>Project</p>
					<p className='!ml-20 text-6xl font-bold'>Collaboration</p>
				</Marquee>
			</div>
*/

export default Contact;
