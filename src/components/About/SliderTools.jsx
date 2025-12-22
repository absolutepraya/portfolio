import Marquee from 'react-fast-marquee';
import AWS from '../../assets/stacks/aws.svg';
import Azure from '../../assets/stacks/azure.svg';
import Cloudflare from '../../assets/stacks/cloudflare.svg';
import Dify from '../../assets/stacks/dify.svg';
import DigitalOcean from '../../assets/stacks/digitalocean.svg';
import Discord from '../../assets/stacks/discord.svg';
import Docker from '../../assets/stacks/docker.svg';
import Figma from '../../assets/stacks/figma.svg';
import GCP from '../../assets/stacks/gcp.svg';
import Gemini from '../../assets/stacks/gemini.svg';
import GitHub from '../../assets/stacks/github.svg';
import Goose from '../../assets/stacks/goose.webp';
import Jest from '../../assets/stacks/jest.svg';
import Kimi from '../../assets/stacks/kimi.svg';
import Linux from '../../assets/stacks/linux.svg';
import n8n from '../../assets/stacks/n8n.svg';
import OpenAI from '../../assets/stacks/openai.svg';
import Qwen from '../../assets/stacks/qwen.svg';
import Selenium from '../../assets/stacks/selenium.svg';
import Tableau from '../../assets/stacks/tableau.svg';
import Vitest from '../../assets/stacks/vitest.svg';
import X from '../../assets/stacks/x.svg';
import DesktopView from '../../lib/DesktopView';

export const toolsList = [
  { src: Figma, alt: 'Figma' },
  { src: Linux, alt: 'Linux' },
  { src: Jest, alt: 'Jest' },
  { src: Vitest, alt: 'Vitest' },
  { src: Selenium, alt: 'Selenium' },
  { src: Tableau, alt: 'Tableau' },
  { src: OpenAI, alt: 'OpenAI' },
  { src: Gemini, alt: 'Gemini' },
  { src: Kimi, alt: 'Kimi (Self-Hosted)' },
  { src: Qwen, alt: 'Qwen (Self-Hosted)' },
  { src: Discord, alt: 'Discord Bot' },
  { src: X, alt: 'X/Twitter Bot' },
  { src: Docker, alt: 'Docker' },
  { src: GitHub, alt: 'GitHub Actions (CI/CD)' },
  { src: Azure, alt: 'Azure' },
  { src: AWS, alt: 'AWS' },
  { src: GCP, alt: 'Google Cloud Platform' },
  { src: DigitalOcean, alt: 'DigitalOcean' },
  { src: Cloudflare, alt: 'Cloudflare' },
  { src: n8n, alt: 'n8n (Self-Hosted)' },
  { src: Dify, alt: 'Dify AI (Self-Hosted)' },
  { src: Goose, alt: 'Goose DB Migration' },
];

export const SliderTools = () => {
  const desktopView = DesktopView();

  return (
    <Marquee
      speed='40'
      gradient={true}
      gradientColor='#0d0d0d'
      gradientWidth={110}
      autoFill={true}
      direction='right'
      pauseOnClick={!desktopView}
      pauseOnHover={desktopView}
    >
      {toolsList.map((tool) => (
        <button
          key={tool.alt}
          type='button'
          className='group relative mx-2 flex h-[4.5rem] w-[4.5rem] cursor-help items-center justify-center rounded-lg bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl md:mx-3 md:h-20 md:w-20'
        >
          <div className='absolute h-[4.5rem] w-[4.5rem] rounded-lg border-2 border-b-0 border-r-0 border-[#2a2a2a] md:h-20 md:w-20' />
          <div className='pointer-events-none absolute z-30 max-w-[3.5rem] rounded bg-black px-1 py-1 text-center text-[0.6rem] text-[#cccccc] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:max-w-[4rem] md:text-xs'>
            {tool.alt}
          </div>
          <img
            src={tool.src}
            alt={tool.alt}
            className='h-full w-full select-none object-contain transition-all duration-200 group-hover:blur-sm group-focus-visible:blur-sm'
            draggable='false'
          />
        </button>
      ))}
    </Marquee>
  );
};
