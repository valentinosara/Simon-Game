const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
let level = 0;


$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
    var userChosenColour = this.getAttribute("id");
    userClickedPattern.push(userChosenColour);

    playSoundClicks(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(nextSequence, 1000) 
        }    
    }else{
        var wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber]
    gamePattern.push(randomChosenColor)
    console.log(gamePattern)
    flashAndSound(randomChosenColor)
    level++;
    $("h1").text("Level " + level) 
}

function playSoundClicks(name){
    switch (name) {
        case "green":
            var greenAudio = new Audio("sounds/green.mp3");
            greenAudio.play();
        break;
        case "red":
            var redAudio = new Audio("sounds/red.mp3");
            redAudio.play();
        break;
        case "yellow":
            var yellowAudio = new Audio("sounds/yellow.mp3");
            yellowAudio.play();
        break;
        case "blue":
            var blueAudio = new Audio("sounds/blue.mp3");
            blueAudio.play();
        break;
        default:
        break;
    }
}
function flashAndSound(color){
    $("#" + color).fadeOut(50).fadeIn(50);
    switch (color) {
        case "green":
            var greenAudio = new Audio("sounds/green.mp3");
            greenAudio.play();
        break;
        case "red":
            var redAudio = new Audio("sounds/red.mp3");
            redAudio.play();
        break;
        case "yellow":
            var yellowAudio = new Audio("sounds/yellow.mp3");
            yellowAudio.play();
        break;
        case "blue":
            var blueAudio = new Audio("sounds/blue.mp3");
            blueAudio.play();
        break;
        default:
            console.log("g")
        break;
    }
}


function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    }, 100)
}

function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
  }