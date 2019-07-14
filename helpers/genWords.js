// Nodejs file to generate valid words.

const fs = require('fs');
const https = require('https');

(() => {
  const genWordList = wordList => {
    const wordArr = wordList.split('\n');
    const longWords = wordArr.filter(word => word.length > 4);
    fs.writeFile(__dirname + '/../assets/validWords.json', JSON.stringify(longWords), err => console.error(err));
  };

  https.get(
    'https://raw.githubusercontent.com/CodeBrauer/1000-most-common-words/master/1000-common-english-words.txt',
    res => {
      res.setEncoding('utf8');
      let body = '';
      res.on('data', data => (body += data));
      res.on('end', () => genWordList(body));
    },
  );
})();
