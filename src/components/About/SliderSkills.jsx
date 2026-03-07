import {
  IconAutomation,
  IconBrain,
  IconBrandGithubCopilot,
  IconCloud,
  IconCode,
  IconServer,
  IconShieldLock,
} from '@tabler/icons-react';
import Marquee from 'react-fast-marquee';
import DesktopView from '../../lib/DesktopView';
import { useTheme } from '../../lib/ThemeContext';

const skillsData = [
  { name: 'Fullstack Engineering', icon: IconCode },
  { name: 'LLM Integration', icon: IconBrandGithubCopilot },
  { name: 'AI Agent Development', icon: IconBrain },
  { name: 'DevOps', icon: IconServer },
  { name: 'Cloud Engineering', icon: IconCloud },
  { name: 'Business Automation', icon: IconAutomation },
  { name: 'Cybersecurity', icon: IconShieldLock },
];

export const SliderSkills = () => {
  const desktopView = DesktopView();
  const { isDark } = useTheme();

  return (
    <Marquee
      speed='35'
      gradient={true}
      gradientColor={isDark ? '#0d0d0d' : '#ffffff'}
      gradientWidth={110}
      autoFill={true}
      direction='left'
      pauseOnClick={!desktopView}
      pauseOnHover={!!desktopView}
    >
      {skillsData.map((skill, _) => {
        const IconComponent = skill.icon;
        return (
          <div
            key={skill.name}
            className='relative mx-3 flex h-36 w-48 flex-col items-center justify-center space-y-3 rounded-xl bg-gradient-to-br from-card-from to-card-to px-4 text-text-secondary'
          >
            <div className='absolute h-[144px] w-[192px] rounded-xl border-2 border-theme-border-bevel border-r-0 border-b-0' />
            <div className='cursor-pointer'>
              <IconComponent className='z-20 scale-110 transition-all duration-100 hover:scale-125' />
            </div>
            <p className='z-20 text-center font-maplemono text-lg'>
              {skill.name}
            </p>
          </div>
        );
      })}
    </Marquee>
  );
};
