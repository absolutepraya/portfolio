import BlurFade from '../../blocks/Animations/BlurFade/BlurFade';
import { FlickeringGrid } from '../../blocks/Animations/FlickeringGrid/FlickeringGrid';
import { IconAward, IconLaurelWreath, IconNews, IconMap2, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import CountUp from '../../blocks/TextAnimations/CountUp/CountUp';
import BotBorder from './BotBorder';
import { useState } from 'react';
import DesktopView from '../../lib/DesktopView';

const AchievementsBox = ({ achievementData }) => {
	const [isHover, setIsHover] = useState(false);
	const desktopView = DesktopView();

	return (
		<BlurFade
			className='relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg p-20 transition-all duration-200'
			delay={0.3}
			inView
			inViewMargin='-200px'
			duration={0.6}
			offset={20}
		>
			{/* Flickering grid */}
			<FlickeringGrid
				squareSize={4}
				gridGap={6}
				color={isHover ? '#3643FC' : '#6B7280'}
				maxOpacity={0.5}
				flickerChance={0.2}
				className={`absolute left-0 top-0.5 !z-[-20] h-full w-full`}
			/>
			{/* Create inner shadow */}
			<div className='absolute left-0 top-0 !z-[-10] h-full w-full shadow-[inset_0px_0px_30px_30px_rgba(13,13,13,1)]' />
			<div className='flex h-full w-full flex-col space-y-4 rounded-3xl border-2 border-customgray bg-customblack shadow-lg'>
				{achievementData.map((achievement, index) => (
					<BlurFade
						key={index}
						className={`flex h-auto w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative gap-x-8 p-8`}
						delay={0.6 + index * 0.2}
						offset={8}
						inView
						inViewMargin='-200px'
					>
						<div className='absolute right-8 top-8 font-jetbrainsmono font-extrabold opacity-70'>{achievement.date}</div>
						<div className='flex h-fit w-fit flex-col space-y-3'>
							<div className='flex aspect-square h-56 w-56 items-center justify-center rounded-xl bg-zinc-800'>
								<p className='font-jetbrainsmono text-lg font-bold'>(under dev lol)</p>
							</div>
							<div className='flex h-fit w-full flex-row justify-around'>
								<div className='flex h-full w-fit items-center justify-center rounded-lg transition-all duration-100 ease-in-out md:w-10'>
									<IconChevronLeft
										stroke={2}
										size={desktopView ? 24 : 22}
										className='opacity-40'
									/>
								</div>
								<div className='flex flex-row items-center space-x-2'>
									<div className='h-2 w-2 rounded-full bg-customwhite'></div>
									<div className='h-2 w-2 rounded-full bg-customwhite bg-opacity-40'></div>
									<div className='h-2 w-2 rounded-full bg-customwhite bg-opacity-40'></div>
								</div>
								<div className='flex h-full w-fit cursor-pointer items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:text-blurple md:w-10'>
									<IconChevronRight
										stroke={2}
										size={desktopView ? 24 : 22}
										className=''
									/>
								</div>
							</div>
						</div>
						<div className={`flex flex-col space-y-2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
							<div className='flex flex-col space-y-2'>
								<h3 className='font-instrument text-5xl'>{achievement.title}</h3>
								<div className='relative mb-[7px] flex w-fit flex-row items-center space-x-2 rounded-md border border-blurple bg-blurple bg-opacity-10 px-2'>
									<a
										className='text-sm text-blurple md:text-base'
										href={achievement.organizerUrl}
										target='_blank'
										rel='noreferrer'
									>
										by {achievement.organizer}
									</a>
									<img
										src={`${achievement.organizerLogo}`}
										alt={achievement.organizer}
										className='absolute -right-[35px] bottom-1/2 h-6 w-6 translate-y-1/2 object-contain'
									/>
								</div>
							</div>
							<p className='text'>{achievement.desc}</p>
							<div className='flex flex-col space-y-1 font-jetbrainsmono'>
								<div className='flex items-center space-x-2'>
									<IconAward
										size={20}
										stroke={1.5}
										className={`${achievement.awardInt === 1 ? 'text-yellow-500' : achievement.awardInt === 2 ? 'text-gray-400' : 'text-amber-700'}`}
									/>
									<p>{achievement.award}</p>
								</div>
								<div className='flex items-center space-x-2'>
									<IconLaurelWreath
										size={20}
										stroke={1.5}
										className='text-green-600'
									/>
									<p>
										Prize: {achievement.prizeCurr}{' '}
										<CountUp
											to={achievement.prizeInt}
											from={0}
											separator='.'
											duration={1.2}
										/>
									</p>
								</div>
								<div className='flex items-center space-x-2'>
									<IconMap2
										size={20}
										stroke={1.5}
										className='text-gray-400'
									/>
									<p>Location: {achievement.location}</p>
								</div>
								<div className='flex flex-row items-center space-x-2'>
									<IconNews
										size={20}
										stroke={1.5}
										className='text-gray-400'
									/>
									<p>Articles:</p>
									{achievement.articles.map((article, index) => (
										<a
											key={index}
											href={article.url}
											target='_blank'
											rel='noreferrer'
											className='flex items-center space-x-1 text-[#3b82f6] hover:text-[#2563eb]'
										>
											<p>
												{article.platform}
												{index !== achievement.articles.length - 1 && ','}
											</p>
										</a>
									))}
								</div>
							</div>
						</div>
						<BotBorder />
					</BlurFade>
				))}
				<BlurFade
					className='flex w-full items-center justify-center pb-8 pt-4 font-jetbrainsmono text-sm'
					delay={1.1 + achievementData.length * 0.4}
					offset={8}
					inView
				>
					<p className='!opacity-40'>and more to come...</p>
				</BlurFade>
			</div>
		</BlurFade>
	);
};

export default AchievementsBox;
