
let bioSec = document.getElementById('bio')

let toggleBio = false

let aboutMeClicked = document.getElementById('aboutMe')

// toggle paragraph section on mouse over of "About Me"

function over(e){
    bioSec.classList.add("show")
}

function out(e){
    if (toggleBio === false){
        bioSec.classList.remove("show")
    }
}

function clickBio(){
    if (toggleBio === false){
        bioSec.classList.add("show")
        aboutMeClicked.classList.add('about-me-clicked')
        toggleBio = true
    } else if (toggleBio === true){
        bioSec.classList.remove("show")
        aboutMeClicked.classList.remove('about-me-clicked')
        toggleBio = false
    }
}

// toggle display of latest projects on mouseover

let cardOne = document.getElementById('cardOne')

let cardTwo = document.getElementById('cardTwo')

let cardThree = document.getElementById('cardThree')

let togglePro = false

let latestProjectsClicked = document.getElementById('LateestProjects')

function overPro (e) {
    cardOne.classList.add("card-show")
    cardTwo.classList.add("card-show")
    cardThree.classList.add("card-show")
}

function outPro (e) {
    if(togglePro === false){
        cardOne.classList.remove("card-show")
        cardTwo.classList.remove("card-show")
        cardThree.classList.remove("card-show")
    }
}

function clickPro(){
    if(togglePro === false){
        cardOne.classList.add("card-show")
        cardTwo.classList.add("card-show")
        cardThree.classList.add("card-show")
        latestProjectsClicked.classList.add('latest-projects-clicked')
        togglePro = true


    } else if (togglePro === true){
        cardOne.classList.remove("card-show")
        cardTwo.classList.remove("card-show")
        cardThree.classList.remove("card-show")
        latestProjectsClicked.classList.remove('latest-projects-clicked')
        togglePro = false
    }
}