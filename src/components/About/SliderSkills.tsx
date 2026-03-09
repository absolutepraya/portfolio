import {
  type Icon,
  IconBrain,
  IconBrandGithubCopilot,
  IconCloud,
  IconCode,
  IconServer,
} from '@tabler/icons-react';
import DesktopView from '../../lib/DesktopView';
import { Marquee } from '../marquee';
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
];

export const SliderSkills = () => {
  const desktopView = DesktopView();

  return (
    <Marquee
      duration={25}
      fade
      fadeAmount={15}
      direction='left'
      pauseOnHover={!!desktopView}
    >
      {skillsData.map((skill) => {
        const IconComponent = skill.icon;
        return (
          <RichButton
            key={skill.name}
            asChild
            shadow={false}
            color='default'
            className='[&_svg]:!size-6 mx-3 h-36 w-48 cursor-default rounded-xl text-text-secondary transition-colors duration-150 hover:text-customwhite hover:brightness-100 active:brightness-100'
          >
            <div className='flex flex-col items-center justify-center space-y-1.5 px-4'>
              <IconComponent className='z-20 size-6 drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]' />
              <p className='z-20 text-wrap text-center font-jetbrainsmono text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]'>
                {skill.name}
              </p>
            </div>
          </RichButton>
        );
      })}
    </Marquee>
  );
};
