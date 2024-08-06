import TopBorder from './TopBorder';

import Marquee from 'react-fast-marquee';

const Contact = () => {
	return (
		<section id='contactsec' className='relative flex h-[50vh] w-[68rem] flex-row rounded-3xl border-[#666666] p-8' style={{ background: 'linear-gradient(to bottom, rgba(54, 67, 252, 0) 60%, rgba(54, 67, 252, 0.2))' }}>
			<div id='contacts' className='absolute -top-24'/>
			<TopBorder />
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
