var playing = false
var score;
var action;
var timeRemaining;
var correctAnswer;

//if we click On start reset bottun
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing == true){
        location.reload();
    }
    else{
        playing = true
        //set score to 0
        score = 1; 
        document.getElementById("score-value").innerHTML = score;
        //show Countdown Box
        show("timeremaining");
        
        timeRemaining = 60;
        document.getElementById("time-value").innerHTML = timeRemaining;
        // hide Game Over box
        hide("gameover")


        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game"

        //start Conutdown
        startCountdown();

        //Genetrate Question and Answer
        generateQA();

    }
}

//Functions

function startCountdown(){
    action = setInterval(function(){
        timeRemaining -= 1;
        document.getElementById("time-value").innerHTML = timeRemaining;
        if(timeRemaining == 0){
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game over</p> <p>Your score is "+ score +" . </p>"
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
        document.getElementById("startreset").innerHTML = "Start Game ";

        }
    },1000)
}


function stopCountdown(){
     stopTime = clearInterval(action);
}

function hide(id){
document.getElementById(id).style.display = "none"; 

}

function show(id){
document.getElementById(id).style.display = "block" 
}

function generateQA(){
    // 1 is used to Start with 1
    var x = 1 + Math.round(Math.random()*99);
    var y = 1 + Math.round(Math.random()*99);
    correctAnswer = x * y;

    document.getElementById("questions").innerHTML = x + "x" + y;
    
    var correctPosition = 1 + Math.round(Math.random()*3);
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //Fill The Box With Correct Answer 
    var answer = [correctAnswer];
    for(i=1 ; i<5 ; i++){
        if( i != correctPosition){
            var wrongAns;
            do{
                wrongAns =(1 + Math.round(Math.random()*99))*(1 + Math.round(Math.random()*99));
        document.getElementById("box"+i).innerHTML = wrongAns;
            }while(wrongAns == correctAnswer)
         
    }
    }
}