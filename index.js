const fs = require('fs');

var fileContent = fs
	.readFileSync('file.txt', 'utf8')
	.replace(/\r/g, '')
	.split('\n');

console.log(fileContent);
