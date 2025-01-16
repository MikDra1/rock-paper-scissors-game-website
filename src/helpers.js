
export function getComputerChoice() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const choices = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      resolve(choices[randomIndex]);
    }, 1000);
  });
}

// Function to determine the winner
export function determineWinner(userChoice, computerChoice) {

  console.log(userChoice, computerChoice);
  if (userChoice === computerChoice) {
    return "It's a tie";
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win";
  }

  return "You lose";
}


