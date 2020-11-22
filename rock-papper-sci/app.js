
function computerPlay() {
  let options = ["rock","paper","scissors"];
  let picker = Math.floor(Math.random()*3);
  return options[picker];
}
// option + ; is backtick

function playRound(playerSelection,computerSelection) {

  if (playerSelection == "rock" && computerSelection =="rock" ) {
     return `Draw!.${playerSelection} equal ${computerSelection}.`;
  } else if(playerSelection == "paper" && computerSelection =="paper"){
    return `Draw!.${playerSelection} equal ${computerSelection}.`;
  }else if(playerSelection == "scissors" && computerSelection =="scissors"){
    return `Draw!.${playerSelection} equal ${computerSelection}.`;
  }else if(playerSelection == "rock" && computerSelection =="paper"){
    return `You lost!.${computerSelection} beats ${playerSelection}.`;
  }else if(playerSelection == "rock" && computerSelection =="scissors"){
    return `You won!.${playerSelection} beats ${computerSelection}.`;
  }else if(playerSelection == "paper" && computerSelection =="rock"){
    return `You won!.${playerSelection} beats ${computerSelection}.`;
  }else if(playerSelection == "paper" && computerSelection =="scissors"){
    return `You lost!.${computerSelection} beats ${playerSelection}.`;
  }else if(playerSelection == "scissors" && computerSelection =="paper"){
    return `You won!.${playerSelection} beats ${computerSelection}.`;
  }else if(playerSelection == "scissors" && computerSelection =="rock"){
    return `You lost!.${computerSelection} equal ${playerSelection}.`;
  }
}

function logPush(text) {
    let currentChildNum = logScreen.childElementCount
    console.log(currentChildNum);
    if (currentChildNum<3) {
      let p = document.createElement('p');
    p.textContent = text;
    logScreen.appendChild(p);
    p.classList.add("log-p") 
    }else{
      logScreen.lastChild.remove();
      let p = document.createElement('p');
      p.textContent = text;
      logScreen.insertBefore(p,logScreen.firstChild);
      p.classList.add("log-p") 
    }
    
}


let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let logScreen = document.querySelector('.log');

const btnList = [rockBtn,paperBtn,scissorsBtn];
logPush("Make your move !");

btnList.forEach((button) => {

  
  button.addEventListener('click', () => {
   let playerSelection = button.textContent;
   let computerSelection = computerPlay();
   setTimeout(() => {
    logPush('You picked: ' + playerSelection);
    setTimeout(() => {
      logPush('Computer picked: ' + computerSelection);
      setTimeout(() => {
        logPush(playRound(playerSelection,computerSelection));
       }, 1000);
     }, 1000);
   }, 1000);
   
   
  });
});








