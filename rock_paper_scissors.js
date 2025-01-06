var humanScore = 0;
var computerScore = 0;
var clickCounter = 1;

const body = document.querySelector("body")

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Welcome to Rock, Paper or Scissors"

const buttons = document.querySelectorAll("button");
console.log(buttons)

//console.log(typeof(buttons))



body.insertBefore(title, buttons[0])

const container = document.createElement("div")
container.classList.add("container");
container.textContent = ("You are playing round " + clickCounter + 
                        "\nThe score is currently: Human " + humanScore + " Computer "+computerScore)
body.appendChild(container);

console.log(buttons[0])

/*function playGame() {   
    
    for (let i = 0; i <5; i++) {
        console.log("Rounds left: " +(5-i))
        
        var computerSelection = getComputerChoice();
        var humanSelection = getHumanChoice;
        playRound (humanSelection, computerSelection)
        console.log("Your score is: "+ humanScore)
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
    */


function getComputerChoice() {
    let comp = Math.random()*100;
    //console.log (comp)
    if (comp <= 100/3) { 
        return "rock";
    
    }   else if (comp >= 100*2/3) {
        return "paper";
    
    }   else {
        return "scissors"
    }
}


/*function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors")
    return choice.toLowerCase();
    /*if (choice === "Rock") {
        return "Rock";
    }   else if (choice === "Paper") {
        return "Paper";
    }   else if (choice === "Scissors") {
        return "Scissors";
    }   else {
        return "Not a valid option, please make sure you've typed correctly"
    }    
    
}
*/


function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log("Looks like a draw");
    }   else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore = humanScore + 1;
        console.log("Human wins");
    }   else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore = humanScore + 1;
        console.log("Human wins");
    }   else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore = humanScore + 1;
        console.log("Human wins");    
    }   else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore = computerScore +1;
        console.log("Computer wins");
    }   else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore = computerScore +1;
        console.log("Computer wins");
    }   else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore = computerScore +1;
        console.log("Computer wins");
    }

    //console.log(humanScore)
    //console.log(computerScore)
}
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //console.log(button.innerText.toLowerCase())
        var getHumanChoice = button.innerText.toLowerCase();
        console.log(getHumanChoice)
        
        var computerSelection = getComputerChoice()
        console.log(computerSelection)
        
        playRound(getHumanChoice, computerSelection)
        
    })
})
//var computerSelection = getComputerChoice();
//console.log(computerSelection);
//var humanSelection = getHumanChoice();


//playRound(humanSelection, computerSelection);

//playGame();