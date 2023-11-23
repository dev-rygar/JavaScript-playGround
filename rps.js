const getUserChoice = userInput => {
  userInput = userInput ? userInput.toString().toLowerCase() : userInput;
  if((userInput === "rock" ) || (userInput === "paper") || (userInput === "scissors")) {
    return userInput;
  }
  return 'Error: Check userInput.'
}


const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice;

  switch(randomNum) {
    case 0:
        computerChoice = 'rock';
        break;
    case 1:
        computerChoice = 'paper';
        break;
    case 2:
        computerChoice = 'scissors';
        break;
    default:
        console.log('Function: getComputerChoice error!');
        break;
  };
  return computerChoice
};



const determineWinner = (userChoice, computerChoice) => {
  if(getUserChoice(userChoice) !== 'Error: Check userInput.') {

        if( (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
          return 'Humanity has won!';
        } else if (userChoice === computerChoice) {
          return 'It\'s a draw!';
        } else {
          return 'Age of Ultron!';
        }
  } else {
    return 'Function: determineWinner, user choice invalid.';
  };

};

const playGame = (userChoice, computerChoice) => {
  console.log('User\'s Choice:', userChoice);
  console.log('Computer\'s Choice:', computerChoice);

  if(userChoice === 'bomb') {
    return 'Cheat Mode: user wins!';
  } else {
    return determineWinner(userChoice, computerChoice);
  }
}

let compChoice = getComputerChoice();

console.log(playGame('scissors', compChoice));

// console.log(getUserChoice(true));
// console.log(getComputerChoice());