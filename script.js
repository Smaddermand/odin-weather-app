// script.js

// 1 Get Weather info from API

async function getWeather (inputCity) {
    const encodedCity = encodeURIComponent(inputCity); // Encode city to insert in url
    const url = `https://api.weatherapi.com/v1/current.json?key=202bdcf7d3944bf8b9245837240703&q=${encodedCity}`; // url with city
    let response = await fetch(url); // await fetch url
    let weatherJson = await response.json(); // set response as json
    return weatherJson; //return
    
}

// function to process all JSON info from api and set as new object with needed information
function processWeatherData(weatherJson) { 
    const currentWeather = weatherJson.current;
    const temperature = currentWeather.temp_c;
    const condition = currentWeather.condition.text;
    const windSpeed = currentWeather.wind_kph;

    const processedWeatherData = {
        temperature,
        condition,
        windSpeed,
    }

    return processedWeatherData;
};

const searchCityWeather = document.getElementById("getWeather-button");
searchCityWeather.addEventListener("click", (event) => {
    event.preventDefault();
    const getCityElement = document.getElementById("inputCity");
    const getCity = getCityElement.value;
    getWeather(getCity).then(data => processWeatherData(data)).then(processedWeatherData => console.log(processedWeatherData)); //process weather data and display in log    

    /* 
    I need to output the information to the DOM - first get the div to append child
    Just start with temperature
    I should probably create a function that displays weather based on input.. and then call it
    */
    console.log(getCity);
    getWeather(getCity).then(data => processWeatherData(data)).then(processedWeatherData => displayWeather(processedWeatherData));
    
});

const displayWeather = (weatherData) => {
    console.log("Display Weather was called");

    const weatherDiv = document.getElementById("weather-output-div");
    weatherDiv.innerHTML = "";

    const tempElement = document.createElement("p");
    tempElement.textContent = `Temperate: ${weatherData.temperature} °C`;

    const conditionElement = document.createElement("p");
    conditionElement.textContent = `Condition: ${weatherData.condition}`;

    const windSpeedElement = document.createElement("p");
    windSpeedElement.textContent = `Wind Speed: ${weatherData.windSpeed} kph`;

    weatherDiv.appendChild(tempElement);
    weatherDiv.appendChild(conditionElement);
    weatherDiv.appendChild(windSpeedElement);



}

// let city = "aalborg"
// getWeather(city).then(data => console.log(data)); // display weahter info in log using .then as a promise is returned
// getWeather(city).then(data => processWeatherData(data)).then(processedWeatherData => console.log(processedWeatherData)); //process weather data and display in log

