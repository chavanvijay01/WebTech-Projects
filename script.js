async function fetchWeatherData(cityName){
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=448b136ce36df3e3b08147b91500b62b`
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=448b136ce36df3e3b08147b91500b62b`
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}


function fetchCity() {
    let cityName = document.getElementById("city_name");
    if(cityName.value === ""){
        alert("Enter a city name ");
    }
    else{
        fetchWeatherData(cityName.value);
        cityName.value="";
    }
}
