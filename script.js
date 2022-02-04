let humanScore = 0;
let computerScore = 0;
let GameResult = "";


function PlayGame() {
     
while (humanScore < 5 && computerScore < 5 ) {

     setTimeout(function() {
               game();
               gameResult();
     }, 100);
}
     
}



function gameResult() {

    if (humanScore == 5) {
        console.log("Human wins!")
    } 
    else if (computerScore == 5) {
        console.log("Computer wins!")
    }
 
}


function game() {

    //Get input from the player
    let playerSelectionPrompt = prompt("Rock, Paper, or Scissors?");
    let playerSelection = playerSelectionPrompt.toLowerCase();
    
    //Get input from the computer
    const computerSelection = ComputerPlay();


    console.log("The Player plays " + playerSelection );
    console.log("The Computer plays " + computerSelection );
    

    if (playerSelection == computerSelection) {
        GameResult = "Tie";    
        console.log("Round is a tie")
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore++;
            console.log("Computer wins round.");
        } else if (computerSelection == "scissors") {
            humanScore++;
            console.log("Human wins round.");
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            computerScore++;
            console.log("Computer wins round.");
        } else if (computerSelection == "rock") {
            humanScore++;
            console.log("Human wins round.");
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerScore++;
            console.log("Computer wins round.");
        } else if (computerSelection == "paper") {
            humanScore++;
            console.log("Human wins round.");
        }
    }


  
}





//This function chooses a choice for the computer based on the getRandomInt function
function ComputerPlay() {
    let x = getRandomInt(3);   

    if (x == 0) {
        return "rock"; 
    } else if (x == 1) {
        return "paper";
    } else if (x == 2) {
        return "scissors";
    }
    
}




//This function will generate a random number between 0 and 2 if passed the parameter 3.  
//This gives us three choices, to randomly have the computer select rock, paper, or scissors.
function getRandomInt(max) {

    let Random_Number_Btwn_Zero_and_One = Math.random();
    console.log(Random_Number_Btwn_Zero_and_One);

    let MaxNumber = max * Random_Number_Btwn_Zero_and_One;
    console.log(MaxNumber);

    //Math.floor effectively truncates the decimal from whatever the float values is.  i.e - 2.6 becomes 2.
    let RandomNumberforComputer = Math.floor(MaxNumber);  
    console.log("The Random Number generated by the function is " + RandomNumberforComputer);

    return RandomNumberforComputer
    
}

