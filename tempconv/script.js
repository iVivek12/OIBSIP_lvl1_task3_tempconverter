function performConversion() {
    const tempValue = document.getElementById('tempInput').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const outputDiv = document.getElementById('output');

    if (tempValue === '') {
        outputDiv.textContent ='Enter a temperature for conversion.';
        return;
    }

    if (isNaN(tempValue)) {
        outputDiv.textContent = 'Please enter a valid value';
        return;
    }

    const temp = parseFloat(tempValue);
    let convertedTemperature;

    if (fromUnit === toUnit) {
        convertedTemperature = temp;
    } else {
        let tempInC;

        switch (fromUnit) {
            case 'Celsius':
                tempInC = temp;
                break;
            case 'Fahrenheit':
                tempInC = (temp - 32) * 5 / 9;
                break;
            case 'Kelvin':
                tempInC = temp - 273.15;
                break;
        }

        switch (toUnit) {
            case 'Celsius':
                convertedTemperature = tempInC;
                break;
            case 'Fahrenheit':
                convertedTemperature = (tempInC * 9 / 5) + 32;
                break;
            case 'Kelvin':
                convertedTemperature = tempInC + 273.15;
                break;
        }
    }

    outputDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}
