import { spawnSync } from 'node:child_process';

function run(command) {
  const result = spawnSync(command, {
    env: process.env,
    shell: true,
    stdio: 'inherit',
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const hasClientId = Boolean(process.env.TINA_CLIENT_ID);
const hasToken = Boolean(process.env.TINA_TOKEN);

if (hasClientId !== hasToken) {
  console.error(
    'Both TINA_CLIENT_ID and TINA_TOKEN must be set to build the hosted TinaCMS admin.'
  );
  process.exit(1);
}

if (hasClientId && hasToken) {
  run('npx tinacms build');
} else {
  console.log(
    'Skipping hosted TinaCMS admin build because TINA_CLIENT_ID and TINA_TOKEN are not set.'
  );
}

run('npx astro build');
