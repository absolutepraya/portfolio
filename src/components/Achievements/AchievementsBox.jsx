import BlurFade from '../../blocks/Animations/BlurFade/BlurFade';
import { FlickeringGrid } from '../../blocks/Animations/FlickeringGrid/FlickeringGrid';
import { IconAward, IconLaurelWreath, IconWorld, IconNews, IconMap2 } from '@tabler/icons-react';

const AchievementsBox = ({ achievementData }) => {
	return (
		// TODO: Consider to move the BlurFade to the inner box
		<BlurFade
			className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg p-20 transition-all duration-200'
			delay={0.25 + 0.05}
			inView
		>
			{/* Flickering grid */}
			<FlickeringGrid
				squareSize={4}
				gridGap={6}
				color='#6B7280'
				maxOpacity={0.5}
				flickerChance={0.2}
				className={`absolute left-0 top-0.5 !z-[-20] h-full w-full`}
			/>
			{/* Create inner shadow */}
			<div className='absolute left-0 top-0 !z-[-10] h-full w-full shadow-[inset_0px_0px_30px_30px_rgba(13,13,13,1)]'></div>
			<div className='flex h-full w-full flex-col space-y-4 rounded-3xl border-2 border-customgray bg-customblack shadow-lg'>
				{achievementData.map((achievement, index) => (
					<div
						key={index}
						className={`flex h-auto w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative space-x-8 p-8`}
					>
						<div className='absolute right-8 top-8 font-jetbrainsmono font-extrabold opacity-70'>{achievement.date}</div>
						<div className='flex aspect-square h-56 w-56 items-center justify-center rounded-xl bg-gray-800'>
							<p className='font-jetbrainsmono text-lg font-bold'>(under dev 🛠️)</p>
						</div>
						<div className={`flex flex-col space-y-2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
							<div className='flex flex-col space-y-2'>
								<h3 className='font-instrument text-5xl'>{achievement.title}</h3>
								<div className='mb-[7px] w-fit rounded-md border border-blurple bg-blurple bg-opacity-10 px-2'>
									<p className='text-xs text-blurple md:text-sm'>by {achievement.organizer}</p>
								</div>
							</div>
							<p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam saepe, veritatis earum eum odit explicabo.</p>
							<div className='flex flex-col space-y-2 font-jetbrainsmono text-sm'>
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
									<p>Prize: {achievement.prize}</p>
								</div>
								<div className='flex items-center space-x-2'>
									<IconMap2
										size={20}
										stroke={1.5}
										className='text-red-500'
									/>
									<p>Location: {achievement.location}</p>
								</div>
								<div className='flex flex-row items-center space-x-2'>
									<IconNews
										size={20}
										stroke={1.5}
										color='#fff'
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
					</div>
				))}
			</div>
		</BlurFade>
	);
};

export default AchievementsBox;
