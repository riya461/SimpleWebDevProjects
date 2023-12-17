function playRound(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  
    let result = '';
  
    if (playerSelection === computerSelection) {
      result = 'It\'s a tie!';
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      result = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  
    document.getElementById('result').textContent = result;
  }
  