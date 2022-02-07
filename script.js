let humanScore = 0;
let computerScore = 0;
let GameResult = "";
const resetButton = document.querySelector('#resetButton');
const gameTextField = document.querySelector('#gameText');
let playerSelection = "";

let rockImage = document.querySelector('.rock_image');
let paperImage = document.querySelector('.paper_image');
let scissorsImage = document.querySelector('.scissors_image');

let Human_Score_Box = document.querySelector('.Human_Score_Box');
let Computer_Score_Box = document.querySelector('.Computer_Score_Box');


let Human_Text_Box = document.querySelector('.Human_Text_Box');
let Computer_Text_Box = document.querySelector('.Computer_Text_Box');
let Round_Result_Text = document.querySelector('.Round_Result_Text');


rockImage.addEventListener ("click", () => {
    PlayGame();
});

paperImage.addEventListener ("click", () => {
    playerSelection = "paper";
    PlayGame();
});

scissorsImage.addEventListener ("click", () => {
    playerSelection = "scissors";
    PlayGame();
});




resetButton.addEventListener ("click", () => {
    
    humanScore = 0;
    computerScore = 0;
    Human_Score_Box.textContent = ''
    Computer_Score_Box.textContent = ''
    gameTextField.textContent ="";
    Computer_Text_Box.textContent=("");
    Human_Text_Box.textContent=("");
});

function UpdateScoreBoxes() {
    Human_Score_Box.textContent = humanScore
    Computer_Score_Box.textContent = computerScore

}

function PlayGame() {
     
               reset_Score_if_NewGame()
               game();
               UpdateScoreBoxes()
               gameResult();
               
 
}


function gameResult() {

    if (humanScore == 5) {
        gameTextField.textContent ="Human wins!";
    } 
    else if (computerScore == 5) {
        gameTextField.textContent ="Computer wins!";
    }
}

function reset_Score_if_NewGame() {
    //Get input from the player
    if (humanScore == 5) {
        gameTextField.textContent ="";
        Human_Score_Box.textContent = 0;
        Computer_Score_Box.textContent = 0;
        humanScore=0;
        computerScore=0;
    } 
    else if (computerScore == 5) {
        gameTextField.textContent ="";
        Human_Score_Box.textContent = 0;
        Computer_Score_Box.textContent = 0;
        humanScore=0;
        computerScore=0;

        humanScore = 0;
        computerScore = 0;
    } 
    else if (computerScore == 5) {
        gameTextField.textContent ="Computer wins!";
        humanScore = 0;
        computerScore = 0;
    }
    
}


function highlightComputer (object) {
    
    setTimeout(function(){
        object.style.cssText = 'box-shadow: 0 0 50px green; text-shadow: 0 0 50px green';
       }, 10);
    setTimeout(function(){
    object.style.cssText = '';
   }, 1000);
        
}



function game() {


    
    //Get input from the computer
    const computerSelection = ComputerPlay();
    
    if (computerSelection == 'rock') {
        highlightComputer(rockImage);
    }
    else if (computerSelection == 'paper'){
        highlightComputer(paperImage);
    }
    else if (computerSelection == 'scissors'){
        highlightComputer(scissorsImage);
    }


    console.log("The Player plays " + playerSelection );
    console.log("The Computer plays " + computerSelection );
    
    Computer_Text_Box.textContent=("The Computer plays " + computerSelection );
    Human_Text_Box.textContent=("The Player plays " + playerSelection );

    if (playerSelection == computerSelection) {
            Round_Result_Text.textContent=("The round is a tie.");
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore++;
            Round_Result_Text.textContent=("Computer wins round.");
        } else if (computerSelection == "scissors") {
            humanScore++;
            Round_Result_Text.textContent=("Human wins round.");
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            computerScore++;
            Round_Result_Text.textContent=("Computer wins round.");
        } else if (computerSelection == "rock") {
            humanScore++;
            Round_Result_Text.textContent=("Human wins round.");
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerScore++;
            Round_Result_Text.textContent=("Computer wins round.");
        } else if (computerSelection == "paper") {
            humanScore++;
            Round_Result_Text.textContent=("Human wins round.");
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

