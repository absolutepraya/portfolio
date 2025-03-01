import Line from './Line';
import ExperienceBox from './ExperienceBox';
import DesktopView from '../../lib/DesktopView';
import COMPFEST from '../../assets/orgs/compfest.svg';
import RISTEK from '../../assets/orgs/ristek.svg';
import Fasilkom from '../../assets/orgs/fasilkom.svg';
import DDP0 from '../../assets/orgs/ddp0.svg';
import BETIS from '../../assets/orgs/betis.svg';
import GDG from '../../assets/orgs/gdg.svg';
import CO80 from '../../assets/orgs/80co.webp';
import { motion } from 'framer-motion';
import React from 'react';
// import { GlobeDemo } from '../AceternityUI/GlobeSection';

const experienceData = [
	{
		title: 'Front-End Engineer',
		org: '80&Company',
		url: 'https://80and.co/en/company/',
		logo: CO80,
		date: '01/2025 - Present',
		desc: "Working on a front-end interface using Next.js, while also developing a BaaS AI chat service powered by Dify AI and OpenAI's 4o-mini model, seamlessly integrated with Python to efficiently gather customer insights.",
	},
	{
		title: 'Software Engineering',
		org: 'GDGoC Universitas Indonesia',
		url: 'https://gdg.community.dev/gdg-on-campus-universitas-indonesia-jakarta-indonesia/',
		logo: GDG,
		date: '11/2024 - Present',
		desc: 'Organizing 2 main work programs: GDG Study Jams and WebDev Mini Competition. Study Jams is a series of workshops for students to learn about Google technologies, e.g. Flutter and Firebase. WebDev Mini Competition is a competition for students to create a website based on a given theme.',
		previousTitles: ['Member'],
		previousDates: ['09/2023 - 08/2024'],
	},
	{
		title: 'TA for Linear Algebra',
		org: 'Fasilkom UI',
		url: 'https://cs.ui.ac.id/',
		logo: Fasilkom,
		date: '01/2025 - Present',
		desc: 'Designs assignment questions while also grading them, hosts a weekly forum discussion, and teaching in assistance sessions before quizzes and exams.',
		previousTitles: ['TA for Discrete Math 1'],
		previousDates: ['07/2024 - 12/2024'],
	},
	{
		title: 'Lead of NetSOS SIG',
		org: 'RISTEK Fasilkom UI',
		url: 'https://www.ristek.cs.ui.ac.id/',
		logo: RISTEK,
		date: '02/2025 - Present',
		desc: 'NetSOS stands for Network, Security, and Operating System (OS). Here, I attend CTF classes for internals; focusing on digital forensics including OS disk image and memory forensics (Windows and Linux), network forensics, and media forensics (image, audio, and video); participate in a cross-SIG project as Next.js FE developer; and contribute to the NetSOS Open Class as the PIC for a 3-day class with over 110 registrants.',
		previousTitles: ['Member of NetSOS SIG', 'PIC of Open Class', 'Mentee of Open Class'],
		previousDates: ['03/2024-02/2025', '09/2024 - 11/2024', '10/2023 - 10/2023'],
	},
	{
		title: 'Student Mentor',
		org: 'Dasar-Dasar Pemrograman 0',
		url: 'https://www.linkedin.com/company/ddp-0/mycompany/',
		logo: DDP0,
		date: '06/2024 - 09/2024',
		desc: 'Teaching a group of Fasilkom UI freshmen about Python Language as a provision for DDP-1 course. The materials revolve around the basics of Python plus Python Turtle library.',
	},
	{
		title: 'Web Infra. & HRD Staff',
		org: 'COMPFEST16',
		url: 'https://compfest.id/',
		logo: COMPFEST,
		date: '03/2024 - 11/2024',
		desc: 'As Infrastructure Committee, in charge of designing and maintaining the CTF website platform before and during the competition. As HRD, keeps the staff tightly bonded, ensures all staff perform their duties correctly, and bridges communication between the CTF staff.',
	},
	{
		title: 'Academician & Lecturer',
		org: 'BETIS Fasilkom UI',
		url: 'https://www.instagram.com/betisfasilkomui/',
		logo: BETIS,
		date: '12/2023 - 05/2024',
		desc: 'Conducted interviews to select prospective tutors, created learning materials including modules, quizzes, try-outs, and PowerPoint presentations, and stepped in to teach the class when tutors are unable to teach.',
	},
];

const Experience = () => {
	const desktopView = DesktopView();

	return (
		<section
			className='relative flex w-[90vw] flex-col md:w-[68rem]'
			id='experiencesec'
		>
			<div
				id='experience'
				className='absolute -top-36'
			/>
			<div className='flex flex-col items-center md:flex-row md:space-x-8'>
				<motion.p
					className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
					initial={{ opacity: 0, y: '40px' }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'circOut' } }}
					viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
				>
					The road so far
				</motion.p>
				<div className={`relative mt-1 w-full rounded-full md:mt-3 md:w-auto md:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`}>
					<motion.div
						className='absolute h-1 w-full bg-customblack shadow-glowcustomblacksmall md:-top-2 md:h-4 md:shadow-glowcustomblack'
						whileInView={{ x: '760px', transition: { duration: 2, ease: 'circInOut', delay: 0.3 } }}
						viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
					/>
				</div>
			</div>

			{/* Solve performance issue for now, only show the globe on mobile */}
			{/* {!desktopView && <GlobeDemo />} */}

			<div className='z-50 mt-[6rem] flex flex-col items-center space-y-4'>
				{/* TODO: Load only top 4 */}
				{experienceData.map((experience, index) => (
					<React.Fragment key={index}>
						<ExperienceBox
							title={experience.title}
							org={experience.org}
							url={experience.url}
							logo={experience.logo}
							date={experience.date}
							desc={experience.desc}
							previousTitles={experience.previousTitles}
							previousDates={experience.previousDates}
						/>
						{index < experienceData.length - 1 && <Line />}
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Experience;
