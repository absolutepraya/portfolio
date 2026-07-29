import { spawnSync } from 'node:child_process';

const MINIMUM_SCORE = 99;
const result = spawnSync(
  'bunx',
  ['react-doctor', '--json', '--blocking', 'warning'],
  { encoding: 'utf8' },
);

if (result.error) throw result.error;

let report;
try {
  report = JSON.parse(result.stdout);
} catch {
  process.stderr.write(result.stderr);
  throw new Error('React Doctor did not produce a JSON report.');
}

const project = report.projects?.[0];
const score = project?.score?.score;
if (typeof score !== 'number') {
  throw new Error(
    'React Doctor report did not include a combined health score.',
  );
}

console.log(`React Doctor score: ${score}/100 (minimum ${MINIMUM_SCORE})`);
if (result.status !== 0 || score < MINIMUM_SCORE) {
  process.stderr.write(result.stderr);
  process.exitCode = 1;
}
