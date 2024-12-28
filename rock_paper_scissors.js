function playGame() {
    for (let i = 0; i <5; i++) {
        console.log("Rounds left: " +(5-i))
        
        var computerSelection = getComputerChoice();
        //console.log(computerSelection)
        var humanSelection = getHumanChoice();
        playRound (humanSelection, computerSelection)
        console.log("You're score is: "+ humanScore)
        console.log("The computer's score is: "+ computerScore)
        
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    }   else if (humanScore < computerScore) {
        console.log("You lose");

    }   else {
        console.log("You both suck");
    }
}   
var humanScore = 0;
var computerScore = 0;





function getComputerChoice() {
    let comp = Math.random()*100;
    //console.log (comp)
    if (comp <= 100/3) { 
        return "Rock";
    
    }   else if (comp >= 100*2/3) {
        return "Paper";
    
    }   else {
        return "Scissors"
    }
}


function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors")
    return choice
    /*if (choice === "Rock") {
        return "Rock";
    }   else if (choice === "Paper") {
        return "Paper";
    }   else if (choice === "Scissors") {
        return "Scissors";
    }   else {
        return "Not a valid option, please make sure you've typed correctly"
    }    
    */
}



function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log("Looks like a draw");
    }   else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore = humanScore + 1;
        console.log("Human wins");
    }   else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        humanScore = humanScore + 1;
        console.log("Human wins");
    }   else if (humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore = humanScore + 1;
        console.log("Human wins");    
    }   else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore = computerScore +1;
        console.log("Computer wins");
    }   else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore = computerScore +1;
        console.log("Computer wins");
    }   else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore = computerScore +1;
        console.log("Computer wins");
    }

    //console.log(humanScore)
    //console.log(computerScore)
}
//var computerSelection = getComputerChoice();
//console.log(computerSelection);
//var humanSelection = getHumanChoice();


//playRound(humanSelection, computerSelection);

playGame();