import { SliderSkills } from './SliderSkills';
import { SliderStacks, stacksList } from './SliderStacks';
import { SliderTools, toolsList } from './SliderTools';
import DesktopView from '../../lib/DesktopView';
import { IconSettings2, IconSparkles } from '@tabler/icons-react';
import { motion } from 'framer-motion';
// import AnimatedCursor from 'react-animated-cursor';
import BlurInDesc from './BlurInDesc';
import HoverBorderGradient from '../../blocks/Animations/HoverBorderGradient/HoverBorderGradient';
import BlurFade from '../../blocks/Animations/BlurFade/BlurFade';

const About = () => {
  const desktopView = DesktopView();

  return (
    <section
      className='relative !mt-40 flex w-[90vw] flex-col items-center xl:w-[68rem]'
      id='aboutsec'
    >
      {/* {desktopView && (
				<AnimatedCursor
					innerSize={0}
					outerSize={25}
					innerScale={0}
					outerScale={1.8}
					showSystemCursor={true}
					trailingSpeed={10}
					// outerAlpha={0}
					// hasBlendMode={true}
					clickables={['a', 'button', '.clickable', '.small-clickable']}
					// innerStyle={{
					// 	backgroundColor: 'rgba(255, 255, 255, 1)',
					// 	boxShadow: '0px 0px 6px 2px rgba(0,0,0,0.2)',
					// 	// mixBlendMode: 'exclusion',
					// }}
					outerStyle={{
						backgroundColor: 'rgba(255, 255, 255, 0.4)',
						// mixBlendMode: 'exclusion',
					}}
				/>
			)} */}
      <div
        id='about'
        className='absolute -top-40'
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: desktopView ? 1 : 0.95,
          transition: { duration: 0.5, ease: 'easeInOut', delay: 2.3 },
        }}
      >
        <HoverBorderGradient
          containerClassName='rounded-full'
          as='button'
          className='flex items-center border border-customgray bg-[#131313]'
        >
          <span className='relative !ml-6 flex h-4 w-4 items-center justify-center'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-blurple opacity-75'></span>
            <span className='relative inline-flex h-3 w-3 rounded-full bg-blurple'></span>
          </span>
          <p className='shine-through !-mx-4 text-lg transition-all ease-in-out'>Open for new opportunities</p>
        </HoverBorderGradient>
      </motion.div>
      <div className='mt-12 flex min-h-[30rem] max-w-[23rem] flex-col items-center justify-center px-2 md:w-[54rem] md:max-w-[1000rem] md:px-0 mb-14'>
        <BlurInDesc />
        <p className='text-center text-lg opacity-[90%] max-w-[37rem] -mt-10'>
          Transforming ideas into solutions powered by the <i>latest technology</i> from Jakarta, Indonesia.
        </p>
      </div>
      <div className='flex h-auto w-full flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0'>
        <BlurFade
          className='flex h-full w-full flex-col space-y-6 rounded-3xl border border-customgray bg-customblack p-6 shadow-lg transition-all duration-200 lg:w-[40%] lg:hover:border-blurple lg:hover:shadow-glowblurpleextrasmall'
          delay={0.6}
          offset={40}
          duration={0.6}
        >
          <div className='relative flex items-center justify-center lg:h-[11.5rem]'>
            {/* To fix transparent shadow gap for in Marquee for mobile */}
            {!desktopView && <div className='absolute -left-[1px] -top-2 z-10 h-[105%] w-1 bg-customblack' />}
            {!desktopView && <div className='absolute -right-[1px] -top-2 z-10 h-[105%] w-1 bg-customblack' />}
            <SliderSkills />
          </div>
          <div className='flex w-full flex-col items-start space-y-4'>
            <div className='flex h-8 w-auto items-center space-x-2 rounded-lg border px-2 transition-all duration-100 hover:scale-105'>
              <IconSparkles
                size={16}
                stroke={1.5}
                color='#fff'
              />
              <p className='lg:text-md font-maplemono text-sm'>My skillsets</p>
            </div>
            <p className='text-xl lg:text-2xl'>
              Expert in <b className='bg-gradient-to-br from-[#d4d7ff] to-blurple bg-clip-text text-transparent'>Fullstack Dev</b>, <b className='bg-gradient-to-br from-[#d4d7ff] to-blurple bg-clip-text text-transparent'>AI</b>, and <b className='bg-gradient-to-br from-[#d4d7ff] to-blurple bg-clip-text text-transparent'>DevOps</b>. Regularly competing in <i className='bg-gradient-to-br from-[#878fff] to-blurple bg-clip-text font-medium text-transparent'>Hackathons</i>.
            </p>
          </div>
        </BlurFade>
        <BlurFade
          className='relative flex h-full w-full flex-col items-center space-y-6 rounded-3xl border border-customgray bg-customblack p-6 shadow-lg transition-all duration-200 lg:w-[39.3rem] lg:hover:border-blurple lg:hover:shadow-glowblurpleextrasmall'
          delay={0.6}
          offset={40}
          duration={0.6}
        >
          <div className='relative flex w-full flex-col gap-y-5 lg:space-y-[0.24rem]'>
            {/* To fix transparent shadow gap for in Marquee for mobile */}
            {!desktopView && <div className='absolute -left-[1px] -top-2 z-10 h-[105%] w-1 bg-customblack' />}
            {!desktopView && <div className='absolute -right-[1px] -top-2 z-10 h-[105%] w-1 bg-customblack' />}
            <SliderStacks></SliderStacks>
            <SliderTools></SliderTools>
          </div>
          <div className='flex w-full flex-col items-start space-y-4'>
            <div className='flex h-8 w-auto items-center space-x-2 rounded-lg border px-2 transition-all duration-100 hover:scale-105'>
              <IconSettings2
                size={16}
                stroke={1.5}
              />
              <p className='lg:text-md font-maplemono text-sm'>My tech stack & tools</p>
            </div>
            <p className='text-xl lg:text-2xl'>
              Achieving peak <i>efficiency</i> and <i>performance</i> through careful <i className='bg-gradient-to-br from-[#878fff] to-blurple bg-clip-text font-medium text-transparent'>attention to detail</i>, ensuring <b className='bg-gradient-to-br from-[#f4f4f9] to-blurple bg-clip-text text-transparent'>perfection</b> in every project.
            </p>
          </div>
          {/* To improve SEO, write all skills in a hidden p under this div */}
          <p className='absolute -z-10 w-[20rem] text-xs opacity-0'>{stacksList.map((stack) => stack.alt).join(' ')}</p>
          <p className='absolute -z-10 w-[20rem] text-xs opacity-0'>{toolsList.map((tool) => tool.alt).join(' ')}</p>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
