/*
 * DOTS: Level Two
 *
 */


let score = 0
//AddEventListener is taking ("input","select") objects 
//to store them in ballArray
let ballArray= document.querySelectorAll('ball, .js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')
 //console.log(ballArray)

 for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].addEventListener("click",groupClick(i))
 }

 function groupClick(i){

    return function() {
        score += 20
    scoreDisplay.innerText = score

    if (score >= 100){
        levelWinner.style.opacity = 1
    }
    console.log(scoreDisplay.innerText)
    }

 }



    



