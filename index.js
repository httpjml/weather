function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");

console.log (response.data.condition.description)

    cityElement.innerHTML = response.data.city
    descriptionElement.innerHTML = response.data.condition.description;
    temperatureElement.innerHTML = Math.round(temperature);
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

let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener ("submit", handleSearchSubmit);

searchCity("Philadelphia")