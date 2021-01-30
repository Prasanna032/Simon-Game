var buttonColours=["red","blue","green","yellow"]
var gamePattern=[]
var userClickedPattern=[]
var started = false
var level=0


$(document).keypress(function(){
    if(!started){
        $("h1").text("Level " + level);
        next()
        started=true}
})


$(".btn").click(function(){
    if(started){
    var userChosenColour=$(this).attr("id")

    userClickedPattern.push(userChosenColour)

    playSound(userChosenColour)
    animateColour(userChosenColour)

checkAnswer(userClickedPattern.length-1)}
})



function next(){
    level++
    userClickedPattern=[]
    $("h1").text("Level "+level)

    var randNumber=Math.floor(Math.random()*4)
    var randomChoosenColour =buttonColours[randNumber]
    gamePattern.push(randomChoosenColour)

    $("#"+randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColour)    
    
}


function checkAnswer(currentlevel){
    if(gamePattern[currentlevel]==userClickedPattern[currentlevel]){
        if(currentlevel==gamePattern.length-1){
            setTimeout(function(){
                next()},1000)
        }
    }
        else{
            playSound("wrong")
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over")
            },200)
            $("h1").text("Game over!,Press Any Key to Start")
            level=0
            gamePattern=[]
            started=false

        }
    }

    


function animateColour(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function(){
            $("#"+currentColour).removeClass("pressed")
        },100)   
}


function playSound(col){
    new Audio("sounds/"+col+".mp3").play()
}



