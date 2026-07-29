import Azure from '../../assets/stacks/azure.svg';
import Cloudflare from '../../assets/stacks/cloudflare.svg';
import Dify from '../../assets/stacks/dify.svg';
import Docker from '../../assets/stacks/docker.svg';
import GCP from '../../assets/stacks/gcp.svg';
import Gemini from '../../assets/stacks/gemini.svg';
import GitHub from '../../assets/stacks/github.svg';
import OpenAI from '../../assets/stacks/openai.svg';
import PostHog from '../../assets/stacks/posthog.svg';
import Qwen from '../../assets/stacks/qwen.svg';
import Sentry from '../../assets/stacks/sentry.svg';
import Vercel from '../../assets/stacks/vercel.svg';
import Vitest from '../../assets/stacks/vitest.svg';

interface ToolItem {
  src: string;
  alt: string;
}

export const toolsList: ToolItem[] = [
  { src: Vitest, alt: 'Vitest' },
  { src: OpenAI, alt: 'OpenAI' },
  { src: Gemini, alt: 'Gemini' },
  { src: Qwen, alt: 'Qwen' },
  { src: Vercel, alt: 'Vercel AI SDK' },
  { src: Docker, alt: 'Docker' },
  { src: GitHub, alt: 'GitHub' },
  { src: Azure, alt: 'Azure' },
  { src: GCP, alt: 'GCP' },
  { src: Cloudflare, alt: 'Cloudflare' },
  { src: Sentry, alt: 'Sentry' },
  { src: PostHog, alt: 'PostHog' },
  { src: Dify, alt: 'Dify AI' },
];
