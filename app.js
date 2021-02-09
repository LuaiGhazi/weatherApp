const form = document.querySelector("#searchForm");
//CurrentDay
const currentWeather = document.querySelector('#currentWeather')
const currentWeatherDesc = document.querySelector('#currentWeatherDesc')
const currentDayImg = document.querySelector('#currentDayImg')
const feelsLike = document.querySelector('#feelsLike')
const humidity = document.querySelector('#humidity')
const pressure = document.querySelector('#pressure')
const averageTemp = document.querySelector('#averageTemp')
const tempMax = document.querySelector('#tempMax')
const tempMin = document.querySelector('#tempMin')
//DayOneForecast
const forecastOneWeather = document.querySelector('#forecastOneWeather')
const forecastOneWeatherDesc = document.querySelector('#forecastOneWeatherDesc')
const forecastOneImg = document.querySelector('#forecastOneImg')
const forecastOneFeelsLike = document.querySelector('#forecastOneFeelsLike')
const forecastOneHumidity = document.querySelector('#forecastOneHumidity')
const forecastOnePressure = document.querySelector('#forecastOnePressure')
const forecastOneAverageTemp = document.querySelector('#forecastOneAverageTemp')
const forecastOneTempMax = document.querySelector('#forecastOneTempMax')
const forecastOneTempMin = document.querySelector('#forecastOneTempMin')
//DayTwoForecast
const forecastTwoWeather = document.querySelector('#forecastTwoWeather')
const forecastTwoWeatherDesc = document.querySelector('#forecastTwoWeatherDesc')
const forecastTwoImg = document.querySelector('#forecastTwoImg')
const forecastTwoFeelsLike = document.querySelector('#forecastTwoFeelsLike')
const forecastTwoHumidity = document.querySelector('#forecastTwoHumidity')
const forecastTwoPressure = document.querySelector('#forecastTwoPressure')
const forecastTwoAverageTemp = document.querySelector('#forecastTwoAverageTemp')
const forecastTwoTempMax = document.querySelector('#forecastTwoTempMax')
const forecastTwoTempMin = document.querySelector('#forecastTwoTempMin')
//DayThreeForecast
const forecastThreeWeather = document.querySelector('#forecastThreeWeather')
const forecastThreeWeatherDesc = document.querySelector('#forecastThreeWeatherDesc')
const forecastThreeImg = document.querySelector('#forecastThreeImg')
const forecastThreeFeelsLike = document.querySelector('#forecastThreeFeelsLike')
const forecastThreeHumidity = document.querySelector('#forecastThreeHumidity')
const forecastThreePressure = document.querySelector('#forecastThreePressure')
const forecastThreeAverageTemp = document.querySelector('#forecastThreeAverageTemp')
const forecastThreeTempMax = document.querySelector('#forecastThreeTempMax')
const forecastThreeTempMin = document.querySelector('#forecastThreeTempMin')
//DayFourForecast
const forecastFourWeather = document.querySelector('#forecastFourWeather')
const forecastFourWeatherDesc = document.querySelector('#forecastFourWeatherDesc')
const forecastFourImg = document.querySelector('#forecastFourImg')
const forecastFourFeelsLike = document.querySelector('#forecastFourFeelsLike')
const forecastFourHumidity = document.querySelector('#forecastFourHumidity')
const forecastFourPressure = document.querySelector('#forecastFourPressure')
const forecastFourAverageTemp = document.querySelector('#forecastFourAverageTemp')
const forecastFourTempMax = document.querySelector('#forecastFourTempMax')
const forecastFourTempMin = document.querySelector('#forecastFourTempMin')
//DayFiveForecast
const forecastFiveWeather = document.querySelector('#forecastFiveWeather')
const forecastFiveWeatherDesc = document.querySelector('#forecastFiveWeatherDesc')
const forecastFiveImg = document.querySelector('#forecastFiveImg')
const forecastFiveFeelsLike = document.querySelector('#forecastFiveFeelsLike')
const forecastFiveHumidity = document.querySelector('#forecastFiveHumidity')
const forecastFivePressure = document.querySelector('#forecastFivePressure')
const forecastFiveAverageTemp = document.querySelector('#forecastFiveAverageTemp')
const forecastFiveTempMax = document.querySelector('#forecastFiveTempMax')
const forecastFiveTempMin = document.querySelector('#forecastFiveTempMin')

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};


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
    console.log(currentWeather.innerHTML)
    if (currentWeather.innerHTML === 'Clouds') {
        currentDayImg.src = 'imgs/cloudy.jpg'
    } else if (currentWeather.innerHTML === 'Clear') {
        currentDayImg.src = 'imgs/clear.jpg'
    } else {
        currentDayImg.src = 'imgs/snow.jpg'
    }
    feelsLike.innerHTML = res.data.main.feels_like
    humidity.innerHTML = res.data.main.humidity
    pressure.innerHTML = res.data.main.pressure
    averageTemp.innerHTML = res.data.main.temp
    tempMax.innerHTML = res.data.main.temp_max
    tempMin.innerHTML = res.data.main.temp_min
    //Tomorrow's Forecast 
    const res_forecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=18893db06dc07b8725a3235643189f47&units=metric`)
    console.log(res_forecast.data)
    // let date = new Date(res_forecast.data.list[3].dt_text)
    // console.log(date)
    // day.innerHTML = days[now.getDay() + 1]
    // console.log(days[now.getDay()])
    forecastOneWeather.innerHTML = res_forecast.data.list[3].weather[0].main
    forecastOneWeatherDesc.innerHTML = res_forecast.data.list[3].weather[0].description
    if (forecastOneWeather.innerHTML === 'Clouds') {
        forecastOneImg.src = 'imgs/cloudy.jpg'
    } else if (forecastOneWeather.innerHTML === 'Clear') {
        forecastOneImg.src = 'imgs/clear.jpg'
    } else {
        forecastOneImg.src = 'imgs/snow.jpg'
    }
    forecastOneFeelsLike.innerHTML = res_forecast.data.list[3].main.feels_like
    forecastOneHumidity.innerHTML = res_forecast.data.list[3].main.humidity
    forecastOnePressure.innerHTML = res_forecast.data.list[3].main.pressure
    forecastOneAverageTemp.innerHTML = res_forecast.data.list[3].main.temp
    forecastOneTempMax.innerHTML = res_forecast.data.list[3].main.temp_max
    forecastOneTempMin.innerHTML = res_forecast.data.list[3].main.temp_min
    //Day Two Forecast 
    forecastTwoWeather.innerHTML = res_forecast.data.list[11].weather[0].main
    forecastTwoWeatherDesc.innerHTML = res_forecast.data.list[11].weather[0].description
    console.log(forecastTwoWeather.innerHTML)
    if (forecastTwoWeather.innerHTML === 'Clouds') {
        forecastTwoImg.src = 'imgs/cloudy.jpg'
    } else if (forecastTwoWeather.innerHTML === 'Clear') {
        forecastTwoImg.src = 'imgs/clear.jpg'
    } else {
        forecastTwoImg.src = 'imgs/snow.jpg'
    }
    forecastTwoFeelsLike.innerHTML = res_forecast.data.list[11].main.feels_like
    forecastTwoHumidity.innerHTML = res_forecast.data.list[11].main.humidity
    forecastTwoPressure.innerHTML = res_forecast.data.list[11].main.pressure
    forecastTwoAverageTemp.innerHTML = res_forecast.data.list[11].main.temp
    forecastTwoTempMax.innerHTML = res_forecast.data.list[11].main.temp_max
    forecastTwoTempMin.innerHTML = res_forecast.data.list[11].main.temp_min
    // Day Three
    forecastThreeWeather.innerHTML = res_forecast.data.list[19].weather[0].main
    forecastThreeWeatherDesc.innerHTML = res_forecast.data.list[19].weather[0].description
    if (forecastThreeWeather.innerHTML === 'Clouds') {
        forecastThreeImg.src = 'imgs/cloudy.jpg'
    } else if (forecastThreeWeather.innerHTML === 'Clear') {
        forecastThreeImg.src = 'imgs/clear.jpg'
    } else {
        forecastThreeImg.src = 'imgs/snow.jpg'
    }
    forecastThreeFeelsLike.innerHTML = res_forecast.data.list[19].main.feels_like
    forecastThreeHumidity.innerHTML = res_forecast.data.list[19].main.humidity
    forecastThreePressure.innerHTML = res_forecast.data.list[19].main.pressure
    forecastThreeAverageTemp.innerHTML = res_forecast.data.list[19].main.temp
    forecastThreeTempMax.innerHTML = res_forecast.data.list[19].main.temp_max
    forecastThreeTempMin.innerHTML = res_forecast.data.list[19].main.temp_min
    //Day4
    forecastFourWeather.innerHTML = res_forecast.data.list[27].weather[0].main
    forecastFourWeatherDesc.innerHTML = res_forecast.data.list[27].weather[0].description
    if (forecastFourWeather.innerHTML === 'Clouds') {
        forecastFourImg.src = 'imgs/cloudy.jpg'
    } else if (forecastFourWeather.innerHTML === 'Clear') {
        forecastFourImg.src = 'imgs/clear.jpg'
    } else {
        forecastFourImg.src = 'imgs/snow.jpg'
    }
    forecastFourFeelsLike.innerHTML = res_forecast.data.list[27].main.feels_like
    forecastFourHumidity.innerHTML = res_forecast.data.list[27].main.humidity
    forecastFourPressure.innerHTML = res_forecast.data.list[27].main.pressure
    forecastFourAverageTemp.innerHTML = res_forecast.data.list[27].main.temp
    forecastFourTempMax.innerHTML = res_forecast.data.list[27].main.temp_max
    forecastFourTempMin.innerHTML = res_forecast.data.list[27].main.temp_min
    //Day5
    forecastFiveWeather.innerHTML = res_forecast.data.list[35].weather[0].main
    forecastFiveWeatherDesc.innerHTML = res_forecast.data.list[35].weather[0].description
    if (forecastFiveWeather.innerHTML === 'Clouds') {
        forecastFiveImg.src = 'imgs/cloudy.jpg'
    } else if (forecastFiveWeather.innerHTML === 'Clear') {
        forecastFiveImg.src = 'imgs/clear.jpg'
    } else {
        forecastFiveImg.src = 'imgs/snow.jpg'
    }
    forecastFiveFeelsLike.innerHTML = res_forecast.data.list[35].main.feels_like
    forecastFiveHumidity.innerHTML = res_forecast.data.list[35].main.humidity
    forecastFivePressure.innerHTML = res_forecast.data.list[35].main.pressure
    forecastFiveAverageTemp.innerHTML = res_forecast.data.list[35].main.temp
    forecastFiveTempMax.innerHTML = res_forecast.data.list[35].main.temp_max
    forecastFiveTempMin.innerHTML = res_forecast.data.list[35].main.temp_min
})

// Day of week 
const dayZero = document.querySelector('#dayZero')
const dayOne = document.querySelector('#dayOne')
const dayTwo = document.querySelector('#dayTwo')
const dayThree = document.querySelector('#dayThree')
const dayFour = document.querySelector('#dayFour')
const dayFive = document.querySelector('#dayFive')


let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let now = new Date()

dayZero.innerHTML = daysOfWeek[now.getDay()]
dayOne.innerHTML = daysOfWeek[now.getDay() + 1]
dayTwo.innerHTML = daysOfWeek[now.getDay() + 2]
dayThree.innerHTML = daysOfWeek[now.getDay() + 3]
dayFour.innerHTML = daysOfWeek[now.getDay() + 4]
dayFive.innerHTML = daysOfWeek[now.getDay() + 5]