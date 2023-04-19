let inputElem = document.getElementById("city") 
inputElem.addEventListener("keypress",(e)=>{
    if(e.keyCode == 13){
        fetchWeatherData(e.target.value)
    }
})

function fetchWeatherData(val) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        showResults(res)
    })

}

function showResults(res){
    let cityElem = document.querySelector(".city-name")
    cityElem.innerText = `${res.name},${res.sys.country}`

    let tempElem = document.querySelector(".temp")
    tempElem.innerHTML = `${Math.round(res.main.temp)}`+'&#8451'

    let weatherElem = document.querySelector(".weather")
    weatherElem.innerText = `${res.weather[0].main}`

    let highlowElem = document.querySelector(".high-low-temp")
    highlowElem.innerHTML = `${Math.round(res.main.temp_min)}&#8451;/${Math.round(res.main.temp_max)}&#8451;`
    showDate();
}

function showDate(){
    let dt = new Date()
    console.log(dt)
    let months = ["Jaunary","February","March","April","May","June","July","August","September","October","November","December"]
    console.log(months[dt.getMonth()])
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    console.log(days[dt.getDay()])

    let dateElem = document.querySelector(".city-date")
    dateElem.innerText = `${days[dt.getDay()]} ${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear()}`


}