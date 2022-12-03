const fs = require('fs');

var fileContent = fs
	.readFileSync('file.txt', 'utf8')
	.replace(/\r/g, '')
	.split('\n');

function part1() {
	function repeatedCharInArrays(arr1, arr2) {
		const repeatedChar = arr1.filter(element => arr2.includes(element));

		return repeatedChar[0];
	}

	function findSharedSupplies(arr) {
		const sharedSupplies = arr.map(el => {
			return repeatedCharInArrays(
				el.slice(0, el.length / 2).split(''),
				el.slice(el.length / 2, el.length).split('')
			);
		});

		return sharedSupplies;
	}

	function getLetterValuesAndReturnSum(arr) {
		const sharedSupplies = arr;
		const convertedLetters = [];

		sharedSupplies.map(el => {
			if (/[a-z]/.test(el)) {
				convertedLetters.push(el.charCodeAt(0) - 96);
				// test for uppercase
			} else {
				convertedLetters.push(el.charCodeAt(0) - 65 + 27);
			}
		});

		console.log(convertedLetters.reduce((prev, curr) => prev + curr, 0));
	}

	return getLetterValuesAndReturnSum(findSharedSupplies(fileContent));
}

//* part 2 not working :(
function part2() {
	const supplies = fileContent.map(el => el.split(''));

	let duplicatesArr = [];

	function findDuplicatesInThreeArrays(arr1, arr2, arr3) {
		const duplicates = arr1.filter(i => arr2.includes(i) && arr3.includes(i));

		return duplicates;
	}

	let arrLength = 0;

	while (arrLength < 300) {
		findDuplicatesInThreeArrays(supplies[0], supplies[1], supplies[2])[0];

		arrLength++;
	}
}

// part1();
// part2();
