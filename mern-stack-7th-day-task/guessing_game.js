const ps=require ("prompt-sync")
const prompt= ps()

let secretNumber=25;
for(let i=0;i!==secretNumber;i++){
    let guess=parseInt(prompt("Guess the number between 1 to 50 :"))
    if(guess==secretNumber){
        console.log("Congratulations! You guessed the correct number.")
        break;
    }
    else {
        console.log("Sorry! Try again.")
    }
}