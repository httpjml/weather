function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000) ;
    let iconElement = document.querySelector("#icon");
    


    cityElement.innerHTML = response.data.city
    timeElement.innerHTML = formatDate(date)
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}mph`;
    temperatureElement.innerHTML = Math.round(temperature);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
   
let minutes = date.getMinutes();
let hours = date.getHours();
let days = [
"Sunday", 
"Monday", 
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"];

let day = days[date.getDay()];

if (minutes < 10){
    minutes = `0${minutes}`;
}

    return `${day} ${hours}:${minutes}`;



}



function searchCity(city) {

    let apiKey = "f38e493t0d8cf873o54b6bb38aa6cc29";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`
  axios.get(apiUrl).then(refreshWeather)
}



function handleSearchSubmit (event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

  
    searchCity(searchInput.value);
}

function displayForecast() {
 

    let days = ["Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let forecastHtml = "";

    days.forEach (function(day){
        forecastHtml = 
        forecastHtml + 
        `
        <div class="weather-forecast-day">
            <div class="weather-forecast-date"> ${day} </div>
            <div class="weather-forecast-icon">🌤</div>
            <div class="weather-forecast-temperatures">
                <div class="weather-forecast-temperature"> 
                <strong>18°</strong>
             </div>
        <div class="weather-forecast-temperature"> 12° </div>
    </div>
</div>
   `;

    });
    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;

}

let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener ("submit", handleSearchSubmit);

searchCity("Philadelphia");

displayForecast();
