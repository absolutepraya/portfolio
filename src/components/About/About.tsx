import { SlideUpText } from '../slide-up-text';
import ProfileCard from './ProfileCard';

const About = () => {
  return (
    <section
      className='relative mt-14! flex w-[90vw] flex-col items-center md:mt-30! lg:mt-0! lg:min-h-dvh lg:justify-center xl:w-272'
      id='aboutsec'
    >
      <div id='about' className='absolute -top-40' />
      <div className='mt-12 flex w-full flex-col items-center gap-6 lg:mt-0 lg:translate-y-4 lg:flex-row lg:items-center lg:justify-around lg:gap-12'>
        {/* LEFT: Profile card */}
        <ProfileCard />

        {/* RIGHT: Hero text */}
        <div className='flex flex-col items-start justify-center'>
          <SlideUpText
            split='words'
            delay={0.5}
            stagger={0.06}
            className='pb-1 text-left font-instrument text-4xl leading-[2.6rem] md:text-5xl md:leading-[3.2rem]'
            animatedClass='text-customwhite'
          >
            I build software that thinks, scales, and ships.
          </SlideUpText>
          <SlideUpText
            split='words'
            delay={1}
            stagger={0.04}
            className='mt-3 max-w-200 text-left text-sm opacity-90 md:mt-4 md:text-lg'
          >
            Fullstack apps, AI agents, cloud infrastructure. I build from
            prototype to deployment, and I&apos;ve won hackathons doing it.
          </SlideUpText>
        </div>
      </div>
    </section>
  );
};

export default About;
