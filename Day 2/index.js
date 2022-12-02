const fs = require('fs');

var fileContent = fs
	.readFileSync('file.txt', 'utf8')
	.replace(/\r/g, '')
	.split('\n')
	.map(el => el.split(' '));

const points = {
	rock: 1,
	paper: 2,
	scissors: 3,
};

const moves = {
	A: 'rock',
	B: 'paper',
	C: 'scissors',
	X: 'rock',
	Y: 'paper',
	Z: 'scissors',
};

let myPoints = 0;
let opponentPoints = 0;
function part1() {
	const totalMoves = fileContent.map(el => {
		const opponentMove = moves[el[0]];
		const myMove = moves[el[1]]; // part 1

		if (opponentMove === 'rock' && myMove === 'rock') {
			myPoints += points.rock + 0;
		}
		if (opponentMove === 'paper' && myMove === 'rock') {
			myPoints += points.rock + 0;
		}
		if (opponentMove === 'scissors' && myMove === 'rock') {
			myPoints += points.rock + 0;
		}
		if (opponentMove === 'rock' && myMove === 'paper') {
			myPoints += points.paper + 3;
		}
		if (opponentMove === 'paper' && myMove === 'paper') {
			myPoints += points.paper + 3;
		}
		if (opponentMove === 'scissors' && myMove === 'paper') {
			myPoints += points.paper + 3;
		}
		if (opponentMove === 'rock' && myMove === 'scissors') {
			myPoints += points.scissors + 6;
		}
		if (opponentMove === 'paper' && myMove === 'scissors') {
			myPoints += points.scissors + 6;
		}
		if (opponentMove === 'scissors' && myMove === 'scissors') {
			myPoints += points.scissors + 6;
		}
	});

	return totalMoves;
}

part1();

console.log(myPoints);
