//View (det som genererer HTML)
updateView()
function updateView() {

    document.getElementById('krokodillespill').innerHTML = /*HTML*/ `
    
    <h1>Krokodillespillet!</h1>
    <p>Skriv inn enten <, > eller = ettersom hva tallene viser!
    <br>Er første tall større enn andre tall, da må du skrive >
    <br>Er andre tall større enn første tall, da må du skrive <
    <br>Er tallene like store, må du skrive =</p>

    <div id="points">Points: ${points}</div>
    <br>
    <img src="ai-generated-9314391_640-removebg-preview.png" width="25%", height="25%">

    <div id="num1">${rng1}</div>
    <input id="input" type="text" style= 'width:10px;' onchange="saveInput(this.value)">
    <div id="num2">${rng2}</div>

    <button id="submitButton" onclick="submit()">Submit</button>
    <button id="resetButton" onclick="numberGen()">Get numbers</button>
    `
}