const { determineAgent } = require('/Users/purna/Desktop/newPro_portfolio/node_modules/next/dist/compiled/@vercel/detect-agent');

console.log('Calling determineAgent...');
determineAgent().then((res) => {
  console.log('Result:', res);
}).catch((err) => {
  console.error('Error:', err);
});
