const { spawn } = require('child_process');

console.log('Spawning next dev...');
const child = spawn('node', ['node_modules/next/dist/bin/next', 'dev'], {
  stdio: 'pipe',
  env: {
    ...process.env,
    DEBUG: '*',
  }
});

child.stdout.on('data', (data) => {
  console.log(`STDOUT: ${data.toString()}`);
});

child.stderr.on('data', (data) => {
  console.log(`STDERR: ${data.toString()}`);
});

setTimeout(() => {
  console.log('Sending SIGUSR1 to trigger inspector / print active handles...');
  process.kill(child.pid, 'SIGUSR1');
  
  setTimeout(() => {
    console.log('Killing child process...');
    child.kill();
    process.exit(0);
  }, 2000);
}, 5000);
