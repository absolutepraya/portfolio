import {
  IconBox,
  IconBrandLinkedin,
  IconBriefcase2,
  IconHome,
  IconSend,
  IconTrophy,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import BlurFade from '../../blocks/Animations/BlurFade';
import DesktopView from '../../lib/DesktopView';
import { RichButton } from '../rich-button';
import { Signature } from '../signature';
import Button from './Button';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('aboutsec');
  const desktopView = DesktopView();
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <BlurFade
      className='fixed top-4 right-4 left-4 z-100! flex h-15 flex-row items-center justify-between rounded-2xl border px-2 backdrop-blur-md md:top-6 md:h-[4.9rem] md:rounded-3xl md:px-2.5 lg:right-auto lg:left-auto lg:w-220'
      style={{
        backgroundColor: 'var(--color-nav-bg)',
        borderColor: 'var(--color-nav-border)',
      }}
      delay={0.2}
      offset={40}
      duration={0.5}
      direction='down'
      scale={0.82}
    >
      {/* LEFT: Signature (mobile + desktop) */}
      <div className='flex flex-row items-center space-x-4 font-jetbrainsmono tracking-tight lg:w-1/3'>
        <div className='relative ml-2 h-9 max-w-20 lg:ml-4 lg:h-14 lg:max-w-40'>
          <Signature
            text={desktopView ? 'Abhipraya' : 'Abhip'}
            fontSize={desktopView ? 42 : 28}
            color='var(--color-page-bg)'
            duration={1.5}
            className='absolute top-[3px] left-[0.5px] h-9 max-w-20 lg:h-14 lg:max-w-40'
          />
          <Signature
            text={desktopView ? 'Abhipraya' : 'Abhip'}
            fontSize={desktopView ? 42 : 28}
            color='var(--color-text-primary)'
            duration={1.5}
            className='relative z-10 h-9 max-w-20 lg:h-14 lg:max-w-40'
          />
        </div>
      </div>

      {/* CENTER: Nav buttons */}
      <div className='flex flex-row justify-center space-x-1.5 md:space-x-3 lg:w-1/3'>
        <Button
          icon={<IconHome />}
          text='Home'
          link='#about'
          isActive={activeSection === 'aboutsec'}
        />
        <Button
          icon={<IconBriefcase2 />}
          text='Experience'
          link='#experience'
          isActive={activeSection === 'experiencesec'}
        />
        <Button
          icon={<IconTrophy />}
          text='Achievements'
          link='#achievements'
          isActive={activeSection === 'achievementssec'}
        />
        <Button
          icon={<IconBox />}
          text='Projects'
          link='#projects'
          isActive={activeSection === 'projectssec'}
        />
      </div>

      {/* RIGHT: LinkedIn (desktop only) */}
      <div className='hidden flex-row items-center justify-end gap-2 lg:flex lg:w-1/3'>
        {desktopView && (
          <RichButton
            className='h-14 rounded-2xl pr-3 pl-4 text-text-secondary transition-[transform,color,filter,opacity] hover:scale-103 hover:text-customwhite hover:brightness-100 active:opacity-50 [&_svg]:size-5'
            shadow={false}
            asChild
          >
            <a
              href='https://www.linkedin.com/in/daffaabhipraya/'
              target='_blank'
              aria-label='Reach out on LinkedIn'
              title='Reach out on LinkedIn'
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              rel='noopener'
            >
              <p className='text text-end font-semibold leading-4'>Reach out</p>
              <div className='relative mr-1! h-5 w-5 overflow-hidden'>
                <div
                  className={`absolute ${isHover ? '-translate-y-40' : 'translate-y-0'} transition-transform duration-200`}
                >
                  <IconBrandLinkedin size={20} stroke={2} />
                </div>
                <div
                  className={`absolute ${isHover ? 'translate-y-0' : 'translate-y-40'} transition-all duration-200`}
                >
                  <IconSend size={20} stroke={2} />
                </div>
              </div>
            </a>
          </RichButton>
        )}
      </div>
    </BlurFade>
  );
};

export default NavBar;
