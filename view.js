//View (det som genererer HTML)
updateView()
function updateView() {

    document.getElementById('krokodillespill').innerHTML = /*HTML*/ `
    
    <div id="points">Points: ${points}</div>
    <br>
    <img src="ai-generated-9314391_640-removebg-preview.png" width="30%", height="30%">

    <div id="num1">${rng1}</div>
    <input id="input" type="text" style= 'width:10px;' onchange="saveInput(this.value)">
    <div id="num2">${rng2}</div>

    <button id="submitButton" class="big-button" onclick="submit()">Submit</button>
    <button id="resetButton" class="big-button" onclick="numberGen()">Reset</button>
    `
}