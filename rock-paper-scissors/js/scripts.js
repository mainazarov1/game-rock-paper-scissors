let userScoreCount = 0;
let computerScoreCount = 0;
const score = document.getElementsByClassName('score');
const userScore = document.getElementById('score-user');
const computerScore = document.getElementById('score-computer');
const result = document.getElementById('result');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertWord(letter) {
	if (letter === 'r') return 'Rock';
	if (letter === 'p')	return 'Paper';
	return 'Scissors';
}

function win(user, computer) {
	const userChoice = document.getElementById(user);
	userScoreCount++;
	userScore.innerHTML = userScoreCount;
	computerScore.innerHTML = computerScoreCount;
	result.innerHTML = `${convertWord(user)} beats ${convertWord(computer)}! You WIN 🔥`;
	userChoice.classList.add('green-glow');
	setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 300);
}

function lose(user, computer) {
	const userChoice = document.getElementById(user);
	computerScoreCount++;
	userScore.innerHTML = userScoreCount;
	computerScore.innerHTML = computerScoreCount;
	result.innerHTML = `${convertWord(user)} loses to ${convertWord(computer)}! You LOST 💩`;
	userChoice.classList.add('red-glow');
	setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 300);
}

function draw(user, computer) {
	const userChoice = document.getElementById(user);
	result.innerHTML = `${convertWord(user)} equals ${convertWord(computer)}! It's a DRAW 🙈`;
	userChoice.classList.add('yellow-glow');
	setTimeout(() => document.getElementById(user).classList.remove('yellow-glow'), 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, computerChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, computerChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock.addEventListener('click', () => game('r'));
	paper.addEventListener('click', () => game('p'));
	scissors.addEventListener('click', () => game('s'));
}

main()