//city buttons
cityArray = ["Birlin", "Paris", "Edinburgh", "Madrid", "Birmingham", "London"];
let todayWeather = document.querySelector("#today");
for (let index = 0; index < cityArray.length; index++) {
  let cityBtn = document.createElement("button");
  cityBtn.classList.add(".cityBtn");
  cityBtn.textContent = cityArray[index];

  document.querySelector(".input-group-append").appendChild(cityBtn);
}
//current location
let currentCity = "London"; //place holder

const currentLocation = fetch("http://ip-api.com/json/")
  .then((response) => response.json())
  .then(function (dataLocation) {
    console.log(dataLocation);
    currentCity = dataLocation.city;
    let now = dayjs().format("DD/M/YYYY");
    todayWeather.innerHTML = `<h2 id="todayHeader" class="mt-1 h3">${currentCity} (${now}) </div>`;
    console.log("the lat is" + dataLocation.lat);
    const currentWeather = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${dataLocation.lat}&lon=${dataLocation.lon}&APPID=884f5804f8f5b77cb5a48d872eb528b2&units=metric`
    )
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        //weather today
        let todayTemp = document.createElement("div");
        todayTemp.textContent = `Temp: ${data.list[0].main.temp} °C`;

        let todayWind = document.createElement("div");
        todayWind.textContent = `Wind: ${data.list[0].wind.speed} KPH`;

        let todayHumidity = document.createElement("div");
        todayHumidity.textContent = `Humidity: ${data.list[0].main.humidity}%`;

        todayWeather.appendChild(todayTemp);
        todayWeather.appendChild(todayWind);
        todayWeather.appendChild(todayHumidity);
        // weather forecast
        let forecastWeather = document.querySelector("#forecastHeader");
        forecastWeather.innerHTML = `<h5 id="todayHeader" class="mt-1 h5">5-Day Forecast:</div>`;

        //create cards

        //card container
        let cardContainer = document.querySelector("#forecast");
        //card element

        for (let i = 1; i < 6; i++) {
          let futureDate = document.createElement("h9");
          futureDate.textContent = `Date:`;

          let futureTemp = document.createElement("div");
          futureTemp.textContent = `Temp: ${data.list[i].main.temp} °C`;

          let futureWind = document.createElement("div");
          futureWind.textContent = `Wind: ${data.list[i].wind.speed} KPH`;

          let futureHumidity = document.createElement("div");
          futureHumidity.textContent = `Humidity: ${data.list[i].main.humidity}%`;

          let card = document.createElement("div");
          card.classList.add("card", "col-2");

          cardContainer.appendChild(card);

          card.appendChild(futureDate);
          card.appendChild(futureTemp);
          card.appendChild(futureWind);
          card.appendChild(futureHumidity);
        }
      });
  });
