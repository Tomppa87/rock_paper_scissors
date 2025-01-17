var humanScore = 0;
var computerScore = 0;
var clickCounter = 1;

const body = document.querySelector("body")
body.style.backgroundColor = "#00fff1"

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Welcome to Rock, Paper or Scissors"

const subtitle = document.createElement("h6");
subtitle.classList.add("subtitle");
subtitle.textContent = "Best of 5 rounds. Choose your weapon:";
title.appendChild(subtitle)
title.style.backgroundColor = "#0b756f"
title.style.color = "white"

const buttons = document.querySelectorAll("button");
console.log(buttons)

body.insertBefore(title, buttons[0])

const container = document.createElement("div")
container.classList.add("container");
var textBox = container.textContent;
container.textContent = ("You are playing round " + clickCounter + 
                        "\nThe score is currently: Human " + humanScore + " Computer "+computerScore)
body.appendChild(container);

console.log(buttons[0])

function getComputerChoice() {
    let comp = Math.random()*100;
    
    if (comp <= 100/3) { 
        return "rock";
    
    }   else if (comp >= 100*2/3) {
        return "paper";
    
    }   else {
        return "scissors"
    }
}

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
    container.textContent = ("You chose " + humanChoice + ", the computer chose " + computerChoice+".\n You are playing round " + clickCounter + 
        "\nThe score is currently: Human " + humanScore + " Computer "+computerScore)
  
}
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var getHumanChoice = button.innerText.toLowerCase();
        clickCounter += 1;
        console.log(getHumanChoice)
        
        var computerSelection = getComputerChoice()
        console.log(computerSelection)
        
        playRound(getHumanChoice, computerSelection)
        checkGame()
        
    })
})

function checkGame() {
    if (clickCounter < 6) {
        console.log("next round")
    } else {
        resultbox = document.createElement("div")
        resultbox.classList.add("resultbox");
                
        if (humanScore > computerScore) {
            resultbox.textContent = "Game over \n You win!"
            console.log("Game over")
            console.log("You win!");
            
        }   else if (humanScore < computerScore) {
            resultbox.textContent = "Game over \n You lose!"
            console.log("Game over")
            console.log("You lose");
            
        }   else {
            resultbox.textContent = "Game over \n You both suck!"
            console.log("Game over")
            console.log("You both suck");
            
        }
        container.textContent = ("Final Scores: Human " + humanScore + " Computer "+computerScore)
        container.appendChild(resultbox)
        clickCounter = 0;
        humanScore = 0;
        computerScore = 0;
    }
    
}