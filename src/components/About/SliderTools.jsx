import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import Figma from '../../assets/stacks/figma.svg';
import GitHub from '../../assets/stacks/github.svg';
import Linux from '../../assets/stacks/linux.svg';
import Docker from '../../assets/stacks/docker.svg';
import Azure from '../../assets/stacks/azure.svg';
import Jest from '../../assets/stacks/jest.svg';
import Selenium from '../../assets/stacks/selenium.svg';
import Tableau from '../../assets/stacks/tableau.svg';
import OpenAI from '../../assets/stacks/openai.svg';
import Gemini from '../../assets/stacks/gemini.svg';
import Kimi from '../../assets/stacks/kimi.svg';
import Qwen from '../../assets/stacks/qwen.svg';
import Discord from '../../assets/stacks/discord.svg';
import X from '../../assets/stacks/x.svg';
import GCP from '../../assets/stacks/gcp.svg';
import DigitalOcean from '../../assets/stacks/digitalocean.svg';
import Cloudflare from '../../assets/stacks/cloudflare.svg';
import n8n from '../../assets/stacks/n8n.svg';
import DesktopView from '../../lib/DesktopView';

export const toolsList = [
  { src: Figma, alt: 'Figma' },
  { src: GitHub, alt: 'GitHub Actions (CI/CD)' },
  { src: Linux, alt: 'Linux' },
  { src: Docker, alt: 'Docker' },
  { src: Azure, alt: 'Azure' },
  { src: Jest, alt: 'Jest' },
  { src: Selenium, alt: 'Selenium' },
  { src: Tableau, alt: 'Tableau' },
  { src: OpenAI, alt: 'OpenAI' },
  { src: Gemini, alt: 'Gemini' },
  { src: Kimi, alt: 'Kimi (Self-Hosted)' },
  { src: Qwen, alt: 'Qwen (Self-Hosted)' },
  { src: Discord, alt: 'Discord Bot' },
  { src: X, alt: 'X/Twitter Bot' },
  { src: GCP, alt: 'Google Cloud Platform' },
  { src: DigitalOcean, alt: 'DigitalOcean' },
  { src: Cloudflare, alt: 'Cloudflare' },
  { src: n8n, alt: 'n8n (Self-Hosted)' },
];

export const SliderTools = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const desktopView = DesktopView();

  return (
    <Marquee
      speed='40'
      gradient={true}
      gradientColor='#0d0d0d'
      gradientWidth={110}
      autoFill={true}
      direction='right'
      pauseOnClick={desktopView ? false : true}
      pauseOnHover={desktopView ? true : false}
    >
      {toolsList.map((tool, index) => (
        <div
          key={index}
          className='small-clickable mx-2 flex h-[4.5rem] w-[4.5rem] cursor-help items-center justify-center rounded-lg bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl md:mx-3 md:h-20 md:w-20'
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className='absolute h-[4.5rem] w-[4.5rem] rounded-lg border-2 border-b-0 border-r-0 border-[#2a2a2a] md:h-20 md:w-20' />
          {hoveredIndex === index && <div className='absolute z-30 max-w-[3.5rem] rounded bg-black px-1 py-1 text-center text-[0.6rem] text-[#cccccc] md:max-w-[4rem] md:text-xs'>{tool.alt}</div>}
          <img
            src={tool.src}
            alt={tool.alt}
            className={`h-full w-full select-none object-contain transition-all duration-200 ${hoveredIndex === index ? 'blur-sm' : ''}`}
            draggable='false'
          />
        </div>
      ))}
    </Marquee>
  );
};
