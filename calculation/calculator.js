let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function toRadian() {
    if (displayValue.includes('deg')) {
        displayValue = displayValue.replace('deg', '* Math.PI / 180');
    } else {
        displayValue += '* Math.PI / 180';
    }
}

function calculate() {
    if (displayValue.includes('deg')) {
        toRadian();
    }

    try {
        displayValue = eval(displayValue).toFixed(2);
        document.getElementById('display').value = displayValue;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

