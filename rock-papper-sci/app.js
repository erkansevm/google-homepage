function computerPlay(params) {
  let options = ["Rock","Paper","Scissors"];
  let picker = Math.floor(Math.random()*3);
  return options[picker];
}
// option + ; is backtick

function playRound(playerSelection,computerSelection) {

  if (playerSelection == "Rock" && computerSelection =="Rock" ) {
     return `Draw!.${playerSelection} equal ${computerSelection}.`;
  } else if(playerSelection == "Paper" && computerSelection =="Paper"){
    return `Draw!.${playerSelection} equal ${computerSelection}.`;
  }else if(playerSelection == "Scissors" && computerSelection =="Scissors"){
    return `Draw!.${playerSelection} equal ${computerSelection}.`;
  }else if(playerSelection == "Rock" && computerSelection =="Paper"){
    return `You lost!.${computerSelection} beats ${playerSelection}.`;
  }else if(playerSelection == "Rock" && computerSelection =="Scissors"){
    return `You won!.${playerSelection} beats ${computerSelection}.`;
  }else if(playerSelection == "Paper" && computerSelection =="Rock"){
    return `You won!.${playerSelection} beats ${computerSelection}.`;
  }else if(playerSelection == "Paper" && computerSelection =="Scissors"){
    return `You lost!.${computerSelection} beats ${playerSelection}.`;
  }else if(playerSelection == "Scissors" && computerSelection =="Paper"){
    return `You won!.${playerSelection} beats ${computerSelection}.`;
  }else if(playerSelection == "Scissors" && computerSelection =="Rock"){
    return `You lost!.${computerSelection} equal ${playerSelection}.`;
  }
}

function game(howMany) {
  for (let index = 0; index < howMany; index++) {
    let playerSelection = window.prompt('What is your choice(Rock,Paper,Scissors)');
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
  }
}



game(5);




