// Footer Content
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Wind Chill Calculator
function calculateWindChill(temp, windSpeed, unit = 'metric') {
    return (unit === 'metric')
        ? 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
        : 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
}

// DOM Update
const temp = parseFloat(document.getElementById('temp').textContent);
const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
const windChillElement = document.getElementById('wind-chill');

if ((temp <= 10 && windSpeed > 4.8) || (temp <= 50 && windSpeed > 3)) {
    const unit = (temp <= 10) ? 'metric' : 'imperial';
    const windChill = calculateWindChill(temp, windSpeed, unit);
    windChillElement.textContent = `${windChill.toFixed(1)}°${unit === 'metric' ? 'C' : 'F'}`;
} else {
    windChillElement.textContent = "N/A";
}