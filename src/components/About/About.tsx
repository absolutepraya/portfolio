import { IconSettings2, IconSparkles } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import BlurFade from '../../blocks/Animations/BlurFade';
import HoverBorderGradient from '../../blocks/Animations/HoverBorderGradient';
import DesktopView from '../../lib/DesktopView';
import BlurInDesc from './BlurInDesc';
import { SliderSkills } from './SliderSkills';
import { SliderStacks, stacksList } from './SliderStacks';
import { SliderTools, toolsList } from './SliderTools';

const About = () => {
  const desktopView = DesktopView();

  return (
    <section
      className='!mt-36 lg:!mt-40 relative flex w-[90vw] flex-col items-center xl:w-[68rem]'
      id='aboutsec'
    >
      <div id='about' className='absolute -top-40' />
      <motion.div
        initial={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }}
        animate={{
          scale: desktopView ? 1 : 0.95,
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 0.8, ease: 'easeInOut', delay: 0.5 },
        }}
      >
        <HoverBorderGradient
          containerClassName='rounded-full'
          as='button'
          className='flex items-center border border-customgray'
          style={{ backgroundColor: 'var(--color-about-card-border)' }}
          onClick={() => {
            document.getElementById('contacts')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          <span className='!ml-6 relative flex h-4 w-4 items-center justify-center'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-blurple opacity-75' />
            <span className='relative inline-flex h-3 w-3 rounded-full bg-blurple' />
          </span>
          <p className='shine-through !-mx-4 text-lg transition-all ease-in-out'>
            Let's ship AI that matters!
          </p>
        </HoverBorderGradient>
      </motion.div>
      <div className='mt-12 mb-14 flex min-h-[27rem] max-w-[23rem] flex-col items-center justify-center px-2 md:min-h-[25rem] md:w-[54rem] md:max-w-[1000rem] md:px-0'>
        <BlurInDesc />
        <motion.p
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.8, delay: 0.5 }}
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0 },
            visible: { filter: 'blur(0px)', opacity: 0.9 },
          }}
          className='-mt-12 max-w-[50rem] text-center md:text-lg'
        >
          Software, AI, and DevOps expert. From LLMs and AI agents to cloud
          systems and business automation. Leading teams and shipping results
          from client milestones to hackathon victories.
        </motion.p>
      </div>
      <div className='flex h-auto w-full flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0'>
        <BlurFade
          delay={0.2}
          offset={40}
          duration={0.5}
          className='w-full lg:w-[40%]'
        >
          <div className='flex h-full flex-col space-y-6 rounded-3xl border border-customgray bg-customblack p-6 shadow-lg transition-all duration-200 lg:hover:border-blurple lg:hover:shadow-glowblurpleextrasmall'>
            <div className='relative flex items-center justify-center lg:h-[11.5rem]'>
              {/* To fix transparent shadow gap for in Marquee for mobile */}
              {!desktopView && (
                <div className='absolute -top-2 -left-[1px] z-10 h-[105%] w-1 bg-customblack' />
              )}
              {!desktopView && (
                <div className='absolute -top-2 -right-[1px] z-10 h-[105%] w-1 bg-customblack' />
              )}
              <SliderSkills />
            </div>
            <div className='flex w-full flex-col items-start space-y-4'>
              <div className='flex h-8 w-auto items-center space-x-2 rounded-lg border px-2 transition-all duration-100 hover:scale-105'>
                <IconSparkles size={16} stroke={1.5} color='#fff' />
                <p className='font-jetbrainsmono text-sm lg:text-md'>
                  Skillsets
                </p>
              </div>
              <p className='text-lg lg:text-xl'>
                Expert in{' '}
                <b className='bg-gradient-to-br from-[#d4d7ff] to-blurple bg-clip-text text-transparent'>
                  Software
                </b>
                ,{' '}
                <b className='bg-gradient-to-br from-[#d4d7ff] to-blurple bg-clip-text text-transparent'>
                  AI
                </b>
                , and{' '}
                <b className='bg-gradient-to-br from-[#d4d7ff] to-blurple bg-clip-text text-transparent'>
                  DevOps
                </b>
                . Regularly competing in{' '}
                <i className='bg-gradient-to-br from-[#878fff] to-blurple bg-clip-text font-medium text-transparent'>
                  Hackathons
                </i>
                .
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.2}
          offset={40}
          duration={0.5}
          className='w-full lg:w-[39.3rem]'
        >
          <div className='relative flex h-full flex-col items-center space-y-6 rounded-3xl border border-customgray bg-customblack p-6 shadow-lg transition-all duration-200 lg:hover:border-blurple lg:hover:shadow-glowblurpleextrasmall'>
            <div className='relative flex w-full flex-col gap-y-5 lg:space-y-[0.24rem]'>
              {/* To fix transparent shadow gap for in Marquee for mobile */}
              {!desktopView && (
                <div className='absolute -top-2 -left-[1px] z-10 h-[105%] w-1 bg-customblack' />
              )}
              {!desktopView && (
                <div className='absolute -top-2 -right-[1px] z-10 h-[105%] w-1 bg-customblack' />
              )}
              <SliderStacks />
              <SliderTools />
            </div>
            <div className='flex w-full flex-col items-start space-y-4'>
              <div className='flex h-8 w-auto items-center space-x-2 rounded-lg border px-2 transition-all duration-100 hover:scale-105'>
                <IconSettings2 size={16} stroke={1.5} />
                <p className='font-jetbrainsmono text-sm lg:text-md'>
                  Tech stack & tools
                </p>
              </div>
              <p className='text-lg lg:text-xl'>
                Achieving peak <i>efficiency</i> and <i>performance</i> through
                careful{' '}
                <i className='bg-gradient-to-br from-[#878fff] to-blurple bg-clip-text font-medium text-transparent'>
                  attention to detail
                </i>
                , ensuring{' '}
                <b className='bg-gradient-to-br from-[#f4f4f9] to-blurple bg-clip-text text-transparent'>
                  perfection
                </b>{' '}
                in every project.
              </p>
            </div>
            {/* Intentional: hidden text lists all skills for SEO indexing since the marquee images aren't text-crawlable */}
            <p className='absolute -z-10 w-[20rem] text-xs opacity-0'>
              {stacksList.map((stack) => stack.alt).join(' ')}
            </p>
            <p className='absolute -z-10 w-[20rem] text-xs opacity-0'>
              {toolsList.map((tool) => tool.alt).join(' ')}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
