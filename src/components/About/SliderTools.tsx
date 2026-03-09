import Azure from '../../assets/stacks/azure.svg';
import Cloudflare from '../../assets/stacks/cloudflare.svg';
import Dify from '../../assets/stacks/dify.svg';
import Docker from '../../assets/stacks/docker.svg';
import GCP from '../../assets/stacks/gcp.svg';
import Gemini from '../../assets/stacks/gemini.svg';
import GitHub from '../../assets/stacks/github.svg';
import OpenAI from '../../assets/stacks/openai.svg';
import Qwen from '../../assets/stacks/qwen.svg';
import Vitest from '../../assets/stacks/vitest.svg';
import DesktopView from '../../lib/DesktopView';
import { Marquee } from '../marquee';
import { RichButton } from '../rich-button';

interface ToolItem {
  src: string;
  alt: string;
}

export const toolsList: ToolItem[] = [
  { src: Vitest, alt: 'Vitest' },
  { src: OpenAI, alt: 'OpenAI' },
  { src: Gemini, alt: 'Gemini' },
  { src: Qwen, alt: 'Qwen' },
  { src: Docker, alt: 'Docker' },
  { src: GitHub, alt: 'GitHub' },
  { src: Azure, alt: 'Azure' },
  { src: GCP, alt: 'GCP' },
  { src: Cloudflare, alt: 'Cloudflare' },
  { src: Dify, alt: 'Dify AI' },
];

export const SliderTools = () => {
  const desktopView = DesktopView();

  return (
    <Marquee
      duration={30}
      fade
      fadeAmount={15}
      direction='right'
      pauseOnHover={!!desktopView}
    >
      {toolsList.map((tool) => (
        <RichButton
          key={tool.alt}
          asChild
          shadow={false}
          color='default'
          className='group mx-2 h-18 w-18 cursor-help rounded-lg p-4 hover:brightness-100 active:brightness-100 md:mx-3 md:h-20 md:w-20'
        >
          <div className='relative flex items-center justify-center'>
            <div className='pointer-events-none absolute z-30 max-w-14 rounded-sm bg-tooltip-bg px-1 py-1 text-center text-[0.6rem] text-tooltip-text opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:max-w-16 md:text-xs'>
              {tool.alt}
            </div>
            <img
              src={tool.src}
              alt={tool.alt}
              className='h-full w-full select-none object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover:blur-xs group-focus-visible:blur-xs'
              draggable='false'
            />
          </div>
        </RichButton>
      ))}
    </Marquee>
  );
};
