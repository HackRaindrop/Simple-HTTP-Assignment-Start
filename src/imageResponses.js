const fs = require('fs');

const sponge = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// writes spongegar image to page
const getSponge = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(sponge);
  response.end();
};

module.exports.getSponge = getSponge;
