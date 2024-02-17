function calculateWindChill() {
    var temp = document.getElementById("temperature").value;
    var windSpeed = document.getElementById("windSpeed").value;

    if (temp <= 50 && windSpeed > 3) {
        var windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
        let result = windChill.toFixed(2);
        return document.getElementById("windChill").innerHTML = result + "°F is the Wind Chill";
    }
    else if (temp == "" && windSpeed == "") {
        return document.getElementById("windChill").innerHTML = "Enter a temperature equal to or less than 50, and a wind speed greater than 3"
    }
    else {
        return document.getElementById("windChill").innerHTML = "Make sure your tempature is less than 50 and windspeed is greater than 3!";
    }
}
console.log(calculateWindChill());