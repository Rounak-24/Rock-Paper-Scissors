let choices = document.querySelectorAll(".choice");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let msg = document.querySelector("#msg");
let arr = [rock,paper,scissors];
let user_score = 0, comp_score = 0;
let user_scoreboard = document.querySelector("#user-scoreboard");
let comp_scoreboard = document.querySelector("#comp-scoreboard");
let msgBox = document.querySelector(".msg-box");

const comp_choice = ()=>{
    let i = Math.floor(Math.random()*3);
    return i;
}

const compWin = (str)=>{
    comp_score++;
    comp_scoreboard.innerText = `${comp_score}`;
    msg.innerText = `Computer has choosen ${str}`;
    msgBox.style.backgroundColor = "red";
}

const userWin = (str)=>{
    user_score++;
    user_scoreboard.innerText = `${user_score}`;
    msg.innerText = `Computer has choosen ${str}`;
    msgBox.style.backgroundColor = "green";
}

const draw = ()=>{
    msg.innerText = `Draw!`;
    msgBox.style.backgroundColor = "rgb(148, 137, 129)";
}

for(let choice of choices){
    choice.addEventListener("click",()=>{
        let com = arr[comp_choice()];
        if(choice===rock){
            if(com===paper) compWin("paper");
            else if(com===scissors) userWin("scissors");
            else draw();
        }
        else if(choice===paper){
            if(com===scissors) compWin("scissors");
            else if(com===rock) userWin("rock");
            else draw();
        }
        else{    //scissors
            if(com===rock) compWin("rock");
            else if(com===paper) userWin("paper");
            else draw();
        }
    });
}