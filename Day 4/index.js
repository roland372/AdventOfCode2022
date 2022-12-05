const fs = require('fs');

var fileContent = fs
	.readFileSync('file.txt', 'utf8')
	.replace(/\r/g, '')
	.split('\n');
// .map(el => el.split(' '));

function part1() {
	function rangeOverlap(range1, range2) {
		// Split the strings at the "-" character to get the start and end values
		const [start1, end1] = range1.split('-');
		const [start2, end2] = range2.split('-');

		// Convert the strings to numbers so we can compare them
		const start1Num = parseInt(start1, 10);
		const end1Num = parseInt(end1, 10);
		const start2Num = parseInt(start2, 10);
		const end2Num = parseInt(end2, 10);

		// Check if the ranges fully overlap
		return (
			(start1Num >= start2Num && end1Num <= end2Num) ||
			(start1Num <= start2Num && end1Num >= end2Num)
		);
	}

	let overlapCounter = 0;

	fileContent.map(el => {
		if (rangeOverlap(el.split(',')[0], el.split(',')[1])) {
			overlapCounter++;
		}
	});

	console.log(overlapCounter);
}

function part2() {
	function checkRangeOverlap(str1, str2) {
		// Split the strings into arrays
		let arr1 = str1.split('-');
		let arr2 = str2.split('-');
		// Convert strings to numbers
		arr1 = arr1.map(num => parseInt(num));
		arr2 = arr2.map(num => parseInt(num));
		// Check if the ranges overlap
		if (arr1[0] <= arr2[1] && arr2[0] <= arr1[1]) {
			return true;
		} else {
			return false;
		}
	}

	let overlapCounter = 0;

	fileContent.map(el => {
		if (checkRangeOverlap(el.split(',')[0], el.split(',')[1])) {
			overlapCounter++;
		}
	});

	console.log(overlapCounter);
}

part1();
part2();
