// TODO: create all the global variables that wil be used in the code.
let cityBtn = document.querySelector("#search-form");
let todayWeather = document.querySelector("#today");

// TODO: create a function that will capture the value of the form
cityBtn.addEventListener("submit", function (event) {
  event.preventDefault();
  let currentCity = document.querySelector("#search-input").value;
  currentCity = currentCity.charAt(0).toUpperCase() + currentCity.slice(1);
  let now = dayjs().format("DD/M/YYYY");
  todayWeather.innerHTML = `<h2 id="todayHeader" class="mt-1 h3">${currentCity} (${now}) </div>`;

  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=1&&APPID=884f5804f8f5b77cb5a48d872eb528b2`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let lon = data[0].lon;
      let lat = data[0].lat;

      console.log(lat, lon);
      runApi(lat, lon);
    });
});

// when the user types in a city and hits search the application needs to run the api. and then display the weather information on the page.

// TODO: create a function that will run the current city weather and display the content to the page
function currentWeather(data) {
  let todayTemp = document.createElement("div");
  todayTemp.textContent = `Temp: ${data.list[0].main.temp} °C`;

  let todayWind = document.createElement("div");
  todayWind.textContent = `Wind: ${data.list[0].wind.speed} KPH`;

  let todayHumidity = document.createElement("div");
  todayHumidity.textContent = `Humidity: ${data.list[0].main.humidity}%`;

  todayWeather.appendChild(todayTemp);
  todayWeather.appendChild(todayWind);
  todayWeather.appendChild(todayHumidity);
}

// weather forecast
function forecastWeather(data) {
  // weather forecast
  let forecastWeather = document.querySelector("#forecastHeader");
  forecastWeather.innerHTML = `<h5 id="todayHeader" class="mt-1 h5">5-Day Forecast:</div>`;

  //create cards

  //card container
  let cardContainer = document.querySelector("#forecast");
  cardContainer.innerHTML = "";
  //card element

  for (let i = 1; i < 6; i++) {
    let futureDate = document.createElement("h9");
    futureDate.textContent = `${dayjs().add(i, "day").format("DD/M/YYYY")}`;

    let futureTemp = document.createElement("div");
    futureTemp.textContent = `Temp: ${data.list[i].main.temp} °C`;

    let futureWind = document.createElement("div");
    futureWind.textContent = `Wind: ${data.list[i].wind.speed} KPH`;

    let futureHumidity = document.createElement("div");
    futureHumidity.textContent = `Humidity: ${data.list[i].main.humidity}%`;

    let card = document.createElement("div");
    card.classList.add("card", "col-2", "p-2", "mx-2");

    cardContainer.appendChild(card);

    card.appendChild(futureDate);
    card.appendChild(futureTemp);
    card.appendChild(futureWind);
    card.appendChild(futureHumidity);
  }
}

// TODO: create a function that will run our fetch to obtain the LAT AND LON
function runApi(lat, lon) {
  // run the weather fetch
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=884f5804f8f5b77cb5a48d872eb528b2&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      currentWeather(data);
      forecastWeather(data);
      console.log(data);
    });
}
// TODO: create a function that will run the forecast weather and display the content to the page

// TODO: create a function that check local storage for the previouse serach history and create buttons based on the data stored. **DONT FORGET TO ADD EVENT LISTNER TO ALL THE BUTTONS

// TODO: Add an event listener that will run the application using the form

// const currentLocation = fetch("http://ip-api.com/json/")
//   .then((response) => response.json())
//   .then(function (dataLocation) {
//     console.log(dataLocation);
//     currentCity = dataLocation.city;
//     let now = dayjs().format("DD/M/YYYY");
//     todayWeather.innerHTML = `<h2 id="todayHeader" class="mt-1 h3">${currentCity} (${now}) </div>`;
//     console.log("the lat is" + dataLocation.lat);

//       .then((response) => response.json())
//       .then(function (data) {
//         console.log(data);
//         //weather today
//         let todayTemp = document.createElement("div");
//         todayTemp.textContent = `Temp: ${data.list[0].main.temp} °C`;

//         let todayWind = document.createElement("div");
//         todayWind.textContent = `Wind: ${data.list[0].wind.speed} KPH`;

//         let todayHumidity = document.createElement("div");
//         todayHumidity.textContent = `Humidity: ${data.list[0].main.humidity}%`;

//         todayWeather.appendChild(todayTemp);
//         todayWeather.appendChild(todayWind);
//         todayWeather.appendChild(todayHumidity);
//         // weather forecast
//         let forecastWeather = document.querySelector("#forecastHeader");
//         forecastWeather.innerHTML = `<h5 id="todayHeader" class="mt-1 h5">5-Day Forecast:</div>`;

//         //create cards

//         //card container
//         let cardContainer = document.querySelector("#forecast");
//         //card element

//         for (let i = 1; i < 6; i++) {
//           let futureDate = document.createElement("h6");
//           futureDate.textContent = `${dayjs()
//             .add(i, "day")
//             .format("DD/M/YYYY")}`;

//           let futureTemp = document.createElement("div");
//           futureTemp.textContent = `Temp: ${data.list[i].main.temp} °C`;

//           let futureWind = document.createElement("div");
//           futureWind.textContent = `Wind: ${data.list[i].wind.speed} KPH`;

//           let futureHumidity = document.createElement("div");
//           futureHumidity.textContent = `Humidity: ${data.list[i].main.humidity}%`;

//           let card = document.createElement("div");
//           card.classList.add("card", "col-2", "p-2", "mx-3");

//           cardContainer.appendChild(card);

//           card.appendChild(futureDate);
//           card.appendChild(futureTemp);
//           card.appendChild(futureWind);
//           card.appendChild(futureHumidity);
//         }
//       });
//   });
