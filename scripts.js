document.querySelector('.search .search-city button').addEventListener('click', function(){
    var city = document.querySelector('.search-city .city').value;

    getWeather(city);

    window.scrollTo(0, 0);
});

document.querySelector('.search-city .city').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        var city = document.querySelector('.search-city .city').value;
        getWeather(city);
        window.scrollTo(0, 0);
    }
});

function getWeather(city) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&id=524901&APPID=8c30920177c5d4e3ef4f39a9764d9b99&units=metric&lang=pl')
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJson) {
        let data = JSON.stringify;
        let weatherDescription = data(responseJson.weather[0].description).replace(/"/g, '');
        let currentTemperature = data(responseJson.main.temp);
        let currentPressure = data(responseJson.main.pressure);
        let currentHumidity = data(responseJson.main.humidity);
        let currentTemp_min = data(responseJson.main.temp_min);
        let currentTemp_max = data(responseJson.main.temp_max);
        let currentWind = data(responseJson.wind.speed);
        let currentCloudy = data(responseJson.clouds.all);
    
        document.querySelector('.weather-status .headline').textContent = weatherDescription;
        document.querySelector('.weather-status .weather-info .main-headline .value').textContent = currentTemperature;
        document.querySelector('.parameters .pressure .value').textContent = currentPressure;
        document.querySelector('.parameters .humidity .value').textContent = currentHumidity;
        document.querySelector('.parameters .wind .value').textContent = currentWind;
        document.querySelector('.parameters .cloudy .value').textContent = currentCloudy;
        document.querySelector('.weather .temperature .min-temp .value').textContent = currentTemp_min;
        document.querySelector('.weather .temperature .max-temp .value').textContent = currentTemp_max;
      })
      .catch(function() {
        document.querySelector('.weather-status .headline').textContent = 'Brak danych!';
        document.querySelector('.weather-status .weather-info .main-headline .value').textContent = '';
        document.querySelector('.parameters .pressure .value').textContent = '';
        document.querySelector('.parameters .humidity .value').textContent = '';
        document.querySelector('.parameters .wind .value').textContent = '';
        document.querySelector('.parameters .cloudy .value').textContent = '';
        document.querySelector('.weather .temperature .min-temp .value').textContent = '';
        document.querySelector('.weather .temperature .max-temp .value').textContent = '';
    });
}
