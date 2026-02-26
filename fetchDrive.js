const https = require('https');
const fs = require('fs');
https
  .get(
    'https://drive.google.com/drive/folders/1kWGyfLqSQQ1INFGC7ekwcvA92f6xIiVC?usp=sharing',
    (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        fs.writeFileSync('drive.html', data);
        console.log('Saved to drive.html');
      });
    },
  )
  .on('error', (err) => console.error(err));
