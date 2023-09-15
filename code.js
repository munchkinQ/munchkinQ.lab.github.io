var click = 0

function clickButton() {
    click++
    alert("you've clicked the button " + click + " times!");
}
  
var color = 0

function colorChange() {
    if (color == "0") {
        document.getElementById("clickedHeader").style.color = "darkmagenta"
        color = 1
    } else {
        (document.getElementById("clickedHeader").style.color = "aliceblue")
        color = 0
    }
}

var font = 0

function sizeChange() {
if (font == "0") {
    document.getElementById("clickedHeader").style.fontSize = "3rem"
    font = 1
} else {
    (document.getElementById("clickedHeader").style.fontSize = "2rem")
    font = 0
    }    
}

nrClicks = 0

function buttonClick() {
    if (nrClicks <= 4) {
        alert("Den här knappen gör ingenting.")
        nrClicks++
    } else {
        alert("Jag sa att den inte gör något, sluta klicka!")
    }

}