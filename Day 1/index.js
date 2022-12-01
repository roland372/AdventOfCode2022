const fs = require('fs');

var fileContent = fs
	.readFileSync('test.txt', 'utf8')
	.replace(/\r/g, '')
	.split('\n\n');

function part1() {
	let maxCalories = fileContent.map(el => {
		return el.split('\n').reduce((prev, curr) => prev + curr * 1, 0);
	});
	return Math.max(...maxCalories);
}

function part2() {
	let maxCalories = fileContent.map(el => {
		return el.split('\n').reduce((prev, curr) => prev + curr * 1, 0);
	});
	return maxCalories
		.sort((a, b) => b - a)
		.slice(0, 3)
		.reduce((prev, curr) => prev + curr, 0);
}

console.log(part1());
console.log(part2());
