import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const DIST_DIR = join(ROOT, 'dist');
const SITE = 'https://abhipraya.dev';

const profile = {
  name: 'Daffa Abhipraya',
  tagline: 'I build software that thinks, scales, and ships.',
  summary:
    "Full-stack apps, AI agents, and cloud infrastructure. I build from prototype to deployment, and I've won hackathons doing it.",
  links: [
    ['LinkedIn', 'https://linkedin.com/in/daffaabhipraya'],
    ['GitHub', 'https://github.com/absolutepraya'],
    ['Blog', 'https://blog.abhipraya.dev'],
  ],
};

export function renderMarkdown({ experience, projects, achievements }) {
  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.tagline} ${profile.summary}`,
    '',
    `Canonical URL: ${SITE}/`,
    '',
    ...profile.links.map(([label, href]) => `- [${label}](${href})`),
    '',
    '## Experience',
    '',
  ];

  for (const job of experience) {
    lines.push(`### ${job.title}, [${job.org}](${job.url})`, '');
    lines.push(`${job.date}`, '', job.desc.trim(), '');
  }

  lines.push('## Projects', '');
  for (const project of projects) {
    const links = [];
    if (project.url) links.push(`[Site](${project.url})`);
    if (project.github) links.push(`[Source](${project.github})`);
    if (project.npm) links.push(`[npm](${project.npm})`);
    lines.push(`### ${project.title}`, '');
    lines.push(
      `${project.subtitle}`,
      '',
      `- Type: ${project.kind}`,
      `- Date: ${project.date}`,
      `- Stack: ${project.stacks.join(', ')}`,
      ...(links.length > 0 ? [`- Links: ${links.join(', ')}`] : []),
      '',
    );
  }

  lines.push('## Achievements', '');
  for (const win of achievements) {
    const where = win.location ? `, ${win.location}` : '';
    lines.push(
      `### ${win.title}`,
      '',
      `${win.award}, [${win.organizer}](${win.organizerUrl})${where} (${win.date})`,
      '',
      win.desc,
      '',
    );
    for (const article of win.articles ?? []) {
      lines.push(`- Coverage: [${article.platform}](${article.url})`);
    }
    if (win.articles?.length) lines.push('');
  }

  lines.push(
    '## Writing',
    '',
    `Posts on software, systems, and self-hosting live on the [blog](${profile.links[2][1]}).`,
    '',
  );

  return `${lines
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()}\n`;
}

export async function generateMarkdown() {
  const [experience, projects, achievements] = await Promise.all([
    import('../src/data/experience_data.ts'),
    import('../src/data/projects_data.ts'),
    import('../src/data/achievements_data.ts'),
  ]);
  const markdown = renderMarkdown({
    experience: experience.default,
    projects: projects.default,
    achievements: achievements.default,
  });
  mkdirSync(DIST_DIR, { recursive: true });
  writeFileSync(join(DIST_DIR, 'index.md'), markdown);
  return markdown;
}

if (import.meta.main) {
  const markdown = await generateMarkdown();
  console.log(`Wrote dist/index.md (${markdown.length} characters)`);
}
