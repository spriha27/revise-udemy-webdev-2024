var gameStart = false;
var level = 1;
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];

$(document).on("keypress", function () {  
    if(!gameStart) {
        nextSequence();
        gameStart = true;
    }
});

function nextSequence() {
    newTile();
    $('h1').text('Level ' + level);
    level++;
    $(".btn").off("click").on("click", function (event) { 
        var userChosenColor = event.target.id;
        buttonAnimation(userChosenColor);
        userPattern.push(userChosenColor);
        checkAnswer(userPattern.length - 1);   
    });
}

function checkAnswer(currentLevel){    
    if(userPattern[currentLevel] == gamePattern[currentLevel]){
        // console.log("success");
        if(currentLevel == gamePattern.length-1){
            setTimeout(() => {
                nextSequence();
                userPattern = [];
            }, 500);
        }
    }
    else {
        // console.log("failure");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        playMusic("wrong");
        $('h1').text('Game Over, Press Any Key to Restart');
        startOver();
    }
}

function startOver(){
    level = 1;
    gamePattern = [];
    userPattern = [];
    gameStart = false;
}

function newTile(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    buttonAnimation(randomChosenColor);
}

function playMusic(file){
    var audio = new Audio(`./sounds/${file}.mp3`);
    audio.play().catch((e) => {
      console.warn("Audio play failed", e);
    });
}

function buttonAnimation(color){
    var buttonElement = $(`#${color}`);
    buttonElement.addClass("pressed");
    setTimeout(function() {
        buttonElement.removeClass("pressed");
      }, 100);
    // $(`#${color}`).fadeOut(100).fadeIn(100);
    playMusic(color);
}

