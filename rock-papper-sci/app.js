
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
    compScore++;
    computerScoreP.textContent ="Comp:"+compScore;
    return `You lost!.${computerSelection} beats ${playerSelection}.`;
  }else if(playerSelection == "rock" && computerSelection =="scissors"){
    playerScore++;
    playerScoreP.textContent ="You:"+playerScore;
    return `You won!.${playerSelection} beats ${computerSelection}.`;
  }else if(playerSelection == "paper" && computerSelection =="rock"){
    playerScore++;
    playerScoreP.textContent ="You:"+playerScore;
    return `You won!.${playerSelection} beats ${computerSelection}.`;
  }else if(playerSelection == "paper" && computerSelection =="scissors"){
    compScore++;
    computerScoreP.textContent ="Comp:"+compScore;
    return `You lost!.${computerSelection} beats ${playerSelection}.`;
    
  }else if(playerSelection == "scissors" && computerSelection =="paper"){
    playerScore++;
    playerScoreP.textContent ="You:"+playerScore;
    return `You won!.${playerSelection} beats ${computerSelection}.`;
  }else if(playerSelection == "scissors" && computerSelection =="rock"){
    compScore++;
    computerScoreP.textContent ="Comp:"+compScore;
    return `You lost!.${computerSelection} equal ${playerSelection}.`;
  }
}

function logPush(text,isResult) {
    let currentChildNum = logScreen.childElementCount
    console.log(currentChildNum);
    if (currentChildNum<=2) {
        let p = document.createElement('p');
      p.textContent = text;
        if (isResult == true) {
          p.style.backgroundColor = "rgb(17, 95, 212)";
        }
      logScreen.appendChild(p);
      p.classList.add("log-p") 
    }else{
      logScreen.lastElementChild.remove();
      
      let p = document.createElement('p');
      p.textContent = text;
      if (isResult == true) {
        p.style.backgroundColor = "rgb(17, 95, 212)";
        p.style.color = "white";
      }
      logScreen.insertBefore(p,logScreen.firstChild);
      p.classList.add("log-p") 
    }
    
}


let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let logScreen = document.querySelector('.log');
let playerImg = document.querySelector('#player-image');
let computerImg = document.querySelector('#compt-image');
let playerScoreP = document.querySelector('#playerScore');
let computerScoreP = document.querySelector('#computerScore');

let compScore=0;
let playerScore=0;
const btnList = [rockBtn,paperBtn,scissorsBtn];
logPush("Make your move !");

btnList.forEach((button) => {

  
  button.addEventListener('click', () => {
   let playerSelection = button.textContent;
   let computerSelection = computerPlay();
   setTimeout(() => {
    logPush('You picked: ' + playerSelection);
    playerImg.src = `img/${playerSelection}.png`;
    setTimeout(() => {
      logPush('Computer picked: ' + computerSelection);
      computerImg.src = `img/${computerSelection}.png`;

  
      setTimeout(() => {
        logPush(playRound(playerSelection,computerSelection),true);
      }, 1000);
      
     }, 1000);
   }, 1000);
   
   
  });
});








