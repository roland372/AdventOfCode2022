const fs = require('fs');

var fileContent = fs.readFileSync('file.txt', 'utf8');

const part1 = str => {
	let markerFound = false;
	let markerIndex = null;

	for (let i = 3; i < str.length; i++) {
		const fourChars = str.slice(i - 3, i + 1);

		if (fourChars.length === 4 && new Set(fourChars).size === 4) {
			markerFound = true;
			markerIndex = i;
			break;
		}
	}

	if (markerFound) {
		return markerIndex + 1;
	} else {
		return null;
	}
};

console.log(part1(fileContent));
