let choices = document.querySelectorAll(".image");

let meCount = document.querySelector("#meCount");
let compCount = document.querySelector("#compCount");
let result = document.querySelector(".res");

let myScore = 0;
let compScore = 0;

const disCompChoice = () => {
    const choices = ["stone", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}
const decideWin = (myChoice) => {
    const compChoice = disCompChoice();
    if((myChoice === compChoice)){
        return [0, 0];
    }
    else if((myChoice === "stone" && compChoice === "scissors") || (myChoice === "paper" && compChoice === "stone") || (myChoice === "scissors" && compChoice === "paper")){
        return [1, compChoice];
    }
    else return [-1, compChoice];
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const myChoice = choice.getAttribute("id");
        const winner = decideWin(myChoice);
        if(winner[0] === 0){
            result.innerText = "DRAW";
            result.classList.add("draw");
            result.classList.remove("win");
            result.classList.remove("loose");
        }
        else if(winner[0] === 1){
            result.innerText = `I Won. Computer chose ${winner[1]}`
            myScore = myScore + 1;
            meCount.innerText = myScore;
            result.classList.add("win");
            result.classList.remove("loose");
            result.classList.remove("draw");
        }
        else{
            result.innerText = `I Lost! Computer chose ${winner[1]}`
            compScore = compScore + 1;
            compCount.innerText = compScore;
            result.classList.add("loose");
            result.classList.remove("win");
            result.classList.remove("draw");
        }
    })
})