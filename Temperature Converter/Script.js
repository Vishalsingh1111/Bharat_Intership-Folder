function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;
    var celsius = (parseFloat(fahrenheitInput) - 32) * 5 / 9;
    document.getElementById("celsiusInput").value = celsius.toFixed(2);
}

function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsiusInput").value;
    var fahrenheit = (parseFloat(celsiusInput) * 9 / 5) + 32;
    document.getElementById("fahrenheitInput").value = fahrenheit.toFixed(2);
}

// Update the current year in the footer
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
