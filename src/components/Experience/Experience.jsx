// TODO: Add photos on left and right of the experience line

import Line from './Line';
import ExperienceBox from './ExperienceBox';

import COMPFEST from '../../assets/orgs/compfest.svg';
import RISTEK from '../../assets/orgs/ristek.svg';
import Fasilkom from '../../assets/orgs/fasilkom.svg';
import DDP0 from '../../assets/orgs/ddp0.svg';
import BETIS from '../../assets/orgs/betis.svg';

const Experience = () => {
	return (
		<section className='flex w-[68rem] flex-col relative' id='experiencesec'>
			<div id='experience' className='absolute -top-36'/>
			<div className='flex flex-row items-center space-x-8'>
				<p className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-7xl text-transparent'>The road so far</p>
				<div className='mt-4 h-0.5 flex-grow bg-white opacity-20' />
			</div>
			<div className='flex flex-col items-center space-y-4 mt-32'>
				<ExperienceBox
					title='Teaching Assistant of Discrete Math 1'
					org='Fasilkom UI'
					logo={Fasilkom}
					date='07/2024 - Present'
					desc='Designing assignment questions while also grading them and assisting students taking Discrete Math 1 and teaching in assistance sessions before quizzes and exams.'
				/>
				<Line />
				<ExperienceBox
					title='Student Mentor'
					org='Dasar-Dasar Pemrograman 0'
					logo={DDP0}
					date='06/2024 - Present'
					desc='Teaching freshmen of Fasilkom UI about Python Programming Language as a provision for DDP-1 course. The materials revolve around the basics of Python plus Python Turtle library.'
				/>
				<Line />
				<ExperienceBox
					title='HRD & TC Staff for CTF Division'
					org='COMPFEST16'
					logo={COMPFEST}
					date='03/2024 - Present'
					desc='As HRD, keeps the staff tightly bonded, ensures all staff perform their duties correctly, and bridges communication between the CTF staff. As Technical Committee (TC), in charge of designing and maintaining the CTF website platform before and during the competition.'
				/>
				<Line />
				<ExperienceBox
					title='Member of NetSOS SIG'
					org='RISTEK Fasilkom UI'
					logo={RISTEK}
					date='03/2024 - Present'
					desc='NetSOS stands for Network, Security, and Operating System (OS). As a member, I attend classes for internal members, learn how to ace CTF competitions, participate in a cross-SIG project, and selected to join the company visit to Tiket.com, a leading Indonesian OTA.'
				/>
				<Line />
				<ExperienceBox
					title='Acedemician & Lecturer'
					org='BETIS Fasilkom UI'
					logo={BETIS}
					date='12/2023 - 05/2024'
					desc='Conducted interviews to select prospective tutors, created learning materials including modules, quizzes, try-outs, and PowerPoint presentations, and stepped in to teach the class when tutors are unable to teach.'
				/>
			</div>
		</section>
	);
};

export default Experience;
