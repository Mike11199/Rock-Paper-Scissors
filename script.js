GetPlayerInput();


function GetPlayerInput() {
    
    const playerSelection = prompt("Rock, Paper, or Scissors?");

}

const computerSelection = ComputerPlay();

console.log("The Player plays " + playerSelection );
console.log("The Computer plays " + computerSelection );





//This function chooses a choice for the computer based on the getRandomInt function
function ComputerPlay() {
    let x = getRandomInt(3);   

    if (x = 0) {
        return "Rock"; 
    } else if (x = 1) {
        return "Paper";
    } else if (x =2) {
        return "Scissors";
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