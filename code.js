var click = 0

function clickButton() { //alerts a msg about how many times you've clicked the button
    click++
    alert("you've clicked the button " + click + " times!");
}
  
var color = 0

function colorChange() { //changes color of the clickedHeader-header
    if (color == "0") {
        (document.getElementById("clickedHeader").style.color = "maroon")
        color = 1
    } else {
        (document.getElementById("clickedHeader").style.color = "aliceblue")
        color = 0
    }
}

var font = 0

function sizeChange() { //chenges size of the clickedHeader-header
if (font == "0") {
    document.getElementById("clickedHeader").style.fontSize = "3rem"
    font = 1
} else {
    (document.getElementById("clickedHeader").style.fontSize = "2rem")
    font = 0
    }    
}

nrClicks = 0

function buttonClick() { //alerts a msg that the button doesn't do anything
    if (nrClicks <= 4) {
        alert("Den här knappen gör ingenting.")
        nrClicks++
    } else {
        alert("Jag sa att den inte gör något, sluta klicka!")
    }

}