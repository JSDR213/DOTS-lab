/*
 * DOTS: Level One
 *
 */

//VARIABLES
let score = 0
let ball = document.querySelector('.js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')


//EVENTLISTENER 
ball.addEventListener('click', function(){
    //ADD SCORE
    score += 20
    //DISPLAY SCORE
    scoreDisplay.innerText = score
    if (score === 100){
        levelWinner.style.opacity = 1
    }
    console.log(scoreDisplay.innerText)
})

