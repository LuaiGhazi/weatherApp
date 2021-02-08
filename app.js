const form = document.querySelector("#searchForm");
//CurrentDay
const currentWeather = document.querySelector('#currentWeather')
const currentWeatherDesc = document.querySelector('#currentWeatherDesc')
const feelsLike = document.querySelector('#feelsLike')
const humidity = document.querySelector('#humidity')
const pressure = document.querySelector('#pressure')
const averageTemp = document.querySelector('#averageTemp')
const tempMax = document.querySelector('#tempMax')
const tempMin = document.querySelector('#tempMin')
//DayOneForecast
const forecastOneWeather = document.querySelector('#forecastOneWeather')
const forecastOneWeatherDesc = document.querySelector('#forecastOneWeatherDesc')
const forecastOneFeelsLike = document.querySelector('#forecastOneFeelsLike')
const forecastOneHumidity = document.querySelector('#forecastOneHumidity')
const forecastOnePressure = document.querySelector('#forecastOnePressure')
const forecastOneAverageTemp = document.querySelector('#forecastOneAverageTemp')
const forecastOneTempMax = document.querySelector('#forecastOneTempMax')
const forecastOneTempMin = document.querySelector('#forecastOneTempMin')



form.addEventListener('submit', async function (e) {
    //Forms are set to refresh a page automatically after being submitted. 
    //This prevents our page from refreshing when the search input that 
    //is located in a form is submitted 
    e.preventDefault()
    //Stores the value in the input
    const searchTerm = form.elements.query.value;
    //Using axios for the get request
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=18893db06dc07b8725a3235643189f47&units=metric`)
    // console.log(res.data)
    // console.log(res.data.main.feels_like)
    //Today's Forecast 
    currentWeather.innerHTML = res.data.weather[0].main
    currentWeatherDesc.innerHTML = res.data.weather[0].description
    feelsLike.innerHTML = res.data.main.feels_like
    humidity.innerHTML = res.data.main.humidity
    pressure.innerHTML = res.data.main.pressure
    averageTemp.innerHTML = res.data.main.temp
    tempMax.innerHTML = res.data.main.temp_max
    tempMin.innerHTML = res.data.main.temp_min
    //Tomorrow's Forecast 
    const res_forecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=18893db06dc07b8725a3235643189f47&units=metric`)
    console.log(res_forecast.data)
    forecastOneWeather.innerHTML = res_forecast.data.list[3].weather[0].main
    forecastOneWeatherDesc.innerHTML = res_forecast.data.list[3].weather[0].description
    forecastOneFeelsLike.innerHTML = res_forecast.data.list[3].main.feels_like
    forecastOneHumidity.innerHTML = res_forecast.data.list[3].main.humidity
    forecastOnePressure.innerHTML = res_forecast.data.list[3].main.pressure
    forecastOneAverageTemp.innerHTML = res_forecast.data.list[3].main.temp
    forecastOneTempMax.innerHTML = res_forecast.data.list[3].main.temp_max
    forecastOneTempMin.innerHTML = res_forecast.data.list[3].main.temp_min
})

