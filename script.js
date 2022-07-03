// Selecting elements
let score0El = document.querySelector(`#score--0`)
let score1El = document.getElementById(`score--1`)
let current0El = document.getElementById(`current--0`)
let current1El = document.getElementById(`current--1`)
let player0El = document.querySelector(`.player--0`)
let player1El = document.querySelector(`.player--1`)


let diceEl = document.querySelector(`.dice`)
let btnNew = document.querySelector(`.btn--new`)
let btnRoll = document.querySelector(`.btn--roll`)
let btnHold = document.querySelector(`.btn--hold`)

// Starting Conditions
score0El.textContent=0
score1El.textContent=0
diceEl.classList.add(`hidden`)

const scores = [0, 0]
let currentScore = 0 
let activePlayer = 0

//rolling dice
function rollDice(){
    // 1. Generating a random dice roll
    let dice = Math.trunc(Math.random()*6)+1

    //2. Display dice
    diceEl.classList.remove(`hidden`)
    diceEl.src = `dice-${dice}.png`
    // 3. Check for roled 1:if true,switch to next dice
    if(dice!== 1){
        // Add dice to current score
        currentScore = currentScore + dice
        document.getElementById(`current--${activePlayer}`).textContent=currentScore
        

    }else{
        //Swich to next player
        document.getElementById(`current--${activePlayer}`).textContent=0
        currentScore=0 
        activePlayer= activePlayer===0?1:0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')

    }
}  

//Hold Button

function holdBtn(){
    //  1. Add current score to active player's score
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer]

    //  2. Check if score is ate least 100, Finish the game

    // Swich to the next player
}