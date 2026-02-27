//Controller (de tingene som skal skje i bakgrunnen)

//Henter det brukeren skriver inn
function saveInput(input){
correctAnswer = input
}

//Nummergenerering
function numberGen() {
    generateNum()
}

function generateNum() {
    rng1 = generateRandomNum()
    rng2 = generateRandomNum()
    document.getElementById('num1').innerHTML = rng1
    document.getElementById('num2').innerHTML = rng2
}

function generateRandomNum() {
    return Math.floor(Math.random() * 10 + 1);
}

//Utregning
function submit() {
    if (rng1 > rng2 && correctAnswer == ">") {
        points++
    }
    else if (rng1 < rng2 && correctAnswer == "<") {
        points++
    }
    else if (rng1 == rng2 && correctAnswer == "=") {
        points++
    }
    else {
        points--
    }
    updateView()
}