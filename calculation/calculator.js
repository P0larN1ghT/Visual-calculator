let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        // 使用正则表达式替换常见数学函数名称
        displayValue = displayValue.replace(/sin/g, 'Math.sin');
        displayValue = displayValue.replace(/cos/g, 'Math.cos');
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
