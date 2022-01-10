'use strict';
// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent="Correct Guess...."
const secretnumber=Math.trunc(Math.random()*20) + 1;
var score=20;
let highss=0;
document.querySelector('.check').addEventListener('click', function() {
    const guess=Number(document.querySelector('.guess').value);
    if(!guess)
    {document.querySelector('.message').textContent="ABE NUMBER TO DO.......";
    document.querySelector('body').style.backgroundColor='purple';
    }
    else if(guess==secretnumber){
    document.querySelector('.message').textContent="Correct Guess....";
    document.querySelector('.number ').textContent=secretnumber;
   
    if(highss<score)
    {
    highss=score;
    document.querySelector('.highscore').textContent=highss;

    }
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('number').style.width='30rem';
    }
    else if(guess>secretnumber)
    {
        if(score>1){
    document.querySelector('.message').textContent="Too High";
    score--;
    document.querySelector('.score').textContent=score;
    }
    else {
        document.querySelector('.message').textContent="HAAR GYE HAAR GYE";
        document.querySelector('.score').textContent=0;
    }
}
    else if(guess<secretnumber){
        if(score>1){
    document.querySelector('.message').textContent="Too Low";
    score--;
    document.querySelector('.score').textContent=score;
        }
        else {
            document.querySelector('.message').textContent="HAAR GYE HAAR GYE";
            document.querySelector('.score').textContent=0;
        }
    }
    // document.querySelector('.number ').textContent=secretnumber; 
});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.score').textContent=20;
    score=20;
    // highss=0;
    const secretnumber=Math.trunc(Math.random()*20) + 1;
    // document.querySelector('.highscore').textContent=0;
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('number').style.width='15rem';
}); 