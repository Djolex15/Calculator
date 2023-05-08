let calcDisplay = document.getElementById("calc-display");
let result = 0;
let prvaNulaBool = false;

function updateDisplay(num) {
    if(calcDisplay.textContent == "Unesi broj")
    {
        calcDisplay.textContent = "";
    }

    if (num == '√') {
        calcDisplay.textContent = Math.sqrt(parseFloat(calcDisplay.textContent));
    } else {
        calcDisplay.textContent += num;
    }
}

function calculate() {
    let textDisplay = calcDisplay.textContent;
    textDisplay = textDisplay.replace('√', 'Math.sqrt');
    textDisplay = textDisplay.replace('^', '**');
    calcDisplay.textContent = eval(textDisplay);
}

function clearDisplay() {
    calcDisplay.textContent = "Unesi broj";
}
