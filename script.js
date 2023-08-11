//city buttons
cityArray = ["Birlin", "Paris", "Edinburgh", "Madrid", "Birmingham", "London"];
let todayWeather = document.querySelector("#today");
for (let index = 0; index < cityArray.length; index++) {
  let cityBtn = document.createElement("button");
  cityBtn.classList.add(".cityBtn");
  cityBtn.textContent = cityArray[index];

  document.querySelector(".input-group-append").appendChild(cityBtn);
}

//weather today
let currentCity = "London"; //place holder
let now = dayjs().format("DD/M/YYYY");
todayWeather.innerHTML = `<h2 id="todayHeader" class="mt-1 h3">${currentCity} (${now}) </div>`;

let todayTemp = document.createElement("div");
todayTemp.textContent = `Temp:`;

let todayWind = document.createElement("div");
todayWind.textContent = `Wind:`;

let todayHumidity = document.createElement("div");
todayHumidity.textContent = `Humidity:`;

todayWeather.appendChild(todayTemp);
todayWeather.appendChild(todayWind);
todayWeather.appendChild(todayHumidity);

// weather forecast
let forecastWeather = document.querySelector("#forecast");
forecastWeather.innerHTML = `<h5 id="todayHeader" class="mt-1 h5">5-Day Forecast:</div>`;
