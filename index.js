const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', function() {
  const temperature = parseFloat(temperatureInput.value);
  const selectedUnit = unitSelect.value;
  let convertedValue;

  if (selectedUnit === 'celsius') {
    convertedValue = convertFahrenheitToCelsius(temperature);
  } else if (selectedUnit === 'fahrenheit') {
    convertedValue = convertCelsiusToFahrenheit(temperature);
  } else if (selectedUnit === 'kelvin') {
    convertedValue = convertCelsiusToKelvin(temperature);
  }

  resultDiv.textContent = `${temperature}°${selectedUnit} is equal to ${convertedValue.toFixed(2)}° in the selected unit`;
});

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function convertCelsiusToKelvin(celsius) {
  return celsius + 273.15;
}
