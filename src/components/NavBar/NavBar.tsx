import {
  IconBox,
  IconBrandLinkedin,
  IconBriefcase2,
  IconHome,
  IconMail,
  IconSend,
  IconTrophy,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import BlurFade from '../../blocks/Animations/BlurFade';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import Button from './Button';
import ButtonImg from './ButtonImg';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('aboutsec');
  const desktopView = DesktopView();
  const tabletView = TabletView();
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
      className='!z-[100] fixed top-8 flex h-[4.9rem] !md:scale-100 scale-[97%] flex-row items-center justify-between rounded-3xl border px-2.5 backdrop-blur-md lg:w-[55rem]'
      style={{
        backgroundColor: 'var(--color-nav-bg)',
        borderColor: 'var(--color-nav-border)',
      }}
      delay={0.2}
      offset={40}
      duration={0.5}
      direction='down'
      scale={tabletView ? 1 : 0.87}
    >
      <div className='flex flex-row items-center space-x-4 font-jetbrainsmono tracking-tight lg:w-1/3'>
        {desktopView && <ButtonImg />}
        {desktopView && (
          <div className='flex flex-col justify-start'>
            <p className='text-start font-bold'>Daffa Abhipraya</p>
            <p className='text-start'>SWE & AI, CS @ UI</p>
          </div>
        )}
      </div>
      <div className='flex w-1/3 flex-row justify-center space-x-3'>
        {!desktopView && <ButtonImg />}
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
        <Button
          icon={<IconMail />}
          text='Contacts'
          link='#contacts'
          isActive={activeSection === 'contactsec'}
        />
      </div>
      <div className='flex flex-row items-center justify-end gap-2 lg:w-1/3'>
        {desktopView && (
          <a
            href='https://www.linkedin.com/in/daffaabhipraya/'
            target='_blank'
            className='relative flex h-14 w-fit cursor-pointer flex-row items-center justify-center space-x-2 rounded-2xl border pr-3 pl-4 text-text-secondary shadow-md transition-all hover:scale-105 hover:text-customwhite'
            style={{
              backgroundColor: 'var(--color-nav-button-bg)',
              borderColor: 'var(--color-nav-border)',
            }}
            aria-label='Reach out on LinkedIn'
            title='Reach out on LinkedIn'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            rel='noopener'
          >
            <p className='text text-end font-semibold leading-4'>Reach out</p>
            <div className='!mr-1 relative h-[20px] w-[20px] overflow-hidden'>
              <div
                className={`absolute ${isHover ? '-translate-y-40' : 'translate-y-0'} transition-all duration-200`}
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
        )}
      </div>
    </BlurFade>
  );
};

export default NavBar;
