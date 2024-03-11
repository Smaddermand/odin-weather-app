

// https://api.weatherapi.com/v1/current.json?key=202bdcf7d3944bf8b9245837240703&q=london



// 1 Get Weather info from API

async function getWeather (inputCity) {
    const encodedCity = encodeURIComponent(inputCity); // Encode city to insert in url
    const url = `https://api.weatherapi.com/v1/current.json?key=202bdcf7d3944bf8b9245837240703&q=${encodedCity}`; // url with city
    let response = await fetch(url); // await fetch url
    let weatherJson = await response.json(); // set response as json
    return weatherJson; //return
    
}

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



let city = "aalborg"
getWeather(city).then(data => console.log(data)); // display weahter info in log using .then as a promise is returned
getWeather(city).then(data => processWeatherData(data)).then(processedWeatherData => console.log(processedWeatherData)); //process weather data and display in log







// 2 Get city from user input

