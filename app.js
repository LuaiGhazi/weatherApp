const forecastCardsElement = document.querySelector("#forecastCards")
const form = document.querySelector("#searchForm");

//CurrentDay
const currentWeather = document.querySelector('#currentWeather')
const currentWeatherDesc = document.querySelector('#currentWeatherDesc')
const currentDayImg = document.querySelector('#currentDayImg')
const currentFeelsLike = document.querySelector('#feelsLike')
const currentHumidity = document.querySelector('#humidity')
const currentPressure = document.querySelector('#pressure')
const currentAverageTemp = document.querySelector('#averageTemp')
const currentTempMax = document.querySelector('#tempMax')
const currentTempMin = document.querySelector('#tempMin')
const dayZero = document.querySelector('#dayZero')



let forecast_days = ['forecastOne', 'forecastTwo', 'forecastThree', 'forecastFour', 'forecastFive']



function createWeatherCards() {
    forecast_days.forEach((forecastDay) => {
        //Create the column div 
        forecastCardsElement.innerHTML += `<div class="col"></div>`;
        const col = document.querySelector(".col:last-child");
        col.innerHTML += `<div class="card h-100">
        <div class="card-header">
            <span id='${forecastDay}Day'> </span>
        </div>
        <img src="imgs/clear.jpg" class="card-img-top" id='${forecastDay}Img' alt="...">
        <div class="card-body">
            <h5 class="card-title" id='${forecastDay}Weather'> </h5>
            <h5 class="card-title"><span id='${forecastDay}AverageTemp'></span><span>&#8451;</span></h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <p><b>Description</b></p>
                    <span id='${forecastDay}WeatherDesc'> </span>
                </li>
                <li class="list-group-item">
                    <p><b>Feels Like</b></p>
                    <span id='${forecastDay}FeelsLike'> </span>
                    <span>&#8451;</span>
                </li>
                <li class="list-group-item">
                    <p><b>Temp Max</b></p>
                    <span id='${forecastDay}TempMax'> </span>
                    <span>&#8451;</span>
                </li>

                <li class="list-group-item">
                    <p><b>Temp Min </b></p>
                    <span id='${forecastDay}TempMin'> </span>
                    <span>&#8451;</span>
                </li>

                <li class="list-group-item">
                    <p><b>Humidity</b></p>
                    <span id='${forecastDay}Humidity'> </span>
                    <span>%</span>
                </li>

                <li class="list-group-item">
                    <p><b>Pressure</b></p> <span id='${forecastDay}Pressure'> </span>
                    <span>Pa</span>
                </li>
            </ul>
        </div>
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>`
    });
}

createWeatherCards()

//TitleCase
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

//Date
function dayofWeek(date) {
    let gsDayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    d = new Date(date)
    dayName = gsDayNames[d.getDay()]
    return dayName
}

//Weather Info 
form.addEventListener('submit', async function (e) {
    //Forms are set to refresh a page automatically after being submitted. 
    //This prevents our page from refreshing when the search input that 
    //is located in a form is submitted 
    e.preventDefault()
    //Stores the value in the input
    const searchTerm = form.elements.query.value;
    //Using axios for the get request
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=18893db06dc07b8725a3235643189f47&units=metric`)
    const res_forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=18893db06dc07b8725a3235643189f47&units=metric`)

    //Today's Forecast 
    currentWeather.innerHTML = res.data.weather[0].main
    currentWeatherDesc.innerHTML = toTitleCase(res.data.weather[0].description)
    // console.log(res.data)
    // console.log(res_forecast.data)
    // console.log(res_forecast.data.list[0].dt_txt)
    dayZero.innerHTML = dayofWeek(res_forecast.data.list[0].dt_txt.substring(0, 10))
    if (currentWeather.innerHTML === 'Clouds') {
        currentDayImg.src = 'imgs/cloudy.jpg'
    } else if (currentWeather.innerHTML === 'Clear') {
        currentDayImg.src = 'imgs/clear.jpg'
    } else if (currentWeather.innerHTML === 'Rain') {
        currentDayImg.src = 'imgs/rain.png'
    } else {
        currentDayImg.src = 'imgs/snow.jpg'
    }
    feelsLike.innerHTML = Math.round(res.data.main.feels_like)
    humidity.innerHTML = Math.round(res.data.main.humidity)
    pressure.innerHTML = res.data.main.pressure
    averageTemp.innerHTML = Math.round(res.data.main.temp)
    tempMax.innerHTML = Math.round(res.data.main.temp_max)
    tempMin.innerHTML = Math.round(res.data.main.temp_min)

    //Tomorrow's Forecast 
    let i = 3
    forecast_days.forEach((forecastDay) => {
        const weather = document.querySelector(`#${forecastDay}Weather`)
        const weatherDesc = document.querySelector(`#${forecastDay}WeatherDesc`)
        const day = document.querySelector(`#${forecastDay}Day`)
        const img = document.querySelector(`#${forecastDay}Img`)
        const feelsLike = document.querySelector(`#${forecastDay}FeelsLike`)
        const humidity = document.querySelector(`#${forecastDay}Humidity`)
        const pressure = document.querySelector(`#${forecastDay}Pressure`)
        const averageTemp = document.querySelector(`#${forecastDay}AverageTemp`)
        const tempMax = document.querySelector(`#${forecastDay}TempMax`)
        const tempMin = document.querySelector(`#${forecastDay}TempMin`)
        weather.innerHTML = res_forecast.data.list[i].weather[0].main
        weatherDesc.innerHTML = toTitleCase(res_forecast.data.list[i].weather[0].description)
        day.innerHTML = dayofWeek(res_forecast.data.list[i].dt_txt.substring(0, 10))
        if (weather.innerHTML === 'Clouds') {
            img.src = 'imgs/cloudy.jpg'
        } else if (weather.innerHTML === 'Clear') {
            img.src = 'imgs/clear.jpg'
        } else if (weather.innerHTML === 'Rain') {
            img.src = 'imgs/rain.png'
        } else {
            img.src = 'imgs/snow.jpg'
        }
        feelsLike.innerHTML = Math.round(res_forecast.data.list[i].main.feels_like)
        humidity.innerHTML = Math.round(res_forecast.data.list[i].main.humidity)
        pressure.innerHTML = res_forecast.data.list[i].main.pressure
        averageTemp.innerHTML = Math.round(res_forecast.data.list[i].main.temp)
        tempMax.innerHTML = Math.round(res_forecast.data.list[i].main.temp_max)
        tempMin.innerHTML = Math.round(res_forecast.data.list[i].main.temp_min)
        i += 8
    })
})