import {
  type Icon,
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
import { RichButton } from '../rich-button';

interface SkillItem {
  name: string;
  icon: Icon;
}

const skillsData: SkillItem[] = [
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
      speed={35}
      gradient={true}
      gradientColor={isDark ? '#0d0d0d' : '#ffffff'}
      gradientWidth={110}
      autoFill={true}
      direction='left'
      pauseOnClick={!desktopView}
      pauseOnHover={!!desktopView}
    >
      {skillsData.map((skill) => {
        const IconComponent = skill.icon;
        return (
          <RichButton
            key={skill.name}
            asChild
            color='default'
            className='mx-3 h-36 w-48 cursor-default rounded-xl text-text-secondary transition-colors duration-150 hover:text-customwhite hover:brightness-100 active:brightness-100'
          >
            <div className='flex flex-col items-center justify-center space-y-3 px-4'>
              <IconComponent className='z-20 size-6 scale-110' />
              <p className='z-20 text-wrap text-center font-jetbrainsmono text-lg'>
                {skill.name}
              </p>
            </div>
          </RichButton>
        );
      })}
    </Marquee>
  );
};
