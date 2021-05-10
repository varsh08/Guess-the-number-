
window.onload=function()
{
    document.getElementById("check").addEventListener("click",playGame);
  
   document.getElementById("reset").addEventListener("click",initGame);
   // showNumBelow();
}
let correctNumber=getRandomNumber();

function playGame()
{
  let numberGuess=document.getElementById('guess-num').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();

}


function getRandomNumber(){
    let randomNumber=Math.floor(Math.random()*100) + 1;
    return randomNumber;
}

function displayResult(numberGuess)
{
    if(numberGuess>correctNumber)
    {
    showNumAbove();
    }
    else if(numberGuess==correctNumber){
    showYouWon();
    }
    else if(numberGuess<correctNumber){
    showNumBelow();
    }

}

function getDialog(dialogType,text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog="<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog="<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog+=text;
    dialog+="</div>";
    return dialog;
}

function showYouWon(){
    const text="You won!!";
    let dialog=getDialog('won',text);
    //console.log(dialog);
    document.getElementById("result").innerHTML=dialog;

}

function showNumAbove(){
    const text="Your guess is high!!";
 let  dialog=getDialog('warning',text);
  //console.log(dialog);
   document.getElementById("result").innerHTML=dialog;
}

function showNumBelow(){
    const text="Your guess is low!!";
   let dialog=getDialog('warning',text);
   //console.log(dialog);
    document.getElementById("result").innerHTML=dialog;

}
let guesses=[];
function saveGuessHistory(guess)
{
    guesses.push(guess);
    //console.log(guesses);
}

function displayHistory(){
    let index=guesses.length-1;
    let list="<ul class='list-group'>";

    while(index>=0) {
        list+="<li class='list-group-item'>" + "You guessed "+ guesses[index] + "</li>";
        index-=1;
    }

    list+='</ul>';
    document.getElementById("history").innerHTML=list;
}
function initGame(){
    correctNumber=getRandomNumber();
    document.getElementById("result").innerHTML="";
    guesses=[];
    displayHistory();
}
