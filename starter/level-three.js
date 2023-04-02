/*
 * DOTS: Level Three
 *
 */

let score = 0
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')
let ballArray= document.querySelectorAll('ball, .js-ball')
let ballsArena= document.querySelectorAll('.js-ball')

console.log(ballsArena)

/*
let smallBall = document.querySelector('.js-ball').nextElementSibling.nextElementSibling
let bigBall = document.querySelector('.js-ball').nextElementSibling.nextElementSibling;
let mediumBall = document.querySelector('.js-ball').nextElementSibling;

console.log(smallBall)
console.log(bigBall)
console.log(mediumBall)
*/

// ballsArena.forEach((element, index) => {
//     element.setAttribute('data-increment', index)

// })

let forEachBall = ballsArena.forEach(element => console.log(element.getAttribute('data-increment')))

// for (let i = 0; i < ballsArena.length; i++) {
//     ballsArena[i].addEventListener("click",groupClick(i))
//  }

//console.log(ballArray)

function groupClick(){
    forEachBall.addEventListener('click', ()=>{
        score  += forEachBall.getAttribute('data-increment')
        score = scoreDisplay.innerText
        console.log('im working')
        if(score >= 100){
            levelWinner.style.opacity = 1
        }
    })
    console.log(scoreDisplay)
}


