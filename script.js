const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "4d59fb9c877edfda1aa609354d750324";

const inputBox = document.querySelector(".navbar input");
const SearchBtn = document.querySelector(".navbar button");
const cloudImg = document.querySelector("img");


async function WeatherMain(cityName) {
    let fetchData = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    let source = await fetchData.json();

    console.log(source);
    document.querySelector(".temp").innerText = Math.round(source.main.temp) + "°c";
    document.querySelector(".place").innerText = source.name;
    document.querySelector(".humid_info").innerText = source.main.humidity + "%";
    document.querySelector(".wind_info").innerText = source.wind.speed + "km/h";
    
    if(source.weather[0].main == "Clear"){
        cloudImg.src="weather_clear.png";
    }else if(source.weather[0].main  == "Haze"){
        cloudImg.src="weather_haze.png";
    }else if(source.weather[0].main == "Rain"){
        cloudImg.src = "weather_rain.png";
    }else if(source.weather[0].main == "Drizzle"){
        cloudImg.src = "weather_drizzle.png";
    }else if(source.weather[0].main == "Mist"){
        cloudImg.src = "weather_mist.png";
    }else if(source.weather[0].main == "Clouds"){
        cloudImg.src = "weather_img.png";
    }
}

SearchBtn.addEventListener("click", ()=>{
    WeatherMain(inputBox.value);
})