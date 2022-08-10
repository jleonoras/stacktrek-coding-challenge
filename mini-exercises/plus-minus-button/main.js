function displayDafaultValue() {
    let x = 0
    return x;
}

let defaultValue = displayDafaultValue();
document.getElementById("output-area").innerHTML = defaultValue;

function decreaseValue() {
    defaultValue = defaultValue - 1;
    document.getElementById("output-area").innerHTML = defaultValue;
}

function increaseValue() {
    defaultValue = defaultValue + 1;
    document.getElementById("output-area").innerHTML = defaultValue;
}

function resetValue() {
    defaultValue = 0;
    document.getElementById("output-area").innerHTML = defaultValue;
}

function displayLabel(sign) {
    return sign
}

const decreaseSign = displayLabel("-")
const increaseSign = displayLabel("+")
const resetLabel = displayLabel("Reset")

document.getElementById("decreaseLabel").innerHTML = decreaseSign;
document.getElementById("increaseLabel").innerHTML = increaseSign;
document.getElementById("resetButton").innerHTML = resetLabel;