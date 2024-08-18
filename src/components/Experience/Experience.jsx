// TODO: Add photos on left and right of the experience line

import Line from './Line';
import ExperienceBox from './ExperienceBox';
import DesktopView from '../../DesktopView';

import COMPFEST from '../../assets/orgs/compfest.svg';
import RISTEK from '../../assets/orgs/ristek.svg';
import Fasilkom from '../../assets/orgs/fasilkom.svg';
import DDP0 from '../../assets/orgs/ddp0.svg';
import BETIS from '../../assets/orgs/betis.svg';

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
				<p className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'>The road so far</p>
				<div className={`mt-1 w-full rounded-full md:mt-3 md:w-auto md:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`} />
			</div>
			<div className='mt-24 flex flex-col items-center space-y-4 md:mt-32'>
				<ExperienceBox
					title='Teaching Assistant (TA)'
					org='Fasilkom UI'
					url='https://cs.ui.ac.id/'
					logo={Fasilkom}
					date='07/2024 - Present'
					desc='Teaching assistant of Discrete Math 1. Designing assignment questions while also grading them and assisting students taking Discrete Math 1 and teaching in assistance sessions before quizzes and exams.'
				/>
				<Line />
				<ExperienceBox
					title='Student Mentor'
					org='Dasar-Dasar Pemrograman 0'
					url='https://www.linkedin.com/company/ddp-0/mycompany/'
					logo={DDP0}
					date='06/2024 - Present'
					desc='Teaching freshmen of Fasilkom UI about Python Programming Language as a provision for DDP-1 course. The materials revolve around the basics of Python plus Python Turtle library.'
				/>
				<Line />
				<ExperienceBox
					title='HRD & TC Staff for CTF'
					org='COMPFEST16'
					url='https://compfest.id/'
					logo={COMPFEST}
					date='03/2024 - Present'
					desc='As HRD, keeps the staff tightly bonded, ensures all staff perform their duties correctly, and bridges communication between the CTF staff. As Technical Committee (TC), in charge of designing and maintaining the CTF website platform before and during the competition.'
				/>
				<Line />
				<ExperienceBox
					title='Member of NetSOS SIG'
					org='RISTEK Fasilkom UI'
					url='https://www.ristek.cs.ui.ac.id/'
					logo={RISTEK}
					date='03/2024 - Present'
					desc='NetSOS stands for Network, Security, and Operating System (OS). As a member, I attend classes for internal members, learn how to ace CTF competitions, participate in a cross-SIG project, and selected to join the company visit to Tiket.com, a leading Indonesian OTA.'
				/>
				<Line />
				<ExperienceBox
					title='Academician & Lecturer'
					org='BETIS Fasilkom UI'
					url='https://www.instagram.com/betisfasilkomui/'
					logo={BETIS}
					date='12/2023 - 05/2024'
					desc='Conducted interviews to select prospective tutors, created learning materials including modules, quizzes, try-outs, and PowerPoint presentations, and stepped in to teach the class when tutors are unable to teach.'
				/>
			</div>
		</section>
	);
};

export default Experience;
