let homeScore = 0
let guestScore = 0
const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

function addPoints(team, points){
    if (team == "home") {
        homeScore += points
        homeScoreEl.textContent = homeScore
    } else {
        guestScore += points
        guestScoreEl.textContent = guestScore
    }
    checkWinner();
    
}

function newGame(){
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    checkWinner()
}

function checkWinner() {
    if (homeScore > guestScore){
        homeScoreEl.className = "score-screen winning"
        guestScoreEl.className = "score-screen"        
    } else if (homeScore < guestScore){
        homeScoreEl.className = "score-screen"
        guestScoreEl.className = "score-screen winning"
    } else {
        homeScoreEl.className = "score-screen"
        guestScoreEl.className = "score-screen"
    }
}

function tabPressed(e) {
    if (e.keyCode === 9) {
        document.body.classList.add('focus-outline')
        window.removeEventListener('keydown', tabPressed)
        window.addEventListener('click', mouseClicked)
    }
}

function mouseClicked() {
    document.body.classList.remove('focus-outline')
    window.removeEventListener('click', mouseClicked)
}

window.addEventListener('keydown', tabPressed)