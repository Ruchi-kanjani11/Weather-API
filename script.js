let apiKey = "91033e952b06712ca2ceb4a90b074872";
let button = document.getElementById("get-weather");

button.addEventListener("click", getWeather);

async function getWeather() {

    let city = document.getElementById("city").value;

    let url = "https://api.openweathermap.org/data/2.5/weather?q="
        + city +
        "&units=metric&appid=" + apiKey;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.getElementById("city-name").innerText = data.name;

    document.getElementById("temperature").innerText =
       Math.round(data.main.temp) + "°C";

    document.getElementById("description").innerText =
        "Weather: " + data.weather[0].main;

        let weatherType = data.weather[0].main;
let bg = document.getElementById("weather-bg");

if(weatherType === "Clear"){
    bg.style.background = "linear-gradient(135deg,#f7971e,#ffd200)";
}
else if(weatherType === "Clouds"){
    bg.style.background = "linear-gradient(135deg,#757f9a,#d7dde8)";
}
else if(weatherType === "Rain"){
    bg.style.background = "linear-gradient(135deg,#4b79a1,#283e51)";
}
else if(weatherType === "Snow"){
    bg.style.background = "linear-gradient(135deg,#e6dada,#274046)";
}
else if(weatherType === "Thunderstorm"){
    bg.style.background = "linear-gradient(135deg,#141e30,#243b55)";
}
else{
    bg.style.background = "linear-gradient(135deg,#3b82f6,#06b6d4)";
}
}
